import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker';



//Natives
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Providers
import { AccountProvider } from '../providers/account.provider';
import { UserPersistanceProvider } from '../providers/user-persistance.provider';
import { ProfessionistaProvider } from '../providers/professionista.provider';
import { PrenotazioneProvider } from '../providers/prenotazione.provider';
import { UtenteProvider } from '../providers/utente.provider';
import { CategoriaProvider } from '../providers/categoria.provider';
import { PreferitiProvider } from '../providers/preferiti.provider';
import { PreferitiPersistanceProvider } from '../providers/preferiti-persistance.provider';
import { PrenotazionePersistanceProvider } from '../providers/prenotazione-persistance.provider';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
            name: '__jobservice',
        }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    UserPersistanceProvider,
    ImagePicker,
    ProfessionistaProvider,
    UtenteProvider,
    PrenotazioneProvider,
    CategoriaProvider,
    PreferitiProvider,
    PreferitiPersistanceProvider,
    PrenotazionePersistanceProvider
  ]
})
export class AppModule {}
