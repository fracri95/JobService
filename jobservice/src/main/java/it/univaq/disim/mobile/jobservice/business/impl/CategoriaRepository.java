package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Categoria;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
    /**
    * Restituisce la lista di categorie
    * @return lista di categorie
    */    
    @Query(value= "SELECT * FROM categorie",nativeQuery = true)
    List<Categoria> findAllCategorie();  //ok
    
    /**
    * Restituisce la lista di prenotazioni di uno specifico utente
     * @param nome
    * @return lista di prenotazioni
    */
    @Query(value= "SELECT id_categoria FROM categorie WHERE nome = :categoria", nativeQuery = true)
    Long findIdbyNome(@Param("categoria")String nome); //risolto
    
    @Query(value="SELECT DISTINCT nome FROM categorie", nativeQuery=true)
    List<String> GetAllCategorieNome();
    
   
}
