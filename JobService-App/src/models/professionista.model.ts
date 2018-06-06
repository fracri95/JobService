import {Categoria} from './categoria.model';

export class Professionista {
    
    public idProfessionista: number=0;
    public nomeprofessionista: string = "";
    public cognomeprofessionista: string = "";
    public etaprofessionista: number=0 ;
    public citta: string = "";
    public telefonoprofessionista: string="";
    public idCategoria= new Categoria;
    public emailprofessionista:string= "";
    
    constructor(obj?: any) {
        this.setObj(obj);
    }
    
    setObj(obj?: any) {
        if (obj) {
            this.idProfessionista = (typeof obj.idProfessionista === "number") ? obj.idProfessionista : this.idProfessionista;
            this.nomeprofessionista = obj.nomeprofessionista || this.nomeprofessionista;
            this.cognomeprofessionista = obj.cognomeprofessionista || this.cognomeprofessionista;
            this.etaprofessionista = (typeof obj.etaprofessionista === "number") ? obj.etaprofessionista : this.etaprofessionista;
            this.citta = obj.citta || this.citta;
            this.telefonoprofessionista = obj.telefonoprofessionista || this.telefonoprofessionista;
            this.emailprofessionista = obj.emailprofessionista || this.emailprofessionista;
            this.idCategoria = obj.idCategoria || this.idCategoria;
         }
    }
}