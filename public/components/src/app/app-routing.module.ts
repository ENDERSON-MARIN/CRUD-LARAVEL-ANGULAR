import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditFormComponent } from './components/Computer/edit-form/edit-form.component';
import { ListadoComponent } from './components/Computer/listado/listado.component';


const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    pathMatch: 'full',
  },
  {
    path: 'computers',
    component: ListadoComponent,
  },
  {
    path: 'edit/:id',
    component: EditFormComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
