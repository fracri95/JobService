import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

//Models
import {Preferito} from '../../models/preferito.model';

//Providers
import {PreferitiProvider} from '../../providers/preferiti.provider';


@IonicPage()
@Component({
  selector: 'page-preferiti',
  templateUrl: 'preferiti.html',
})
export class PreferitiPage {


    
    preferiti: Array<Preferito>= new Array();
    
    
 constructor(
        public navCtrl: NavController, 
        public sPreferito: PreferitiProvider,
       
        ) {

       
      this.sPreferito.getPreferiti()
        .then(preferiti => {
        this.preferiti = preferiti;
        console.log("preferiti", this.preferiti);   
        }); 
         
}

        
        

    professionistainfo (idProfessionista: number) {
        this.navCtrl.push('ProfiloPage', {paramProfilo: idProfessionista});
    }
        

    Ricerca(){
          this.navCtrl.push('RicercaPage');
      }
    

}