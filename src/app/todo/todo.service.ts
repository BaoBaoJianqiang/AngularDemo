import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor(private http: Http) { }

  private api_url = 'api123/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  addTodo(todoItem: string): Promise<Todo> {
    let todo = {id: UUID.UUID(), desc: todoItem, completed: false};
    
    return this.http
      .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
