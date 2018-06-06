import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';



//Models
import {Professionista} from '../../models/professionista.model';

//Providers
import {ProfessionistaProvider} from '../../providers/professionista.provider';

@IonicPage()
@Component({

  templateUrl: 'home1.html',
})

export class HomePage1 {

    Professionisti : string = "last";
    
    profLasts: Array<Professionista>= new Array();
    
    
    constructor(
        public navCtrl: NavController, 
        public sProfessionista: ProfessionistaProvider
        ) {

       
      this.sProfessionista.getProfLasts()
        .then(profLasts => {
        this.profLasts = profLasts;
        });        
}
    
    professionistainfo (idProfessionista: number) {
        this.navCtrl.push('ProfiloPage', {paramProfilo: idProfessionista});
    }
        


    Ricerca(){
          this.navCtrl.push('RicercaPage');
      }
        login(){
         this.navCtrl.push('LoginPage');
        }

}

  
  

