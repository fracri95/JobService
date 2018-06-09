import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Events, LoadingController} from 'ionic-angular';

//Models 
import { Preferito } from '../models/preferito.model';
import {PreferitoInterface} from '../interfaces/preferito.interface';

//Providers
import { AccountProvider } from './account.provider';


//Constants
import {URL_BASE, URL} from '../constants';

//Types
import {ResponseServer } from '../types';

@Injectable()
export class PreferitiProvider {
private _preferiti: Array<Preferito> = null;

    
    constructor(
    private _http: Http,
    public events: Events,
    private _sAccount: AccountProvider,
    public loadingCtrl: LoadingController
    )
    {
    console.log('Hello Preferiti Provider');
    this._sAccount.events.subscribe('utente:logout', () => {
            this._preferiti = null;
        });
    }
    
    
    preferito(preferito: PreferitoInterface):Promise<any> {
        
        return new Promise((resolve, reject) =>{
        console.log(preferito);
        console.log("utente",this._sAccount.getUtente().token );
            this._http.post(URL_BASE + URL.PREFERITI.CREATE + this._sAccount.getUtente().token, preferito).toPromise()
            .then((res: Response) => {
                    const json = res.json() as ResponseServer; 
                console.log(preferito);
        console.log("utente",this._sAccount.getUtente().token );                   
                    if (json.result) {
                        console.log("preferito provider risolta");
                        resolve();
                    } else {
                        console.log("preferito non  aggiunto");
                        reject();
                    } 
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    
        }


  getPreferiti(): Promise<Array<Preferito>>{
        return new Promise((resolve)=>{
            if (this._preferiti === null){
                this._preferiti =[];
      console.log("utente",this._sAccount.getUtente().token );
                this._http.get(URL_BASE + URL.PREFERITI.GETALL + this._sAccount.getUtente().token.toString()).toPromise()
                .then((res:Response) =>{
                     const preferiti = res.json() as Array<Preferito>;
                        for (let preferito of preferiti){
                            console.log('all preferiti',this._preferiti);
                            this._preferiti.push(new Preferito(preferito));
                        }
                resolve(this._preferiti);
                console.log(this._preferiti,'effettuato')
                })
             .catch(() => resolve(this._preferiti));
            } else {
                resolve(this._preferiti);
            }
        });
      
}
                         
        
}