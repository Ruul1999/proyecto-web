import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioIngresa: boolean = false
	private baseUrl: string = environment.baseUrl;

  usuario: any = [];

  constructor(private http: HttpClient ) { }

  validaUsuarios(numeroUsuario: number, caontrasena: string): Observable<any> {
		return this.http.get<any>(`${this.baseUrl}/UserLogin?numeroRegistro=${numeroUsuario}&contrasena=${caontrasena}`);
	}

  validarUsuarioIngresa(numberuser: number, contrasena: string ) {

    this.validaUsuarios(numberuser, contrasena).subscribe((resp) => {
      console.log(resp);
      if(resp != null){
        this.usuarioIngresa = true;
        this.usuario = resp;
      }
    });

  }

}
