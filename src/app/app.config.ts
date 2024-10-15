import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Mis imports
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-l342qnytn48eiqaw.us.auth0.com',
      clientId: 'f5qQeKYMVbQVUbpekjuUOI0i0ZwZXqt7',
      authorizationParams: {
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : ''
        // redirect_uri: environment.auth0RedirectUri
      }
    })
  ]
};
