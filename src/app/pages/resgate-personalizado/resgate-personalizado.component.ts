import {Component, OnInit} from '@angular/core';
import {Investimento} from '../../shared/models/investimento';
import {Router} from '@angular/router';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmComponent} from '../../shared/components/modal-confirm/modal-confirm.component';
import {ModalAlertComponent} from '../../shared/components/modal-alert/modal-alert.component';
import {ModalSuccessComponent} from '../../shared/components/modal-success/modal-success.component';

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.scss']
})
export class ResgatePersonalizadoComponent implements OnInit {

  investimento: Investimento;

  form: FormGroup;

  constructor(
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.form = new FormGroup({
      acoes: new FormArray([], []),
    }, {
      validators: (abstractControl: AbstractControl) => {
        const vals = abstractControl.get('acoes').value.filter(ac => ac.valor != null);
        if (vals.length < 1) {
          return {error: 'requiredAcoes'};
        }
        return null;
      }
    });
  }

  get acoes(): FormArray {
    return this.form.get('acoes') as FormArray;
  }

  get totalAResgatar(): number {
    return this.acoes.value.map(i => i.valor).reduce((a, b) => (a + b));
  }

  get restanteResgatar(): number {
    return this.acoes.value.map(i => i.saldo - i.valor).reduce((a, b) => (a + b));
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('data')) {
      this.investimento = JSON.parse(sessionStorage.getItem('data')) as Investimento;
      for (const acao of this.investimento.acoes) {
        const f = this.createFormAcao();
        f.patchValue({
          id: acao.id,
          nome: acao.nome,
          saldo: ((acao.percentual / 100) * this.investimento.saldoTotalDisponivel).toFixed(2),
        });
        this.acoes.push(f);
      }
    } else {
      this.router.navigate(['/investimentos']);
    }
  }

  createFormAcao(): FormGroup {
    return new FormGroup({
      id: new FormControl(null, [Validators.required]),
      nome: new FormControl(null, [Validators.required]),
      saldo: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.min(.01)]),
    }, {
      validators: (abstractControll: AbstractControl) => {
        if (abstractControll.value.valor) {
          if (abstractControll.value.valor as number > abstractControll.value.saldo) {
            return {error: 'requiredSaldo'};
          }
        }
        return null;
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const modalConfirm = this.modalService.open(ModalConfirmComponent, {size: 'lg', centered: true});
      modalConfirm.componentInstance.investimento = {
        nome: this.investimento.nome,
        saldoTotalDisponivel: this.investimento.saldoTotalDisponivel,
        acoes: this.acoes.value.filter(v => v.valor != null),
      };
      modalConfirm.result.then((result) => {
        if (result) {
          const modalSuc = this.modalService.open(ModalSuccessComponent, {size: 'lg', centered: true});
          modalSuc.result.then((res) => {
            if (res) {
              this.router.navigate(['/investimentos']);
            }
          });
        }
      });
    } else {
      const mdError = this.modalService.open(ModalAlertComponent, {centered: true});
      mdError.componentInstance.modalErrors = this.form.errors;
    }
  }
}
