import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {    
    if(username == 'bao') 
      return true;

    return false;
  }
}
