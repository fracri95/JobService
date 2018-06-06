import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//models
import { Utente } from '../models/utente.model';

@Injectable()
export class UtenteProvider {
  
 private _utente: Utente;
     
  constructor(private _http: Http) {
      
  }

    getUtente(username : string): Promise<Utente> { //dato username, ritornami l'utente
        return new Promise((resolve) => {
            this._http.get('/api/utente/'+username).toPromise()
                    .then((res: Response) => {
                        this._utente = res.json() as Utente;
                        resolve(this._utente);   
                    })
                .catch(() => resolve(this._utente));            
        });
    }
    
    updateUtente(id : number, utente : Utente): Promise<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
               return new Promise((resolve) => {
                this._http.put('/api/utente/'+ this._utente, this._utente).toPromise()
                    .then((res: Response) => {
                        resolve(res);                           
                    })
                    .catch(() => resolve());         
                });
    }
}
