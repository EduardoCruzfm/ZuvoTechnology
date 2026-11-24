import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say whether the mobile menu button opens or closes it', async () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.navbar__hamburger',
    )!;
    expect(button.getAttribute('aria-label')).toBe('Abrir menú');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-controls')).toBe('navbar-mobile-menu');

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-label')).toBe('Cerrar menú');
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('should close the mobile menu with Escape and focus the button', async () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.navbar__hamburger',
    )!;
    button.click();
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(component.isMobileMenuOpen()).toBe(false);
    expect(document.body.style.overflow).toBe('');
    expect(document.activeElement).toBe(button);
  });
});
