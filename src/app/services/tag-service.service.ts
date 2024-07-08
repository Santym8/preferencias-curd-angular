import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {
  // Definir API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  //Http options:
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Manejo de errores
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiURL + '/tags')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTag(id: number): Observable<Tag> {
    return this.http.get<Tag>(this.apiURL + '/tags/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.apiURL + '/tags', JSON.stringify(tag), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateTag(id: number, tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.apiURL + '/tags/' + id, JSON.stringify(tag), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteTag(id: number) {
    return this.http.delete<Tag>(this.apiURL + '/tags/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}
