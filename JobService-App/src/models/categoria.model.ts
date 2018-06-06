
export class Categoria {
    
    public id: number = 0;
    public nome: string = "";
    
    constructor(obj?: any) {
        this.set(obj);
    }
    
    set(obj?: any) {
        if (obj) {
            this.id = (typeof obj.id === "number") ? obj.id : this.id;
            this.nome = obj.nome || this.nome;
        }
    }
    
}


