package it.univaq.disim.mobile.jobservice.business.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity
@Table(name="prenotazioni")
public class Prenotazione implements java.io.Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_prenotazione")
    private Long id;
    
        @Column (name="giorno", nullable=false)
    private String giorno;

    @Column(name="ora",nullable=false)
    private String ora;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_utente", nullable = false)
    private Utente utente;
    
    
    @OneToOne
    @JoinColumn(name = "id_professionista", nullable = false)
    private Professionista professionista;

    
    public Prenotazione(){
    }
       
    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public Professionista getProfessionista() {
        return professionista;
    }
 
    public void setProfessionista(Professionista professionista) {
        this.professionista = professionista;
    }   
  
    public void setIdPrenotazione(Long id){
        this.id=id;
    }
    
    public Long getIdPrenotazione(){
        return id;
    }
    
    public String getData(){
        return giorno;
    }
    
    public void setData(String giorno){
       this.giorno=giorno;
    }
     public String getOra(){
        return ora;
    }
    
    public void setOra(String ora){
       this.ora=ora;
    }
    
}



