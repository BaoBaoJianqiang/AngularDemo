import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  // service: AuthService;

  onClick(userName, password) {
    console.log(userName+','+password)

    let result = this.service.loginWithCredentials(userName, password);
    console.log('the result is ' + result);
  }

  constructor(private service: AuthService) { 
    
  }

  ngOnInit() {
  }

}
