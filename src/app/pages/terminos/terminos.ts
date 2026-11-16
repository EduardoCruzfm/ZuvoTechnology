import { Component } from '@angular/core';
import { LegalLayout } from '../../components/legal-layout/legal-layout';
import { TERMINOS } from './terminos.content';

@Component({
  selector: 'app-terminos-page',
  imports: [LegalLayout],
  template: `
    <app-legal-layout
      heading="Términos y Condiciones"
      breadcrumb="Términos y Condiciones"
      [document]="doc"
    ></app-legal-layout>
  `,
})
export class TerminosPage {
  protected readonly doc = TERMINOS;
}

