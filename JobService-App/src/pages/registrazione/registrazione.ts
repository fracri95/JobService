import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

//interfaces
import { UserSignupInterface } from '../../interfaces/user-signup.interface';

//Providers
import { AccountProvider } from '../../providers/account.provider';


@IonicPage({
    segment:'registrazione'
})
@Component({
  selector: 'page-registrazione',
  templateUrl: 'registrazione.html',
})
export class RegistrazionePage {

utente: UserSignupInterface;
  annoMax: string = "1999";


  constructor(
public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public sAccount: AccountProvider,
        public loadingCtrl: LoadingController
    
  ) {
    this.utente = {
            username: "",
            password: "",
            nome: "",
            cognome: "",
            email: "",
            datadinascita:"",
            telefono: "",
            citta:"",
            eta:0
        
  }; }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrazionePage');
  }
  
  registrati(){      
        console.log(this.utente);
        
        this._validate().then(() => {
            const loading = this.loadingCtrl.create({content: "Attendi" });
            loading.present();
            
            this.sAccount.registrati(this.utente)
                .then(() => {
                    loading.dismiss().then(() => {
                        const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Registrazione avvenuta correttamente!",
                            buttons: ["OK"]
                        });
                        alert.present();
                        alert.onDidDismiss(() => {
                            this.navCtrl.pop();
                        });
                    });
                })
                .catch(msg => {
                    loading.dismiss();
                    this.alertCtrl.create({
                        title:"JobService",
                        message: msg,
                        buttons: ["OK"]
                    }).present();
                });
        }).catch(() => {});
    }
    
    
    
    private _validate() {
        return new Promise((resolve, reject) => {
            let msg = "";
            
            if (this.utente.username.trim() === "") {
                msg = "Attenzione! Campo username vuoto!";
            } else if (this.utente.email.trim() === "") {
                msg = "Attenzione! Campo email vuoto!";
            } else if (this.utente.password.trim() === "") {
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
}
   