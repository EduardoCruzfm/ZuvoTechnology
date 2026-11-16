import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { Passengers } from '../../components/passengers/passengers';
import { Drivers } from '../../components/drivers/drivers';
import { Technology } from '../../components/technology/technology';
import { Security } from '../../components/security/security';
import { WhyZuvo } from '../../components/why-zuvo/why-zuvo';
import { Download } from '../../components/download/download';
import { JoinDrivers } from '../../components/join-drivers/join-drivers';
import { AboutUs } from '../../components/about-us/about-us';
import { Contact } from '../../components/contact/contact';

/**
 * Página de Inicio: contiene las mismas secciones que antes estaban en app.html.
 * El navbar y el footer viven en el layout compartido (App).
 */
@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    HowItWorks,
    Passengers,
    Drivers,
    Technology,
    Security,
    WhyZuvo,
    Download,
    JoinDrivers,
    AboutUs,
    Contact,
  ],
  templateUrl: './home.html',
  styles: ':host { display: block; }',
})
export class Home implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  // Animaciones de aparición (.reveal) — misma lógica que tenía App.
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

