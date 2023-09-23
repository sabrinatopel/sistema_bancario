import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { Conta } from 'src/app/shared/models/conta';
import { SaqueDeposito } from 'src/app/shared/models/saqueDeposito';
import { Transferencia } from 'src/app/shared/models/transferencia';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ContasService } from 'src/app/shared/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito-sacar-conta',
  templateUrl: './deposito-sacar-conta.component.html',
  styleUrls: ['./deposito-sacar-conta.component.scss'],
})
export class DepositoSacarContaComponent implements OnInit {
  editar: any;
  formGroup: FormGroup;
  contasList: Conta[] = [];

  funcao: any;

  constructor(
    private clienteService: ClientesService,
    private contaService: ContasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      valor: new FormControl('', Validators.required),
      conta: new FormControl('', Validators.required),
    });
    this.editar = false;
  }

  ngOnInit(): void {
    this.funcao = this.route.snapshot.url[0].path;
    this.getAll();
  }

  cadastrar() {
    if (this.funcao == 'deposito') {
      const conta: SaqueDeposito = this.formGroup.value;
      this.contaService.depositarByIdConta(conta.conta, conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Depositado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['','contas']);
        },
        error: (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao depositar!',
          });
        },
      });
    }
    if (this.funcao == 'sacar') {
      const conta: SaqueDeposito = this.formGroup.value;
      this.contaService.sacarByIdConta(conta.conta, conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Sacado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['','contas']);
        },
        error: (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao sacar!',
          });
        },
      });
    }
    if (this.funcao == 'transferencia') {
      const conta: Transferencia = this.formGroup.value;
      this.contaService.transferenciaByIdConta(conta.contaOrigem, conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Sacado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/conta']);
        },
        error: (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao cadastrar conta!',
          });
        },
      });
    }
  }
  getAll() {
    this.contaService.getAll().subscribe((contas: any[]) => {
      for (let i = 0; i < contas.length; i++) {
        this.clienteService.getById(contas[i].cliente).subscribe((conta) => {
          contas[i].clienteNome = conta.nome;
        });
      }
      this.contasList = contas;
    });
  }
}
