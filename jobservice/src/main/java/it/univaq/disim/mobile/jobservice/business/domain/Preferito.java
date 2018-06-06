package it.univaq.disim.mobile.jobservice.business.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="preferiti")
public class Preferito implements java.io.Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_preferito")
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "id_professionista", nullable = false)
    private Professionista professionista;
   
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_utente", nullable = false)
    private Utente utente;

    public void setIdPreferito(Long id){
        this.id=id;
    }
     
    public Long getIdPreferito(){
        return id;
    }
    
     public Professionista getProfessionista() {
        return professionista;
    }
 
    public void setProfessionista(Professionista professionista) {
        this.professionista = professionista;
    }   
    
    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

}
