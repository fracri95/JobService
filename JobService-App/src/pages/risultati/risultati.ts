import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, LoadingController } from 'ionic-angular';


//Providers
import { CategoriaProvider } from '../../providers/categoria.provider';
import { ProfessionistaProvider } from '../../providers/professionista.provider';
import { UtenteProvider } from '../../providers/utente.provider';
import {PrenotazioneProvider} from '../../providers/prenotazione.provider';

//Models
import { Categoria } from '../../models/categoria.model';
import { Professionista } from '../../models/professionista.model';



@IonicPage()
@Component({
  selector: 'page-risultati',
  templateUrl: 'risultati.html',
})
export class RisultatiPage {
   
    nome:string;
    citta:string;
    nomi : Array<string>; //array x visualizzare i nomi delle categorie	//ok
    cittas: Array<string>; //array x visualizzare le città in cui ci sono prof operanti      //ok           
    categoriascelta: string=""; 
    cittascelta:string="";
    idcat: number;
    proffinale: Array<Professionista>; //mi porta in output i professionsiti corrispondenti alla ricerca
    categoria: Categoria= null;
    
   
    
        
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public sUsenti: UtenteProvider,
  public sCategorie: CategoriaProvider,
  public sProfessionisti: ProfessionistaProvider,
  public PreProv: PrenotazioneProvider,
  public alertCtrl: AlertController,
  public loadingCtrl: LoadingController
  ) {
        this.proffinale= new Array();
        this.nome= this.navParams.get('paramCategoria');
        this.citta = this.navParams.get('paramCitta');
        

          if (this.nome.length !==0 && this.citta.length !==0){
          this.proffinale=[];
              this.sCategorie.getIdCategoria(this.nome)
        .then(idcatego=>{
                      this.idcat=idcatego;
              console.log("categoria",this.idcat);
              console.log("citta", this.citta);
              this.sProfessionisti.getprofByCittaByCategoria(this.idcat, this.citta)
        .then(profcittacate => {

        this.proffinale=profcittacate;
        console.log("risultato",this.proffinale);
 })
        });          
        } else if (this.nome.length==0){
this.proffinale=[];      
              this.sProfessionisti.getProfBycitta(this.citta)
        .then(profcitta=>{
                  this.proffinale=profcitta;
                  console.log(profcitta);
              });
          } else {
              if (this.citta.length==0){  //solo lavoro
        this.proffinale=[];          
        this.sCategorie.getIdCategoria(this.nome)
                        .then(idcatego=>{
                      this.idcat=idcatego;
                      console.log("idcategoria",this.idcat);
              
                      this.sProfessionisti.getprofByCategoria(this.idcat)
        .then(profcatego=>{
                          this.proffinale=profcatego;
                          
               })        });
                  
              }
              
          }
          
        
        
        
        
        
        }
        


    Ricerca(){
          this.navCtrl.push('RicercaPage');
      }
    
                  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RicercaPage');
 
  }

  gotoProfiloPage(idProfessionista: number){
      this.navCtrl.push('ProfiloPage', {paramProfilo: idProfessionista});
  }
}






