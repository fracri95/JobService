import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';



//Models 

import { Professionista } from '../models/professionista.model';

@Injectable()
export class ProfessionistaProvider {

    private _proflasts: Array<Professionista> = null;
    private _professionista: Professionista;
    private profcittà: Array<Professionista> = null;
    private profcategoria: Array<Professionista>=null;
    private citiesprof: Array<string> = null;
    private profcittacate: Array<Professionista>=null;

    constructor(
        private _http: Http
    ){
        console.log('Hello ProfessionistiProvider Provider');
    }

    //recupera le città in cui ci sono professionisti operativi   
    getCitiesProf(): Promise<Array<string>>{
        return new Promise((resolve) =>{
            if (this.citiesprof=== null){
                this.citiesprof = [];
                this._http.get('api/professionisti/allcitta').toPromise()
                .then((res: Response)=>{
                    const cittaprof = res.json() as Array<string>;
                    for (let citta of cittaprof){
                        this.citiesprof.push(citta);
                    }
                    resolve(this.citiesprof);
                })
                    .catch(() => resolve(this.citiesprof));
            } else {
                resolve(this.citiesprof);
            }
        });
    }
    
    getprofByCittaByCategoria(idCategoria:number, citta:string): Promise<Array<Professionista>>{
        return new Promise((resolve)=>{
            if (this.profcittacate===null){
                this.profcittacate=[];
                this._http.get('api/professionisti/ricerca/'+citta+'/'+idCategoria).toPromise()
                    .then((res:Response)=>{
                        const professionisti = res.json() as Array<Professionista>;
                        for (let professionista of professionisti){
                            this.profcittacate.push(new Professionista(professionista));
                        }
                        resolve(this.profcittacate);
                            console.log("proffi",this.profcittacate);
                })
                    .catch(() => resolve(this.profcittacate));
            
            }
        });
    }

     
    //Recupera i professionisti dal server in base alla categoria  
    getprofByCategoria(idcat: number): Promise<Array<Professionista>>{
        return new Promise((resolve)=>{
            if (this.profcategoria=== null){
                this.profcategoria= [];
                this._http.get('api/professionisti/categoria/'+idcat).toPromise()
                    .then((res:Response)=>{
                        const professionisti = res.json() as Array<Professionista>;
                        for (let professionista of professionisti){
                            this.profcategoria.push(new Professionista(professionista));
                        }
                        resolve(this.profcategoria);
                             console.log("proffi",this.profcategoria);
                })
                    .catch(()=> resolve(this.profcategoria));
            } 
        });
    }
  

    //Recupera i professionisti dal server in base alla città  //ok server
    getProfBycitta(citta: string): Promise<Array<Professionista>>{
        return new Promise((resolve)=>{
            if (this.profcittà === null){
                this.profcittà =[];
                this._http.get('api/professionisti/citta/' + citta).toPromise()
                    .then((res: Response)=>{
                        const professionisti = res.json() as Array<Professionista>;
                        for (let professionista of professionisti){
                            this.profcittà.push(new Professionista(professionista));
                        }
                        resolve(this.profcittà);
                             console.log("proffi",this.profcittà);
                })
                    .catch(() => resolve(this.profcittà));
            } else {
                resolve(this.profcittà);
            }
        });
    }

    //Recupera i professionisti dal server in base agli ultimi inseriti  id>10  
    getProfLasts(): Promise<Array<Professionista>>{
        return new Promise((resolve)=>{
            if (this._proflasts === null){
                this._proflasts = [];
                this._http.get('/api/professionisti/last').toPromise()
                .then((res:Response) =>{
                     const professionisti = res.json() as Array<Professionista>;
                        for (let professionista of professionisti){
                            this._proflasts.push(new Professionista(professionista));
                        }
                resolve(this._proflasts);
                })
             .catch(() => resolve(this._proflasts));
            } else {
                resolve(this._proflasts);
            }
        });
}	

    //Recupera i professionisti in base all'ID   //si lato server e app                    
    getProf(id_professionista: number): Promise<Professionista> {
        return new Promise((resolve) => {
            this._http.get('api/professionisti/' + id_professionista).toPromise()
                .then((res: Response) => {
                    this._professionista = res.json() as Professionista;
                    resolve(this._professionista);
                })
                .catch(() => resolve(this._professionista));
        });
    }  
}