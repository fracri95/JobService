import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




//Providers
import { AccountProvider } from '../providers/account.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
platform: Platform, 
statusBar: StatusBar, 
private splashScreen: SplashScreen, 
sAccount: AccountProvider
) {
this.splashScreen.show();          
platform.ready().then(() => {
            let promises = [] as Promise<any>[];
            promises.push(sAccount.initialize());
Promise.all(promises).then(() => {
                if (sAccount.isLogged()) {
                    this.rootPage = 'TabsPage';
                } else {
                    this.rootPage = 'HomePage1';
                }
            });

            statusBar.styleDefault();
            this.splashScreen.hide();
        });
  }
}

