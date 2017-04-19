import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  // service: AuthService;

  onClick(userName, password) {
    console.log(userName+','+password)

    let result = this.service.loginWithCredentials(userName, password);
    console.log('the result is ' + result);
  }

  constructor(@Inject('auth') private service) { 
    
  }

  ngOnInit() {
  }

}
