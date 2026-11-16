import { Component, Injector, afterNextRender, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

/**
 * Layout compartido: navbar y footer originales permanecen fijos y
 * solo cambia el contenido de <router-outlet> según la ruta.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zuvo-technology');

  private router = inject(Router);
  private injector = inject(Injector);
  private lastPath: string | null = null;

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe((e) => this.handleScroll(e.urlAfterRedirects));
  }

  /**
   * Al cambiar de página: vuelve arriba, o baja a la sección indicada
   * en el fragmento (ej.: /#contacto desde una página legal).
   * Los anclajes dentro de la misma página conservan su comportamiento original.
   */
  private handleScroll(url: string) {
    const path = url.split(/[?#]/)[0];
    const fragment = this.router.parseUrl(url).fragment;
    const previousPath = this.lastPath;
    this.lastPath = path;

    if (previousPath === null || previousPath === path) {
      return;
    }

    afterNextRender(
      () => {
        const target = fragment ? document.getElementById(fragment) : null;
        if (target) {
          target.scrollIntoView({ behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      },
      { injector: this.injector }
    );
  }
}
