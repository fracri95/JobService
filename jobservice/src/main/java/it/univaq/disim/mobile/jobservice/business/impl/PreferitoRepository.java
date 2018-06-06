package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Preferito;
import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface PreferitoRepository extends JpaRepository<Preferito, Long>{
    
    List<Preferito> findByUtenteId(Long utenteId);
    //restituisce i preferiti
    @Query(value = "SELECT * FROM preferiti where id_utente:id",nativeQuery=true)
    List<Preferito> findAllPreferiti(@Param("id")Long id_utente);
    
    @Query(value = "SELECT * FROM preferiti WHERE id_professionista:id AND id_utente:id_utente ",nativeQuery=true)
    Preferito findAllPreferitiprof(@Param("id")Long id_professionista ,@ Param("id_utente") Long id_utente);
    
    //sPreferito findByUtenteIdByProfessionistaId(Long utenteId, Long professionistaId);
    //Preferito findByUTENTEId(Long utenteId);
}

