import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
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
    { label: 'Contacto', href: '#contacto' },
  ];
  
  currentYear = new Date().getFullYear();
  
  scrollTo(event: Event, href: string) {
    event.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
