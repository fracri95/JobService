import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

//Models
import {Prenotazione} from '../../models/prenotazione.model';

//Providers
import {PrenotazioneProvider} from '../../providers/prenotazione.provider';


@IonicPage()
@Component({
  selector: 'page-archivio',
  templateUrl: 'archivio.html',
})
export class ArchivioPage {


    
    prenotazioni: Array<Prenotazione>= new Array();
    
    
 constructor(
        public navCtrl: NavController, 
        public sPrenotazione: PrenotazioneProvider,
       
        ) {

       
      this.sPrenotazione.getPrenotazioni()
        .then(prenotazioni => {
        this.prenotazioni = prenotazioni;
        console.log("prenotazioni", this.prenotazioni);   
        }); 
         
}


    professionistainfo (idProfessionista: number) {
        this.navCtrl.push('ProfiloPage', {paramProfilo: idProfessionista});
    }
        

    Ricerca(){
          this.navCtrl.push('RicercaPage');
      }
    

}