import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { MOCK_ANIMAL_RESPONSE } from '../constants/http-mock.constant';
import { delay } from 'rxjs/operators';

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'mock-url') {
      return of(new HttpResponse(
        { status: 200, body: MOCK_ANIMAL_RESPONSE }
      )).pipe(delay(3000));
    }
    next.handle(req);
  }
}
