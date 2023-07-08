import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = '';
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}