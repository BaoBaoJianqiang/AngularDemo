import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username1 = ""
  password1 = ""

  onSubmit(formValue) {
    let result = this.service.loginWithCredentials(formValue.login111.username2, formValue.login111.password2);
    console.log('the result is ' + result);

    this.username1 = "abcd";
  }

  constructor(@Inject('auth') private service) { 
    
  }

  ngOnInit() {
  }

}
