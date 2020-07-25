import { UserDetails } from './../../shared/shared.models';
export class Profil {
    id?: number;
    address: string;
    governorate: string;
    age: number;
    telephone: number;
    talent: string;
    category: string;
    description: string;
    video: string;
    photo: string;
    banned: boolean;
    nbbanners: number;
    banneduntil?: Date;
    iduser: any;
}

export class ProfilDetail {
    profils?: Profil;
    comment?:Comment[];
    likes?:any;
    ratings?:any;
}

export class Comment {
    id?:number;
    nbdislike?:number;
    nblike?:number;
    text?:string;
    profils?: Profil;
    profil?: Profil;
    iduser?:any;
    constructor(){}
}

export class Rating {
    id?: number;
    rate: string;
    iduser: any;
    profil: Profil;
}