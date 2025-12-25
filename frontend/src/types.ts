export interface Course {
    id: number;
    title: string;
    description: string;
    color: string;
    thumbnailUrl : string;
}

export interface CourseDetails {
    id: number;
    title: string;
    description: string;
    color: string;
    thumbnailUrl : string;
    zoomLinks: string[];
}