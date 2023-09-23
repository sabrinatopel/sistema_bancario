import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from 'src/app/shared/models/conta';
import { SaqueDeposito } from 'src/app/shared/models/saqueDeposito';
import { Transferencia } from 'src/app/shared/models/transferencia';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ContasService } from 'src/app/shared/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia-conta',
  templateUrl: './transferencia-conta.component.html',
  styleUrls: ['./transferencia-conta.component.scss']
})
export class TransferenciaContaComponent implements OnInit {
  editar: any;
  formGroup: FormGroup;
  contasList: Conta[] = [];


  constructor(
    private clienteService: ClientesService,
    private contaService: ContasService,
    private router: Router,
  ) {
    this.formGroup = new FormGroup({

      id: new FormControl(null),
      valor: new FormControl('', Validators.required),
      contaOrigem: new FormControl('', Validators.required),
      conta_destino: new FormControl('', Validators.required),
    });
    this.editar = false;
  }

  ngOnInit(): void {
    this.getAll();
  }

  cadastrar() {
    const conta: Transferencia = this.formGroup.value;
      this.contaService.transferenciaByIdConta(conta.contaOrigem, conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Valor transferido com sucesso!',
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
            text: 'Erro ao transferir o valor!',
          });
        },
      });
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
