import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  {
    path: '', component: ContactsComponent, children: [
      {path: '', component: ContactFormComponent},
      /*{path: 'listarCategoria', component: ListarCategoriaComponent},
      {path: 'crearCategoria', component: CrearCategoriaComponent},
      {path: 'editarCategoria/:id', component: EditarCategoriaComponent }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
