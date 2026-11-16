import { Component } from '@angular/core';
import { LegalLayout } from '../../components/legal-layout/legal-layout';
import { PRIVACIDAD } from './privacidad.content';

@Component({
  selector: 'app-privacidad-page',
  imports: [LegalLayout],
  template: `
    <app-legal-layout
      heading="Política de Privacidad"
      breadcrumb="Política de Privacidad"
      [document]="doc"
    >
      @if (isPending) {
        <div class="legal__notice" role="note">
          <p>El contenido definitivo de esta página está pendiente de publicación.</p>
        </div>
      }
    </app-legal-layout>
  `,
})
export class PrivacidadPage {
  protected readonly doc = PRIVACIDAD;
  protected readonly isPending = !PRIVACIDAD.intro.length && !PRIVACIDAD.sections.length;
}

