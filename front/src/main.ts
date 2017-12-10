import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(_=> {
    let cond = 'serviceWorker' in navigator;
    if (cond) {
      navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service worker installed'))
      .catch(err => console.error);
    }
    else {
      console.log('Service worker not supported')
    }
  })
  .catch(err => console.log(err));
