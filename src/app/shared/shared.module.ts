import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalSuccessComponent } from './components/modal-success/modal-success.component';

@NgModule({
  declarations: [ModalConfirmComponent, ModalAlertComponent, ModalSuccessComponent],
  exports: [ModalConfirmComponent, ModalAlertComponent, ModalSuccessComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
