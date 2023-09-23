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

@NgModule({
  declarations: [
    ListagemContasComponent,
    CadastroContaComponent
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
  exports:[CadastroContaComponent, ListagemContasComponent],
  providers: [provideNgxMask()],
})
export class ContasModule { }
