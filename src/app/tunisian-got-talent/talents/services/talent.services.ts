import { Profil, ProfilDetail, Comment, Rating } from './../models/talent.models';
import { wsUrl } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';

@Injectable({
    providedIn: "root"
  })
  export class TalentService {
    constructor(private httpClient: HttpClient){}

    /**************Profil Services*****************/

    createProfil(profil: Profil): Observable<any>{
      return this.httpClient.put<any>(wsUrl.talent.profil.create, profil,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    editProfil(profil: Profil): Observable<any>{
      return this.httpClient.post<any>(wsUrl.talent.profil.edit, profil,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    deleteProfil(id): Observable<any>{
      const url = StringFormat(wsUrl.talent.profil.delete , id);
      return this.httpClient.delete<any>(url ,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    getAllProfils(): Observable<Profil[]> {
      return this.httpClient.get<Profil[]>(wsUrl.talent.profil.getAll, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    getProfilById(id): Observable<ProfilDetail> {
      const url = StringFormat(wsUrl.talent.profil.getById , id);
      return this.httpClient.get<ProfilDetail>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    alreadyHaveProfil(idUser): Observable<any>{
      const url = StringFormat(wsUrl.talent.profil.alreadyHaveProfil , idUser);
      return this.httpClient.get<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    /**************Comment Services*****************/

    getCommentByProfil(id): Observable<Comment[]>{
      const url = StringFormat(wsUrl.talent.comment.getCommentsByProfil , id);
      return this.httpClient.get<Comment[]>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    addComment(comment: Comment): Observable<any>{
      return this.httpClient.post<Comment[]>(wsUrl.talent.comment.addNewComment, comment,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    editComment(comment: Comment): Observable<any>{
      return this.httpClient.post<Comment[]>(wsUrl.talent.comment.editComment, comment,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    deleteComment(id): Observable<any>{
      const url = StringFormat(wsUrl.talent.comment.delete , id);
      return this.httpClient.delete<Comment[]>(url ,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    /**************Like Services*****************/

    getLikebyCommentUserID(idUser, idComment){
      const url = StringFormat(wsUrl.talent.like.getLikebyCommentUserID, idUser, idComment);
      return this.httpClient.get<boolean>(url ,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    like(idUser, idComment){
      const url = StringFormat(wsUrl.talent.like.like, idUser, idComment);
      return this.httpClient.get<boolean>(url ,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    /**************Rating Services*****************/

    rateProfil(rate: Rating): Observable<any>{
      return this.httpClient.put<any>(wsUrl.talent.rating.create, rate,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    getRateByProfilUserId(idProfil, idUser){
      const url = StringFormat(wsUrl.talent.rating.getByProfilUserId, idProfil, idUser);
      return this.httpClient.get<number>(url ,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }