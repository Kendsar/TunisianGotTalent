import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { wsUrl } from "environments/environment";
import { Observable } from "rxjs";
import { StringFormat } from "app/tunisian-got-talent/shared/shared.utils";
import { Forum } from "../models/forum.model";

@Injectable({
  providedIn: "root",
})
export class ForumService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get("/tgt/articles", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  add(id) {
    return this.httpClient.post("/tgt/reaction/post", id, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getAllComm(id) {
    const url = StringFormat("/tgt/commentByArticle/{0}", id);
    return this.httpClient.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  addComment(comment) {
    return this.httpClient.post("/tgt/comment/post", comment, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  addArticle(a) {
    return this.httpClient.post("/tgt/article/post", a, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getLikeByArticle(articleId): Observable<any>{
    const url = StringFormat("/tgt/article/reaction/{0}", articleId);
    return this.httpClient.get<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
