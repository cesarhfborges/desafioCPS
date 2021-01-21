import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [ModalConfirmComponent],
  exports: [ModalConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
