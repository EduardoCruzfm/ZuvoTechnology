import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ConductoresPage } from './conductores';

describe('ConductoresPage', () => {
  let fixture: ComponentFixture<ConductoresPage>;
  let element: HTMLElement;

  beforeEach(async () => {
    // jsdom no trae IntersectionObserver (lo usan las animaciones de aparición).
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe() {}
        disconnect() {}
      },
    );

    await TestBed.configureTestingModule({
      imports: [ConductoresPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConductoresPage);
    element = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should list every document the app asks for', () => {
    const items = Array.from(element.querySelectorAll('#requisitos li')).map((li) =>
      li.textContent?.trim(),
    );
    expect(items).toEqual(
      expect.arrayContaining([
        'DNI',
        'Licencia de conducir vigente',
        'Seguro del vehículo vigente',
        'Cédula del vehículo',
        'Una foto tuya, de frente: es la que ve el pasajero',
      ]),
    );
  });

  it('should show both plans', () => {
    const titles = Array.from(element.querySelectorAll('h3')).map((h3) => h3.textContent?.trim());
    expect(titles).toContain('Comisión');
    expect(titles).toContain('Zuvo Pro');
  });

  it('should send to the download section of the home page', () => {
    const links = element.querySelectorAll('a[href="/#descargar"]');
    expect(links.length).toBe(2);
  });

  it('should show only the driver questions', () => {
    expect(element.querySelector('.faq__tab')).toBeNull();
    expect(element.querySelector('.faq__question')?.textContent).toContain(
      '¿Qué necesito para ser conductor?',
    );
  });
});
