//Models
import {Preferito} from '../models/preferito.model';

export interface PreferitiPersistanceInterface {
    
    save(preferiti: Preferito ): Promise<any>;
    
    get(): Promise<any>;
    
    remove(): Promise<any>;
}
