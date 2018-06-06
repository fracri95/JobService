import { Component } from '@angular/core';
import {IonicPage, App, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
  
import { ImagePicker } from '@ionic-native/image-picker';

//Models
import {Utente} from '../../models/utente.model';

//Provider
import {AccountProvider} from '../../providers/account.provider';




@IonicPage()
@Component({
  selector: 'page-utente',
  templateUrl: 'utente.html',
})

export class UtentePage {
    utente : Utente;
      editable: boolean = false;

  constructor(
        public app: App,
        public navCtrl: NavController,
        public navParams: NavParams,
        private imagePicker: ImagePicker,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public sAccount: AccountProvider
               ) {
this.utente = this.sAccount.getUtente();
       
               }
               
     ionViewDidLoad() {
    console.log('ionViewDidLoad UtentePage');
    
  }
openGallery(){
let options = {
    maximumImagesCount: 1
  }
this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
  }
}, (err) => { });
}
  
      salva() {
        const loading = this.loadingCtrl.create({content: "Attendi" });
        loading.present();

        this.sAccount.update()
            .then(() => {
                loading.dismiss().then(() => {
                    this.editable = false;
                });
            })
            .catch((msg) => {
                loading.dismiss().then(() => {
                    this.alertCtrl.create({
                        title: "JobService",
                        message: msg,
                        buttons: ["OK"] 
                    }).present();
                });
            });
    }
  

    
  ricerca(){
      this.navCtrl.push('RicercaPage');
  }

 logout() {
        this.alertCtrl.create({
            title: "JobService",
            message: "Confermi di voler uscire?",
            buttons: ["NO", {
                text: "SI",
                handler: () => {
                    const loading = this.loadingCtrl.create({content: "Attendi"});
                    loading.present();

                    this.sAccount.logout()
                        .then(() => {
                            loading.dismiss().then(() => {
                                this.app.getRootNav().setRoot('HomePage1');
                            });
                        })
                        .catch(() => {

                        });
                }
            }]
        }).present();
    }
      
  }


