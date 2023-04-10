import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Usuario } from '../empelados/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioIngresa: boolean = true;
  muestraDatosIncorrectoMessage: boolean = false;
  muestraSpinerPocesando: boolean = false;
	private baseUrl: string = environment.baseUrl;

  usuario: Usuario = {};
 
  // usuario: Usuario = {
  //   alias: "Raul Dominguez Hernandez",
  //   contrasena: "hesoyam",
  //   correo: "dominguezraul1999gmail.com",
  //   idUsuario: 1,
  //   nombreCompleto: "Raul Dominguez Hernandez",
  //   numeroRegistro: 5815472,
  //   tipoUsuario: 1
  // };

  constructor(private http: HttpClient ) { }

  validaUsuarios(numeroUsuario: number, caontrasena: string): Observable<any> {
		return this.http.get<any>(`${this.baseUrl}/UserLogin?numeroRegistro=${numeroUsuario}&contrasena=${caontrasena}`);
	}

  validarUsuarioIngresa(numberuser: number, contrasena: string ) {

    this.validaUsuarios(numberuser, contrasena).subscribe((resp) => {
      console.log(resp);
      if(resp != null){
        this.usuarioIngresa = true;
        this.muestraDatosIncorrectoMessage = false;
        this.muestraSpinerPocesando = false;
        this.usuario = resp;
      }else{
        this.muestraDatosIncorrectoMessage = true;
        this.muestraSpinerPocesando = false;
      }
    });

  }

}
