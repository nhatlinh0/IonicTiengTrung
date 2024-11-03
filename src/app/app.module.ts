import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'Database',
      useFactory: () => {
        const app = initializeApp(environment.firebaseConfig);
        return getDatabase(app); }
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
