import {Professionista} from './professionista.model';
export class Preferito {
    

    
	
	public idPreferito: number;
        public professionista= new Professionista;
       

    
    constructor(obj?: any) {
        this.setObj(obj);
    }
    
    setObj(obj?: any) {
        if (obj) {
           
            this.professionista = obj.professionista || this.professionista;
            
                       

        }
    }
}
    
