import { Component } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: any = {
    username: '',
    password: ''
  };

  constructor(
    private service: JwtClientService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  getAccessToken() {
    let resp = this.service.generateToken(this.authRequest);
    resp.subscribe(
      (data: any) => {
        console.log("Token: " + data);
  
        // Verifica se o servidor retornou um código 500
        if (data.statusCode === 500) {
          console.log("Erro no servidor. Não foi possível gerar a token.");
          return;
        }

        this.tokenService.setToken(data); // Armazena a token no TokenService
  
        // Redireciona para a tela principal
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log("Erro na autenticação: " + error);
      }
    );
  }
}