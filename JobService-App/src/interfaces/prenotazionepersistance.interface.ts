//Models
import {Prenotazione} from '../models/prenotazione.model';

    export interface PrenotazionePersistanceInterface {
    
    save(prenotazione: Prenotazione): Promise<any>;
    
    get(): Promise<any>;
    
    remove(): Promise<any>;
}

    

