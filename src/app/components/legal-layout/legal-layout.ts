import { Component, ViewEncapsulation, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalDocument } from './legal-document.model';

/**
 * Contenido compartido de las páginas legales (breadcrumb + título + cuerpo).
 * Se renderiza entre el navbar y el footer originales del layout.
 *
 * - `document`: documento estructurado (intro + secciones numeradas).
 * - <ng-content>: contenido libre adicional (avisos, tarjetas, etc.).
 *
 * Encapsulación desactivada para que los estilos (prefijo .legal) también
 * se apliquen al contenido proyectado desde cada página.
 */
@Component({
  selector: 'app-legal-layout',
  imports: [RouterLink],
  templateUrl: './legal-layout.html',
  styleUrl: './legal-layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LegalLayout {
  /** Título principal (h1). */
  heading = input.required<string>();
  /** Nombre de la página actual en el breadcrumb. */
  breadcrumb = input.required<string>();
  /** Documento legal estructurado (opcional). */
  document = input<LegalDocument>();

  /** Divide un texto con marcas **negrita** en partes renderizables. */
  protected parts(text: string) {
    return text
      .split('**')
      .map((value, index) => ({ value, bold: index % 2 === 1 }))
      .filter((part) => part.value.length > 0);
  }
}

