import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtém o token do serviço TokenService
    const token = this.tokenService.getToken();

    // Verifica se o token está presente e adiciona ao cabeçalho da solicitação
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    // Passa a solicitação para o próximo manipulador
    return next.handle(request);
  }
}