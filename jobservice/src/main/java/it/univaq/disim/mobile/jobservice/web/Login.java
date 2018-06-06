package it.univaq.disim.mobile.jobservice.web;

public class Login {

    private String username;
    private String token;
    private String nome;
    private String cognome;
    private String email;
    private Long id;
    private String telefono;
    private String citta;
    private int eta;
    private String password;
    private String datadinascita;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
        public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
        public int getEta() {
        return eta;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }
            public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
            public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }
                public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
                    public String getDatadinascita() {
        return datadinascita;
    }

    public void setDatadinascita(String datadinascita) {
        this.datadinascita = datadinascita;
    }

}
