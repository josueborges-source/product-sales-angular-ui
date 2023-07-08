import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fabricante-form',
  templateUrl: './fabricante-form.component.html',
  styleUrls: ['./fabricante-form.component.css']
})
export class FabricanteFormComponent {
  fabricante: any = {
    nome: '',
    endereco: ''
  };

  constructor(private http: HttpClient) {}

  criarFabricante() {
    this.http.post<any>('/fabricantes', this.fabricante)
      .subscribe(
        response => {
          console.log('Fabricante criado:', response);
          // Lógica adicional após criar o fabricante, se necessário
        },
        error => {
          console.error('Erro ao criar fabricante:', error);
          // Lógica adicional para lidar com erros, se necessário
        }
      );
  }
}
