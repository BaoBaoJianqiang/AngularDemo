import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


//静态引导
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleNgFactory } from './app.module.ngfactory'

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);