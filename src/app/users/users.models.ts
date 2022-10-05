
//READ
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}
export interface ResponseUser {
    data: User;
}

//Create
export interface RequestCreate {
    first_name: string;
    last_name: string;
    email: string;
   
}
export interface ResponseCreate {
 
    createdAt: string;
    id: string;
}



//UPDATE
export interface RequestUpdate {
    first_name?: string;
    last_name?:string;
    email?: string;
   
   }

export interface ResponseUpdate {
   first_name?: string;
    last_name?:string;
    email?: string;
    id?: string;
    updatedAt?: string;
}

