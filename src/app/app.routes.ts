import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormXComponent } from './form-x/form-x.component';
import { FormYComponent } from './form-y/form-y.component';

// Define your routes array
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-x', component: FormXComponent },
  { path: 'form-y', component: FormYComponent },
];
