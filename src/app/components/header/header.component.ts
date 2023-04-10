import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: any = '';
  nombreUsuario: string | undefined= ''

  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.date = new Date();

    setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.nombreUsuario = this.login.usuario.alias;

  }

  salir(){
    this.login.usuarioIngresa = false;
  }

  
}
