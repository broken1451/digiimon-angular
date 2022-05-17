import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorDigimon implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH,PUT');
    request = request.clone({
      headers
    });
    return next.handle(request).pipe(catchError(this.manejarErr));;
  }


  manejarErr(err: HttpErrorResponse) {
    // console.log('ERROR EN EL SERVIDOR', err);
    // console.warn(err);
    return throwError(err);
  }
}
