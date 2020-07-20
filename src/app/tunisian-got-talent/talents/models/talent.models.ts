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

export class Rating {
    id?: number;
    rate: string;
    iduser: any;
    profil: Profil;
}