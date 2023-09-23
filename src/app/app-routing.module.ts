import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroContaComponent } from './pages/contas/cadastro-conta/cadastro-conta.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';

const routes: Routes = [
  {
    path: 'clientes',
    children: [
      {
        path: 'novo',
        component: CadastroClienteComponent,
      },
      {
        path: 'editar/:id',
        component: CadastroClienteComponent,
      },
      {
        path: '',
        component: ListagemClientesComponent,
      },
    ],
  },
  {
    path: 'contas',
    children: [
      {
        path: 'novo',
        component: CadastroContaComponent,
      },
      {
        path: 'editar/:id',
        component: CadastroContaComponent,
      },
      {
        path: '',
        component: ListagemContasComponent,
      },
    ],
  },
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
