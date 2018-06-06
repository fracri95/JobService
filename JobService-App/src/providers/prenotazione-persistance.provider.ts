import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


import {STORAGE_KEYS} from '../constants';

import {Prenotazione} from '../models/prenotazione.model';

import {PrenotazionePersistanceInterface} from '../interfaces/prenotazionepersistance.interface';


@Injectable()
export class PrenotazionePersistanceProvider implements PrenotazionePersistanceInterface {
    remove(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    constructor(private _storage: Storage) {
        console.log('Hello PrenotazionePersistance Provider');
    }
    
    save(prenotazione: Prenotazione): Promise<any> {
        return new Promise((resolve, reject) => {
            this._storage.set(STORAGE_KEYS.PRENOTAZIONE, prenotazione)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                });
        });
    }
    
    get(): Promise<Prenotazione> {
        return new Promise((resolve, reject) => {
            this._storage.get(STORAGE_KEYS.PRENOTAZIONE)
                .then((prenotazione) => {
                    if (prenotazione !== null) {
                        resolve(prenotazione);
                    } else {
                        reject();
                    }
                })
        });
    }
    
   

}

