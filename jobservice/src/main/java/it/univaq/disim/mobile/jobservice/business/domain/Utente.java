package it.univaq.disim.mobile.jobservice.business.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "utenti")
public class Utente implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_utente")
    private Long id;

    @Column(name = "username", nullable = false, length = 255)
    private String username;

    @Column(name = "password", nullable = false, length = 255)
    private String password;
    
    @Column(name = "nome", nullable = false, length = 255)
    private String nome;
    
    @Column(name = "cognome", nullable = false, length = 255)
    private String cognome;
    
    @Column(name = "email", nullable = false, length = 255)
    private String email;
    
    @Column(name = "telefono", nullable = false, length = 10)
    private String telefono;
    
    @Column(name = "eta", nullable = false, length = 2)
    private int eta;
    
    @Column(name = "datadinascita", nullable = false, length = 10)
//     @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM", timezone="Europe/Rome")
//    @Temporal(javax.persistence.TemporalType.DATE)
    private String datadinascita;
    
    @Column(name = "citta", nullable = false, length = 255)
    private String citta;
    
    
     @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "utente", fetch = FetchType.LAZY)
    private Set<Prenotazione> prenotazioni = new HashSet<>();
    
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

    public int getEta() {
        return eta;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }

    public String getDatadinascita() {
        return datadinascita;
    }

    /**
     *
     * @param datadinascita
     */
    public void setDatadinascita(String datadinascita) {
        this.datadinascita = datadinascita;
    }



    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "utente", fetch = FetchType.LAZY)
    private Set<Preferito> preferiti = new HashSet<>();
    

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

 public Set<Prenotazione> getPrenotazioni() {
        return prenotazioni;
    }

    public void setPrenotazioni(Set<Prenotazione> prenotazioni) {
        this.prenotazioni = prenotazioni;
    }
    
     public Set<Preferito> getPreferiti() {
        return preferiti;
    }

    public void setPreferiti(Set<Preferito> preferiti) {
        this.preferiti = preferiti;
    }

    public void addPrenotazione(Prenotazione prenotazione) {
        prenotazione.setUtente(this);
        prenotazioni.add(prenotazione);
    }
        public void addPreferito(Preferito preferito) {
        preferito.setUtente(this);
        preferiti.add(preferito);
    }
    
}
