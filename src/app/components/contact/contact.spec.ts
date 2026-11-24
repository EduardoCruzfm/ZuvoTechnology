import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;
  let opened: string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    opened = [];
    // No navegar en la prueba: guardar el link que se abriría.
    (component as unknown as { openMailClient: (url: string) => void }).openMailClient = (url) =>
      opened.push(url);
    await fixture.whenStable();
  });

  it('should link to the support email', () => {
    const link = (fixture.nativeElement as HTMLElement).querySelector('.contact__detail-link');
    expect(link?.getAttribute('href')).toBe('mailto:soporte@zuvotechnology.com');
    expect(link?.textContent).toContain('soporte@zuvotechnology.com');
  });

  it('should not open the email app while the form is invalid', () => {
    component.onSubmit();
    expect(opened).toEqual([]);
    expect(component.isSubmitted()).toBe(false);
  });

  it('should open the email app with the message ready for support', async () => {
    component.contactForm.setValue({
      name: ' Ana ',
      email: 'ana@ejemplo.com',
      message: 'Hola & gracias',
    });
    component.onSubmit();

    expect(opened.length).toBe(1);
    const url = new URL(opened[0]);
    expect(url.protocol).toBe('mailto:');
    expect(url.pathname).toBe('soporte@zuvotechnology.com');
    expect(url.searchParams.get('subject')).toBe('Consulta desde la web: Ana');
    expect(url.searchParams.get('body')).toBe(
      'Hola & gracias\r\n\r\n—\r\nNombre: Ana\r\nEmail: ana@ejemplo.com',
    );

    await fixture.whenStable();
    const success = (fixture.nativeElement as HTMLElement).querySelector('.contact__success');
    expect(success?.textContent).toContain('Tu mensaje está listo');
    expect(success?.textContent).not.toContain('Mensaje enviado');
  });

  it('should go back to the form', async () => {
    component.isSubmitted.set(true);
    await fixture.whenStable();
    const back = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.contact__success button',
    );
    back?.click();
    await fixture.whenStable();
    expect(component.isSubmitted()).toBe(false);
    expect((fixture.nativeElement as HTMLElement).querySelector('.contact__success')).toBeNull();
  });
});
