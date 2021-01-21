import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';

@NgModule({
  declarations: [ModalConfirmComponent, ModalAlertComponent],
  exports: [ModalConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
