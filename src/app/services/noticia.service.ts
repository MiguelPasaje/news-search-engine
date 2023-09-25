import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private _http: HttpClient) {}

  getNoticias(parametros: any): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=e91327ccda5641dda5971a64e6dfac57`;
    return this._http.get(URL);
  }
}
