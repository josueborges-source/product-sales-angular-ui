import { Component } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})

export class SecurityComponent {

  authRequest:any={
    "username":"johndoe",
    "password":"password123"
  }

  response:any;

  constructor(private service:JwtClientService){}

  ngOnInit(){
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp = this.service.generateToken(authRequest);
    resp.subscribe(data=> {
      console.log("Token: " + data);
      this.response = data; 
    });
  }

  public accessApi(token: string){
    let resp = this.service.welcome(token);
    resp.subscribe(data=>this.response=data);
  }

}
