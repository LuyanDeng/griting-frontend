export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    profileImage?: string;
    role?:string;
 }
 
 export interface ProfileData extends Person {
    city?: string
    state?: string
    socialMedia?: {
       twitter?: string
       facebook?: string
       linkedin?: string
       personalWebsite?: string
    }
    headline?: string
    bio?: string
    company?:string
 }