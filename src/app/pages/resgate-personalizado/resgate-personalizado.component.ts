import {Component, OnInit} from '@angular/core';
import {Investimento} from '../../shared/models/investimento';
import {Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmComponent} from '../../shared/components/modal-confirm/modal-confirm.component';

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
      acoes: new FormArray([]),
    });
  }

  get acoes(): FormArray {
    return this.form.get('acoes') as FormArray;
  }

  get totalAResgatar(): number {
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
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('certo');
      const modalRef = this.modalService.open(ModalConfirmComponent, { size: 'lg', centered: true });
      modalRef.componentInstance.name = 'World';
    } else {
      console.log('errado');
    }
  }
}
