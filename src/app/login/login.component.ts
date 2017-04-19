import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  service: AuthService;

  onClick(userName, password) {
    console.log(userName+','+password)

    let result = this.service.loginWithCredentials(userName, password);
    console.log('the result is ' + result);
  }

  constructor() { 
    this.service = new AuthService();
  }

  ngOnInit() {
  }

}
