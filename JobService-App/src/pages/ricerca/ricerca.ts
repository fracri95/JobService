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
  selector: 'page-ricerca',
  templateUrl: 'ricerca.html',
})
export class RicercaPage {
   
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

      this.idcat=0;
      this.nomi = new Array();
      this.sCategorie.getNomiCategorie().then(nomi => {
          this.nomi=nomi;});  //ok mi restituisce le cat      
      this.cittas= new Array();
      this.sProfessionisti.getCitiesProf().then(citta => {
          this.cittas=citta;});  //ok mi restituisce città //risolto ridondanza
      this.proffinale= new Array();
  }

   getprofRicerca(nome:string, citta:string){
          this.proffinale=[];
          this.categoriascelta=nome;
          this.cittascelta=citta;
          if (this.categoriascelta.length !==0 && this.cittascelta.length !==0){
              this.sCategorie.getIdCategoria(this.categoriascelta)
        .then(idcatego=>{
                      this.idcat=idcatego;
              console.log("categoria",this.idcat); //ambedue i parametri
              console.log("citta", this.cittascelta);
              this.sProfessionisti.getprofByCittaByCategoria(this.idcat, this.cittascelta).then(
                  profcittacate => {
        this.proffinale=profcittacate;
        console.log("risultato",this.proffinale);      
        })
        })           
        } else {
          if (this.categoriascelta.length==0){           //solo città
              this.sProfessionisti.getProfBycitta(this.cittascelta).then(profcitta=>{
                  this.proffinale=profcitta;
                  console.log(profcitta);
              })
          } else {
              if (this.cittascelta.length==0){  //solo lavoro
                  this.sCategorie.getIdCategoria(this.categoriascelta).then(idcatego=>{
                      this.idcat=idcatego;
                      console.log("idcategoria",this.idcat);
                      this.sProfessionisti.getprofByCategoria(this.idcat).then(profcatego=>{
                          this.proffinale=profcatego;
                          
                      })
                  })
              }
              } 
          }
          
          
      }
       
                  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RicercaPage');
 
  }

  gotoProfiloPage(idProfessionista: number){
      this.navCtrl.push('ProfiloPage', {paramProfilo: idProfessionista});
  }
}






