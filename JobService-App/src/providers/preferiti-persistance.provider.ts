import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {STORAGE_KEYS} from '../constants';

//Interfaces
import {PreferitiPersistanceInterface} from '../interfaces/preferitipersistance.interface';

//Models
import {Preferito} from '../models/preferito.model';

@Injectable()
export class PreferitiPersistanceProvider implements PreferitiPersistanceInterface {
       remove(): Promise<any> {
            throw new Error("Method not implemented.");
        };
    
    constructor(private _storage: Storage) {
        console.log('Hello PreferitiPersistance Provider');
    };
    
    save(preferito: Preferito): Promise<any> {
        return new Promise((resolve, reject) => {
            this._storage.set(STORAGE_KEYS.PREFERITI, preferito)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                });
        });
    }
    
    get(): Promise<Preferito> {
        return new Promise((resolve, reject) => {
            this._storage.get(STORAGE_KEYS.PREFERITI)
                .then((preferito) => {
                    if (preferito!== null) {
                        resolve(preferito);
                    } else
                      {
                        reject();
                      };
                })
        })
    }
}
