import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroContaComponent } from './pages/contas/cadastro-conta/cadastro-conta.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';
import { DepositoContaComponent } from './pages/contas/deposito-conta/deposito-conta.component';
import { SacarContaComponent } from './pages/contas/sacar-conta/sacar-conta.component';
import { TransferenciaContaComponent } from './pages/contas/transferencia-conta/transferencia-conta.component';

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
        path: 'transferencia',
        component: TransferenciaContaComponent,
      },
      {
        path: 'sacar',
        component: SacarContaComponent,
      },
      {
        path: 'deposito',
        component: DepositoContaComponent,
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
