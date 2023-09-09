import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemClientesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
