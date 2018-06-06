import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Interfaces
import {PrenotazioneInterface} from '../../interfaces/prenotazione.interface';
import {ProfessionistaInterface} from '../../interfaces/professionista.interface';


//Providers
import {PrenotazioneProvider} from '../../providers/prenotazione.provider';
import {ProfessionistaProvider} from '../../providers/professionista.provider';
import {AccountProvider} from '../../providers/account.provider';

@IonicPage()
@Component({
  selector: 'page-prenotazione',
  templateUrl: 'prenotazione.html',
})

export class PrenotazionePage {
    data: string;
    prenop : PrenotazioneInterface;
    ora: string;
    professionista: ProfessionistaInterface;
    idpparam: number;
    idProfessionista:number;

    
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public sPrenotazione: PrenotazioneProvider,
              public sProfess: ProfessionistaProvider,
              public alertCtrl: AlertController,
              public sAccount: AccountProvider,
              public loadingCtrl: LoadingController
) { 

      this.idpparam= 0;         

      this.idpparam = this.navParams.get('paramProf');
       this.professionista = {
            idProfessionista:this.idpparam
            
}
console.log("prof", this.professionista);
      console.log("idprof",this.idpparam);

      this.prenop={
                ora:"",
                data:"",
                professionista: this.professionista


              };}
  AggiungiPrenotazione(){
  if (this.sAccount.isLogged()) {
console.log(this.prenop); 
          const loading = this.loadingCtrl.create({content: "Loading.." });
 
             loading.present(); 
             this.sPrenotazione.prenota(this.prenop)
                 .then(() => {
                    console.log("Prenotazione effettuata ", this.prenop);
                        loading.dismiss().then(() => {
                        const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Prenotazione effettuata con successo!",
                            buttons: ["OK"]
                        });
                       alert.present();
                        alert.onDidDismiss(() => {
                            this.navCtrl.pop();                      
                        });
                    });
}).catch(() => {
       loading.dismiss().then(() => {
                        const alert = this.alertCtrl.create({
                            title: "JobService",
                            message: "Professionista già prenotato!",
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
                        this.navCtrl.pop();                
                        });
} 

  }
              
      
  ionViewDidLoad(){
      console.log('PrenotazionePage');
     
  }
  }
   
