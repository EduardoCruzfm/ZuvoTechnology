import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Faq } from './faq';
import { FAQ } from './faq.content';

describe('Faq', () => {
  let fixture: ComponentFixture<Faq>;
  let element: HTMLElement;

  const questions = () =>
    Array.from(element.querySelectorAll('.faq__question span')).map((el) => el.textContent?.trim());
  const tabs = () => Array.from(element.querySelectorAll<HTMLButtonElement>('.faq__tab'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faq],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Faq);
    element = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should show the passenger questions first', () => {
    expect(questions()).toEqual(FAQ.pasajeros.map((item) => item.question));
    expect(tabs().map((tab) => tab.getAttribute('aria-pressed'))).toEqual(['true', 'false']);
    expect(element.querySelector('a[href="/conductores"]')).toBeNull();
  });

  it('should switch to the driver questions and link to the drivers page', async () => {
    tabs()[1].click();
    await fixture.whenStable();

    expect(questions()).toEqual(FAQ.conductores.map((item) => item.question));
    expect(tabs()[1].getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('a[href="/conductores"]')?.textContent).toContain(
      'Todo sobre ser conductor',
    );
  });

  it('should show only one group, without buttons, when the audience is fixed', async () => {
    fixture.componentRef.setInput('audience', 'conductores');
    await fixture.whenStable();

    expect(tabs().length).toBe(0);
    expect(questions()).toEqual(FAQ.conductores.map((item) => item.question));
    expect(element.querySelector('a[href="/conductores"]')).toBeNull();
  });

  it('should offer the support email', () => {
    const link = element.querySelector<HTMLAnchorElement>('.faq__more-link');
    expect(link?.getAttribute('href')).toBe('mailto:soporte@zuvotechnology.com');
  });
});
