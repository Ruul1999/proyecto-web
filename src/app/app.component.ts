import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'administracion-web';

  userValid: boolean = false;

  constructor (public login: LoginService) {}

  ngOnInit(): void {
    this.userValid = this.login.usuarioIngresa;
  }

}
