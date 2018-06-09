export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api/' : 'http://localhost:8080/jobservice/api/';



export const URL = {
    UTENTI: {
        SIGNUP: "create/",
        LOGIN: "login/",
        LOGOUT: "logout/",
        UPDATE: "utenti/"
    },
    
    PRENOTAZIONI: {
        CREATE: "prenotazioni/",
        GETALL: "prenotazioni/"
    },
        PREFERITI: {
        CREATE: "preferiti/",
        GETALL: "preferiti/"
    }
    }

export const STORAGE_KEYS = {
    UTENTE: "jobservice_utente",
  PREFERITI: "preferito",
  PRENOTAZIONE: "prenotazione"
}
