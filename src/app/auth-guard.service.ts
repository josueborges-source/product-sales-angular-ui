import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    console.log("Is Authenticated: " + this.tokenService.isAuthenticated());

    console.log("Token: " + this.tokenService.getToken());
    
    // Verifica se o usuário está logado
    if (this.tokenService.isAuthenticated()) {
      return true;
    } else {
      // Se não estiver logado, redireciona para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
