import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroContaComponent } from './pages/contas/cadastro-conta/cadastro-conta.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';
import { TransferenciaContaComponent } from './pages/contas/transferencia-conta/transferencia-conta.component';
import { DepositoSacarContaComponent } from './pages/contas/deposito-sacar-conta/deposito-sacar-conta.component';
import { LoginComponent } from './pages/sistema/login/login.component';
import { PainelComponent } from './pages/sistema/painel/painel.component';

const routes: Routes = [
  {
    path: 'painel',
    component: PainelComponent,
  },
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
        component: DepositoSacarContaComponent,
      },
      {
        path: 'deposito',
        component: DepositoSacarContaComponent,
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
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
