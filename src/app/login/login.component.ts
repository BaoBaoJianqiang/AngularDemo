import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  onClick() {
    console.log('hello')
  }

  constructor() { }

  ngOnInit() {
  }

}
