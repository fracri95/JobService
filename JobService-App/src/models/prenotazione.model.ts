import {Professionista} from './professionista.model';


    export class Prenotazione {
    
	
	public idPrenotazione: number;
        public data: string = "";
        public ora: string = "";
        public professionista= new Professionista;
	

    
    constructor(obj?: any) {
        this.setObj(obj);
    }
    
    setObj(obj?: any) {
        if (obj) {
           
            this.data = obj.data || this.data;
                        this.ora = obj.ora || this.ora;
                    this.professionista = obj.professionista || this.professionista;   

        }
    }
}