import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wsUrl } from 'environments/environment';
import { Observable } from 'rxjs';
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';
import { Forum } from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get("http://localhost:8000/tgt/articles",{
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }


  
  add(id){
    return this.httpClient.post("http://127.0.0.1:8000/tgt/reaction/post", id,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
