import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  username1 = ""
  password1 = ""

  // service: AuthService;

  onClick() {
    let result = this.service.loginWithCredentials(this.username1, this.password1);
    console.log('the result is ' + result);
  }

  constructor(@Inject('auth') private service) { 
    
  }

  ngOnInit() {
  }

}
