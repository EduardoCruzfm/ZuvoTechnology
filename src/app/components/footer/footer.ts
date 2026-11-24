import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Pasajeros', href: '#pasajeros' },
    { label: 'Conductores', href: '#conductores' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ];
  
  legalLinks = [
    { label: 'Política de Privacidad', route: '/privacidad' },
    { label: 'Términos y Condiciones', route: '/terminos' },
    { label: 'Eliminar mi cuenta', route: '/eliminar-cuenta' },
  ];

  private router = inject(Router);
  
  currentYear = new Date().getFullYear();
  
  scrollTo(event: Event, href: string) {
    event.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Desde una página legal: volver al Inicio y bajar a la sección.
      this.router.navigate(['/'], { fragment: id });
    }
  }
}
