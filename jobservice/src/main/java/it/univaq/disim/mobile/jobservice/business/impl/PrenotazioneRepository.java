package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Prenotazione;
import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import it.univaq.disim.mobile.jobservice.business.domain.Utente;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {

    List<Prenotazione> findByUtenteId(Long utenteId);
    
    Prenotazione findById(Long id);

    /**
    * Restituisce la lista di prenotazioni di uno specifico utente
     *
     * @param id_utente
   
    * @return lista di prenotazioni
    */
    @Query(value= "SELECT * FROM prenotazioni WHERE id_utente =:id",nativeQuery = true)
    List<Prenotazione> findAllPrenotazionibyUtente(@Param("id")Long id_utente);


    /**
    * Restituisce la lista di prenotazioni selezionati di uno specifico utente e prof
    * @return lista di prenotazioni
    */
    @Query(value= "SELECT * FROM prenotazioni WHERE id_utente =:utente AND id_professionista =:professionista",nativeQuery = true)
    List<Prenotazione> findAllPrenotazioniByProfUser(@Param("professionista")Professionista professionista, @Param("utente") Utente utente);
    
    @Query(value= "SELECT DISTINCT * FROM prenotazioni", nativeQuery=true)
    List<Prenotazione> findAllPren();

 Prenotazione findByProfessionistaId(Long professionistaId);
 Prenotazione findByGiorno(String giorno);
 Prenotazione findByOra(String ora);
}
