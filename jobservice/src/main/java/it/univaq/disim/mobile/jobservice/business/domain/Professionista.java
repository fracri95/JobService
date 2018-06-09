/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.disim.mobile.jobservice.business.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@AssociationOverrides({
    @AssociationOverride(name = "id.categoria", joinColumns = @JoinColumn(name = "id_categoria"))
})
@Table(name="professionisti")
@Entity
public class Professionista implements java.io.Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_professionista")
    private Long id;
    
    @Column(name="nomeprofessionista" ,nullable = false, length = 255)
    private String nomeprofessionista;
    
    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;
    
    @Column(name="cognomeprofessionista", nullable = false, length = 255)
    private String cognomeprofessionista;
    
    @Column(name="eta" ,nullable = false, length = 255)
    private int etaprofessionista;
    
    @Column(name="telefono" ,nullable = false, length = 255)
    private String telefono;
    
    @Column(name="email" ,nullable = false, length = 255)
    private String emailprofessionista;
    
    @Column(name="citta", nullable = false, length = 255)
    private String citta;
        @Column(name="img", nullable = false)
    private String img;

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "professionista", fetch = FetchType.LAZY)
    private final Set<Prenotazione> prenotazioni = new HashSet<>();
    
    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "professionista", fetch = FetchType.LAZY)
    private final Set<Preferito> preferiti = new HashSet<>();
    
    public void setIdProfessionista(Long id){
        this.id=id;
    }
    
    public Long getIdProfessionista(){
        return id;
    }
    
    public void setNomeprofessionista(String nomeprofessionista){
        this.nomeprofessionista=nomeprofessionista;
    }
    
    public String getNomeprofessionista(){
        return nomeprofessionista;
    }
    
    public void setIdCategoria(Categoria categoria){
        this.categoria=categoria;
    }
    
    public Categoria getIdCategoria(){
        return categoria;
    }
    
    public void setCognomeprofessionista(String cognomeprofessionista){
        this.cognomeprofessionista=cognomeprofessionista;
    }
        
    public String getCognomeprofessionista(){
        return cognomeprofessionista;
    }
    
    public void setEtaprofessionista(int etaprofessionista){
        this.etaprofessionista=etaprofessionista;
    }
    
    public int getEtaprofessionista(){
        return etaprofessionista;
    }
    
    public void setTelefonoprofessionista(String telefono){
        this.telefono=telefono;
    }
    
    public String getTelefonoprofessionista(){
        return telefono;
    }
    
    public void setCitta(String citta){
        this.citta=citta;
    }
    
    public String getCitta(){
        return citta;
    }
    
        
    public void setImg(String img){
        this.img=img;
    }
    
    public String getImg(){
        return img;
    }
    
    public void setEmailprofessionista(String emailprofessionista){
        this.emailprofessionista=emailprofessionista;
    }
    
    public String getEmailprofessionista(){
        return emailprofessionista;
    }
}