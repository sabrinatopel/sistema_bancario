import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';
import { SacarContaComponent } from './sacar-conta/sacar-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';

@NgModule({
  declarations: [
    ListagemContasComponent,
    CadastroContaComponent,
    DepositoContaComponent,
    SacarContaComponent,
    TransferenciaContaComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CadastroContaComponent,
    ListagemContasComponent,
    DepositoContaComponent,
    SacarContaComponent,
    TransferenciaContaComponent,
  ],
  providers: [provideNgxMask()],
})
export class ContasModule {}
