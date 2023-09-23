import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListagemClientesComponent,
    CadastroClienteComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    BrowserModule, 
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[CadastroClienteComponent, ListagemClientesComponent],
  providers: [provideNgxMask()],
})
export class ClientesModule { }
