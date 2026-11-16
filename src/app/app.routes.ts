import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
    title: 'Zuvo — La nueva forma de moverte',
  },
  {
    path: 'privacidad',
    title: 'Política de Privacidad — Zuvo',
    loadComponent: () =>
      import('./pages/privacidad/privacidad').then((m) => m.PrivacidadPage),
  },
  {
    path: 'terminos',
    title: 'Términos y Condiciones — Zuvo',
    loadComponent: () =>
      import('./pages/terminos/terminos').then((m) => m.TerminosPage),
  },
  {
    path: 'eliminar-cuenta',
    title: 'Eliminar mi cuenta — Zuvo',
    loadComponent: () =>
      import('./pages/eliminar-cuenta/eliminar-cuenta').then(
        (m) => m.EliminarCuentaPage
      ),
  },
  // Cualquier otra ruta vuelve al Inicio (como ocurría antes de agregar rutas).
  { path: '**', redirectTo: '' },
];
