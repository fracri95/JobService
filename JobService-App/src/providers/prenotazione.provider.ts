import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Events, LoadingController} from 'ionic-angular';

//Models 
import { Prenotazione } from '../models/prenotazione.model';
import {PrenotazioneInterface} from '../interfaces/prenotazione.interface';

//Providers
import { AccountProvider } from './account.provider';

//Constants
import {URL_BASE, URL} from '../constants';

//Types
import {ResponseServer } from '../types';

@Injectable()
export class PrenotazioneProvider {

 private _prenotazioni: Array<Prenotazione> = null;
    constructor(    
    private _http: Http,
    public events: Events,
    private _sAccount: AccountProvider,
    public loadingCtrl: LoadingController
){
     console.log('Hello Prenotazione Provider');
     this._sAccount.events.subscribe('utente:logout', () => {
            this._prenotazioni = null;
        });

        }
    
    prenota(prenop: PrenotazioneInterface):Promise<any> {
        return new Promise((resolve, reject) =>{
        console.log(prenop);
        console.log("utente",this._sAccount.getUtente().token );
            this._http.post(URL_BASE + URL.PRENOTAZIONI.CREATE + this._sAccount.getUtente().token, prenop).toPromise()
            .then((res: Response) => {
                    const json = res.json() as ResponseServer; 
                console.log(prenop);
        console.log("utente",this._sAccount.getUtente().token );                   
                    if (json.result) {
                        console.log("prenotazione provider risolta");
                        resolve();
                    } else {
                        console.log("prenotazione non  andata");
                        reject();
                    } 
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    }

  getPrenotazioni(): Promise<Array<Prenotazione>>{
        return new Promise((resolve)=>{
            if (this._prenotazioni === null){
                this._prenotazioni =[];
                this._http.get(URL_BASE + URL.PRENOTAZIONI.GETALL + this._sAccount.getUtente().token.toString()).toPromise()
                .then((res:Response) =>{
                     const prenotazioni = res.json() as Array<Prenotazione>;
                        for (let prenotazione of prenotazioni){
                            console.log('all prenotazioni',this._prenotazioni);
                            this._prenotazioni.push(new Prenotazione(prenotazione));
                        }
                resolve(this._prenotazioni);
                console.log(this._prenotazioni,'effettuato')
                })
             .catch(() => resolve(this._prenotazioni));
            } else {
                resolve(this._prenotazioni);
            }
        });
      
}
    }
