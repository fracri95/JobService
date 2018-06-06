import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';


//Models
import {Utente} from '../../models/utente.model';

 //Providers
import {AccountProvider} from '../../providers/account.provider';



@IonicPage({
	segment:'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
    password:string = "";
    username:string = "";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public sAccount: AccountProvider,
        public loadingCtrl: LoadingController
    ) {

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
  
    }

    goSignup() {
        this.navCtrl.push('RegistrazionePage');
    }

     login() {
        this._validate().then(() => {
            const loading = this.loadingCtrl.create({ content: "Attendi" });
            loading.present();
            
            this.sAccount.login(this.username, this.password)
                .then((utente: Utente) => {
                    console.log("logged: ", utente);

                    loading.dismiss().then(() => {
                        this.navCtrl.setRoot('TabsPage');
                    });
                })
                .catch((msg) => {
                    console.log("errore login: non mi sono riuscito a loggare");

                    loading.dismiss().then(() => {
                        this.alertCtrl.create({
                            title: "JobService",
                            message: msg,
                            buttons: ["OK"]
                        }).present();
                    });
                });
        }).catch(() => {});
    }
    
    
    private _validate() {
        return new Promise((resolve, reject) => {
            let msg = "";
            if (this.username.trim() === "") {
                msg = "Attenzione! Campo username vuoto!";
            } else if (this.password.trim() === "") {
                msg = "Attenzione! Campo password vuoto!";
            }
            
            if (msg !== "") {
                this.alertCtrl.create({
                    title: "JobService",
                    message: msg,
                    buttons: ["OK"]
                }).present();
                
                reject();
            } else {
                resolve();
            }
        });
    }
    
     gotoMioProfilo(){
         this.navCtrl.setRoot('UtentePage');
     }
     

 }
