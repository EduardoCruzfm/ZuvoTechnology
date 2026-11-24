import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/** Casilla de soporte: reenvía al equipo de Zuvo. */
export const SUPPORT_EMAIL = 'soporte@zuvotechnology.com';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  /**
   * La web no tiene servidor propio: el formulario abre la app de email de la
   * persona con el mensaje listo para soporte. Se envía desde ahí.
   */
  onSubmit() {
    if (this.contactForm.valid) {
      this.openMailClient(this.buildMailto());
      this.isSubmitted.set(true);
    }
  }

  closeSuccess() {
    this.isSubmitted.set(false);
  }

  buildMailto(): string {
    const { name, email, message } = this.contactForm.value;
    const subject = `Consulta desde la web: ${name.trim()}`;
    const body = `${message.trim()}\r\n\r\n—\r\nNombre: ${name.trim()}\r\nEmail: ${email.trim()}`;
    return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  protected openMailClient(url: string) {
    window.location.href = url;
  }
}
