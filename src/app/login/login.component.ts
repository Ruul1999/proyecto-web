import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  usuario = new FormGroup({
    numeroRegistro: new FormControl('',Validators.required),
    contrasena: new FormControl('', Validators.required),
  });

  usuarioValido:boolean = false;

  constructor( public login: LoginService, private http: HttpClient ) { }

  ngOnInit(): void {
  }

  usuarioIngresaSubmit() {
    console.log(this.usuario.value);

    this.login.muestraSpinerPocesando = true;
    setTimeout(() => {
      this.login.validarUsuarioIngresa(parseInt(this.usuario.value.numeroRegistro!), this.usuario.value.contrasena!);
      this.usuarioValido = !this.login.usuarioIngresa;
    }, 3000);

  }

}
