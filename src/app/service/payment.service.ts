import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {}
  };

  constructor(private httpClient: HttpClient) { }

  postMethod(url: string, obj: any) {
    if (environment.mock) {
      return this.httpClient.get('/assets/mock/savepayment.json');
    } else {
      return this.httpClient.post<any>(environment.apiUrl + url, obj, this.httpOptions).pipe(
        map(response => {
          return response;
        }),
        catchError(err => {
          return this.onError(err);
        })
      );
    }
  }

  private onError(error: any): any {
    return throwError(error);
  }

}
