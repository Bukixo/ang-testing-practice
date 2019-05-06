import { Component} from '@angular/core';
import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent{

  constructor(private auth: AuthService) { }

  needsLogin(){
    return !this.auth.isAuthenticated();
  }

}
