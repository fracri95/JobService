import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Models 
import {Categoria} from '../models/categoria.model';

@Injectable()
export class CategoriaProvider {

    private _categorie: Array<Categoria> = null;
    private Categoria: Categoria= null;
    private nomicat: Array<string> = null;
    constructor(
        private _http: Http		
    ) {
	console.log('Hello CategoriaProvider Provider');
        this.Categoria= new Categoria();
        this.Categoria.id=0;
    }

    /**
     * Recupera le categorie dal server.
     */
     
    getNomiCategorie(): Promise<Array<string>>{
        return new Promise((resolve)=>{
            if (this.nomicat===null){
                this.nomicat =[];
                this._http.get('api/categorie/nomi').toPromise()
                    .then((res: Response)=> {
                        const nomicat = res.json() as Array<string>;
                        for (let nome of nomicat){
                            this.nomicat.push(nome);
                        }
                        resolve(this.nomicat);
                })
                    .catch(() => resolve(this.nomicat));
            } else {
                resolve(this.nomicat);
            }
        });
    }
    getCategorie(): Promise<Array<Categoria>> {
        return new Promise((resolve) => {
            if (this._categorie === null) {
                this._categorie = [];               
                this._http.get('/api/categorie/all').toPromise()
                    .then((res: Response) => {
                        const categorie = res.json() as Array<Categoria>;
                        for (let categoria of categorie){
                            this._categorie.push(new Categoria(categoria));
                        }
                        resolve(this._categorie);
                    })
                    .catch(() => resolve(this._categorie));
            } else {
                resolve(this._categorie); 
            }
        });
    }
    
    getIdCategoria(nomecat: string): Promise<number>{
        return new Promise((resolve)=>{
            this._http.get('api/categorie/' + nomecat).toPromise()
                .then((res: Response)=>{
                    const s= res.json() as number;
                    this.Categoria.id=s;
                    resolve(this.Categoria.id);
                })
                .catch(() => resolve(this.Categoria.id));
        });
    }
}
