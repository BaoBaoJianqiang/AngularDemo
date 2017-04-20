import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todo'
      },
      {
        path: 'login',
        component: LoginComponent,        
      },
      {
        path: 'todo',
        component: TodoComponent,        
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);