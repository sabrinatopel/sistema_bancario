import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListagemClientesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule, 
  ], 
})
export class ClientesModule { }
