export class Utente {    
	

    public username: string = "";
    public password: string = "";
    public email: string = "";
    public nome: string = "";
    public cognome: string = "";
    public eta: number = 0;
    public citta: string = "";
    public telefono: string = "";
    public datadinascita: string = "";
    token: string = "";
    
    constructor(obj?: any) {
        this.setObj(obj);
    }
    
    setObj(obj?: any) {
        if (obj) {

            this.username = obj.username || this.username;
            this.password = obj.password || this.password;
            this.email = obj.email || this.email;
            this.nome = obj.nome || this.nome;
            this.cognome = obj.cognome || this.cognome;
            this.eta = (typeof obj.eta === "number") ? obj.eta : this.eta;
            this.citta = obj.citta || this.citta;
            this.telefono = obj.telefono || this.telefono;
            this.datadinascita = obj.datadinascita || this.datadinascita;
            this.token = obj.token || this.token;
        }
    }
    
}


