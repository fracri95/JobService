import {Professionista} from './professionista.model';
export class Preferito {
    

    
	
	public idPreferito: number=0;
        public professionista= new Professionista;

	

    
    constructor(obj?: any) {
        this.setObj(obj);
    }
    
    setObj(obj?: any) {
        if (obj) {
            this.idPreferito = (typeof obj.idPreferito === "number") ? obj.idPreferito : this.idPreferito;
            this.professionista = obj.professionista || this.professionista;
                       

        }
    }
}
    
