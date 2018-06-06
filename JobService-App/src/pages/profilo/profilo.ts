import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

//Providers
import { PreferitiProvider } from '../../providers/preferiti.provider';
import { ProfessionistaProvider } from '../../providers/professionista.provider';
import { AccountProvider } from '../../providers/account.provider';


//interface
import { PreferitoInterface } from '../../interfaces/preferito.interface';
import { ProfessionistaInterface } from '../../interfaces/professionista.interface';

//Models
import { Professionista } from '../../models/professionista.model';


@IonicPage()
@Component({
selector: 'page-profilo',
templateUrl: 'profilo.html',
})
export class ProfiloPage {

   professionista= new Professionista();
prof:ProfessionistaInterface;
idProfessionista: number;
preferito: PreferitoInterface;
idpparam:number;
    
    
    constructor(
    public navCtrl: NavController, 
              public navParams: NavParams,
              public sProfessionista: ProfessionistaProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public sAccount: AccountProvider,
    public sms: SMS, 
    public callNumber: CallNumber, 
    public sPreferito: PreferitiProvider
    ) {

    this.idProfessionista = this.navParams.get('paramProfilo'); //Recupero l'id del professionista da dover visualizzare
    this.sProfessionista.getProf(this.idProfessionista).then(professionista => { //Recupero il professionista
    this.professionista = professionista; //Lo inizializzo
    });
        
       this.prof = {
            idProfessionista:this.idProfessionista
            
}
console.log("prof", this.prof);
      console.log("idprof",this.idProfessionista);

      this.preferito={
                professionista: this.prof


              };
    
    
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad ProfiloPage');
    console.log(this.idProfessionista);
    }
      
    prenota(){
    this.navCtrl.push('PrenotazionePage', {paramProf: this.professionista.idProfessionista});
    }

AggiungiPreferito(){
if (this.sAccount.isLogged()) {
console.log(this.preferito); 
          const loading = this.loadingCtrl.create({content: "Loading.." });
 
             loading.present(); 
             this.sPreferito.preferito(this.preferito)
                 .then(() => {
                    console.log("Preferito aggiunto", this.preferito);
                        loading.dismiss().then(() => {
                        const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Hai aggiunto questo professionista tra i tuoi preferiti!",
                            buttons: ["OK"]
                        });
                       alert.present();
                        alert.onDidDismiss(() => {
                            //this.navCtrl.pop('TabsPage');                        
                        });
                    });
}).catch(() => {
       loading.dismiss().then(() => {
                        const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Già presente nei preferiti!",
                           buttons: ["OK"]
                        });
                       alert.present();
                        alert.onDidDismiss(() => {             
                        });
      } )})

 }else{
  const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Devi effettuare il login!",
                           buttons: ["OK"]
                        });
                       alert.present();
                        alert.onDidDismiss(() => {             
                        });
} 
      }
    ricerca(){
    this.navCtrl.push('RicercaPage');
    }
    messaggio(){
    this.sms.send(this.professionista.telefonoprofessionista,'');
    }
    chiama(){
    this.callNumber.callNumber(this.professionista.telefonoprofessionista, true)
    .then(res => console.log('Launched dialer!', this.professionista.telefonoprofessionista))
    .catch(err => console.log('Error launching dialer',  this.professionista.telefonoprofessionista));
    }
 
  
    }
