package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import java.util.List;
import java.util.Vector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProfessionistaRepository extends JpaRepository<Professionista, Long>  {
    
    /**
     * Restituisce la lista di professionisti filtrati in base a ID
     * @param id_professionista
     * @return lista di professionisti in base all'ID
     */
    @Query(value = "SELECT * FROM professionisti WHERE id_professionista = :id",nativeQuery = true)
    Professionista findProfessionista (@Param("id")Long id_professionista);

    /**
     * Restituisce la lista di professionisti per una categoria
     * @param id_categoria
     * @return lista di professionisti
     */
    @Query(value = "SELECT * FROM professionisti WHERE id_categoria = :idcat",nativeQuery = true)
    List<Professionista> findByCategoria (@Param("idcat")Long id_categoria);

    /**
     * Restituisce la lista di professionisti per una determinata città
     * @param citta
     * @return lista di professionisti
     */
    @Query(value = "SELECT * FROM professionisti WHERE citta = :citta",nativeQuery = true)
    List<Professionista> findAllProfessionistiByCitta (@Param("citta")String citta); //ok

    /**
     * Restituisce la lista di professionisti filtrati in base a città e categoria
     * @param citta citta in base alla quale effettuare la ricerca
     * @param id_categoria
     * @param categoria nome categoria in base alla quale effetuare la ricerca
     * @return lista di professionisti in base alla categoria e alla città
     */
    @Query(value = "SELECT * FROM professionisti WHERE citta = :citta AND id_categoria = :categoria",nativeQuery = true)
    List<Professionista> findAllProfessionistiByCittaByCategoria (@Param("citta")String citta, @Param("categoria")Long id_categoria);
    
    /**
     * Restituisce la lista degli ultimi professionisti iscritti del portale
     * @return lista di professionisti
     */
    @Query(value = "SELECT * FROM professionisti WHERE id_professionista >10",nativeQuery = true)
    List<Professionista> findLastProfessionisti();  //visualizza solo gli ultimi con id>10 aggiornamento recente

    /**
     *
     * @return
     */
    @Query(value="SELECT DISTINCT citta FROM professionisti", nativeQuery=true)
    Vector<String> findAllCityProf(); //ok db  //ok app
    

}


   