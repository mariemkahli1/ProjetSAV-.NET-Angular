import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = `http://localhost:5146/api/Article`;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl, article);
  }

  
  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.baseUrl}/${article.id}`, article);
  }
}
