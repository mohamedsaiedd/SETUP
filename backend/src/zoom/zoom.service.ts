import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ZoomService {
    
    private accountId = process.env.ZOOM_ACCOUNT_ID
    private clientId = process.env.ZOOM_CLIENT_ID
    private clientSecret = process.env.ZOOM_CLIENT_SECRET

    private async getAccessToken(): Promise<string> {
        if (!this.accountId || !this.clientId || !this.clientSecret) {
            throw new InternalServerErrorException('Zoom credentials are not configured');
        }

        const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
        const url = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${this.accountId}`;

        try {   
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Zoom Auth Error:', error);
                throw new InternalServerErrorException(`Failed to get Zoom access token: ${error.reason || response.statusText}`);
            }

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('Zoom Token Request Error:', error);
            throw new InternalServerErrorException('Error requesting Zoom access token');
        }
    }

    async createMeeting(topic: string, startTime: Date): Promise<string> {
        const token = await this.getAccessToken();
        const url = 'https://api.zoom.us/v2/users/me/meetings';

        const body = {
            topic,
            type: 2, // Scheduled meeting
            start_time: startTime.toISOString(),
            duration: 60, // Default 60 minutes
            timezone: 'UTC',
            settings: {
                host_video: true,
                participant_video: true,
                join_before_host: false,
                mute_upon_entry: true,
                waiting_room: true
            }
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Zoom Create Meeting Error:', error);
                throw new InternalServerErrorException(`Failed to create Zoom meeting: ${error.message || response.statusText}`);
            }

            const data = await response.json();
            return data.join_url;
        } catch (error) {
            console.error('Zoom Meeting Creation Request Error:', error);
            throw new InternalServerErrorException('Error requesting Zoom meeting creation');
        }
    }
}

