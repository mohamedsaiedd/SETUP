export interface Course {
    id: number;
    title: string;
    description: string;
    color: string;
    thumbnailUrl : string;
}

export interface Session {
    id: string;
    title: string;
    date: string;
    link: string;
}

export interface CourseDetails {
    id: number;
    title: string;
    description: string;
    color: string;
    thumbnailUrl : string;
    zoomLinks: string[];
    sessions?: Session[];
}