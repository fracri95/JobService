package it.univaq.disim.mobile.jobservice.business.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;

@Entity
@Table(name="categorie")
 public class Categoria implements java.io.Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_categoria")
    private Long id;
    
    @Column(name="nome", nullable = false)
    private String nome;
        
    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "categoria", fetch = FetchType.LAZY)
    private final Set<Professionista> professionisti = new HashSet<>();
    
    public Long getId(){
       return id;
       }
    
    public void setId(Long id){
        this.id=id;        
    }
    
    public void setNome(String nome){
        this.nome=nome;
    }
    
    public String getNome(){
        return nome;
    }
    
}