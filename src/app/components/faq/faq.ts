import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SUPPORT_EMAIL } from '../contact/contact';
import { FAQ, FaqAudience } from './faq.content';

/**
 * Preguntas frecuentes.
 * - En el Inicio: pasajeros y conductores, con botones para cambiar.
 * - Con `audience` (ej.: la página de conductores): solo ese grupo, sin botones.
 */
@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  audience = input<FaqAudience>();
  selected = signal<FaqAudience>('pasajeros');

  readonly options: { value: FaqAudience; label: string }[] = [
    { value: 'pasajeros', label: 'Pasajeros' },
    { value: 'conductores', label: 'Conductores' },
  ];
  readonly supportEmail = SUPPORT_EMAIL;

  current = computed(() => this.audience() ?? this.selected());
  questions = computed(() => FAQ[this.current()]);
}
