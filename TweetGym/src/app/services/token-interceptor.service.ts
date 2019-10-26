import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private as: AuthService
  ) { }

  intercept(req, next){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Token ' + this.as.getToken(),
      }
    })
    return next.handle(tokenizedReq)
  }
}
