import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Events} from 'ionic-angular';

//Models 
import {Utente} from '../models/utente.model';

//Interfaces
import {UserSignupInterface} from '../interfaces/user-signup.interface';
import {UserPersistanceInterface} from '../interfaces/userpersistance.interface';

//Providers
import {UserPersistanceProvider} from './user-persistance.provider';

//Constants
import {URL_BASE, URL} from '../constants';

//Types
import {ResponseServer} from '../types';

@Injectable()
export class AccountProvider {

    private _utente: Utente = null;
    private _sUserPersistance: UserPersistanceInterface;
    constructor(
        private _http: Http,
        public events: Events,
        sUserPers: UserPersistanceProvider
    ) {
        console.log('Hello Account Provider');
        
        this._sUserPersistance = sUserPers;
    }
    
    initialize(): Promise<any> {
        return new Promise(resolve => {
            this._sUserPersistance.get()
                .then(utente => {
                    this._utente = utente;
                    resolve();
                })
                .catch(() => resolve());
        });
    }
    
    getUtente(): Utente {
        return this._utente;
    }

    isLogged(): boolean {
        return this._utente !== null;
    }
    
    login(username: string, password: string): Promise<Utente> {
        return new Promise((resolve, reject) => {
            this._http.post(URL_BASE + URL.USERS.LOGIN, { username, password })
                .toPromise()
                .then((res: Response) => {
                    const json = res.json() as ResponseServer;
                    
                    if (json.result) { 
                        this._utente = new Utente( json.data );
                        this._sUserPersistance.save(this._utente);
                        this.events.publish('utente:login');
                        
                        resolve(this._utente);
                    } 
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    }
    
    registrati(utente: UserSignupInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            this._http.post(URL_BASE + URL.USERS.SIGNUP, utente).toPromise()
                .then((res: Response) => {
                    const json = res.json() as ResponseServer;
                    
                    if (json.result) {
                        resolve();
                    } else {
                        reject(json.message);
                    }
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    }
    
    update(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._http.put(URL_BASE + URL.USERS.UPDATE + this._utente.token, this._utente).toPromise()
                .then((res: Response) => {
                    const json = res.json() as ResponseServer;
                    
                    if (json.result) {
                        this._sUserPersistance.save(this._utente);
                        resolve();
                    } else {
                        reject(json.message);
                    }
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    }
    
    logout(): Promise<any> { 
        return new Promise((resolve, reject) => {
            this._http.get(URL_BASE + URL.USERS.LOGOUT + this._utente.token).toPromise()
                .then((res: Response) => {
                    const json = res.json() as ResponseServer;
                    
                    if (json.result) {
                        this._sUserPersistance.remove();
                        this.events.publish('utente:logout');
                        
                        resolve();
                    } else {
                        reject(json.message);
                    }
                })
                .catch((err: Response) => reject(`Errore status: ${err.status}`));
        });
    }

}
