import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Faq } from '../../components/faq/faq';

/**
 * Página para conductores: requisitos, cómo empezar, planes y cobros.
 * Sin montos: los cambia la empresa desde su panel (en la app se ven los vigentes).
 */
@Component({
  selector: 'app-conductores-page',
  imports: [RouterLink, Faq],
  templateUrl: './conductores.html',
  styleUrl: './conductores.scss',
})
export class ConductoresPage implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly vehicle = ['Un auto o una moto', 'Marca, modelo, año y color', 'Patente'];

  readonly documents = [
    'DNI',
    'Licencia de conducir vigente',
    'Seguro del vehículo vigente',
    'Cédula del vehículo',
    'Una foto tuya, de frente: es la que ve el pasajero',
  ];

  readonly steps = [
    { title: 'Descargá la app', text: 'Creá tu cuenta y elegí Conductor.' },
    { title: 'Cargá tus datos', text: 'Tu vehículo y tus documentos, desde el celular.' },
    { title: 'Te revisamos', text: 'El equipo de Zuvo revisa todo y te avisa cuando tu cuenta está aprobada.' },
    { title: 'Conectate', text: 'Elegí tu plan y empezá a recibir viajes.' },
  ];

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Animaciones de aparición (.reveal) — misma lógica que Home.
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      this.observer!.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
