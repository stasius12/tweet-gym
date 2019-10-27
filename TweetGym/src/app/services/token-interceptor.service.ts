import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector
    ) { }

  intercept(req, next){
    let authService= this.injector.get(AuthService);
    let token = authService.getToken();
    if(token){
      token = `Token ${token}`;
    }
    else{
      token=""
    }
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: token,
      }
    })
    
    return next.handle(tokenizedReq)
  }
}
