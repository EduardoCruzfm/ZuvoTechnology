import {
  Component,
  HostListener,
  signal,
  ElementRef,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private el = inject(ElementRef);
  private router = inject(Router);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Pasajeros', href: '#pasajeros' },
    { label: 'Conductores', href: '#conductores' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollTo(event: Event, href: string) {
    event.preventDefault();
    this.closeMobileMenu();
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
