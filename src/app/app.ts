import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Passengers } from './components/passengers/passengers';
import { Drivers } from './components/drivers/drivers';
import { Technology } from './components/technology/technology';
import { Security } from './components/security/security';
import { WhyZuvo } from './components/why-zuvo/why-zuvo';
import { Download } from './components/download/download';
import { JoinDrivers } from './components/join-drivers/join-drivers';
import { AboutUs } from './components/about-us/about-us';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { NgIf } from '@angular/common'; // added just in case

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
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
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zuvo-technology');

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: unobserve after revealing if you only want it to animate once
          // observer.unobserve(entry.target); 
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
  }
}
