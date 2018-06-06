package it.univaq.disim.mobile.jobservice.business;

import it.univaq.disim.mobile.jobservice.business.domain.Sessione;
import it.univaq.disim.mobile.jobservice.business.domain.Prenotazione;
import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import it.univaq.disim.mobile.jobservice.business.domain.Utente;
import it.univaq.disim.mobile.jobservice.business.domain.Categoria;
import it.univaq.disim.mobile.jobservice.business.domain.Preferito;
import java.util.List;
import java.util.Vector;

public interface JobServiceService {

    Sessione login(String username, String password);

    void logout(String token);

       List<Prenotazione> findAllPrenotazioni(String username);
       List<Preferito> findAllPreferiti(String username);
    
    boolean createUtente(Utente utente);
    
    void updateUtente(String token, Utente utente);
    
    //Utente findUsername(String username); 
   boolean creaPrenotazione(String token, Prenotazione prenotazione);
   boolean creaPreferito(String token, Preferito preferito);

    List<Categoria> findAllCategorie();  //tuttelecategorie
    
    Long GetCategoriaById(String nome);  //dato nomecat mi restituisce l'id corrisoondente
    
    Professionista findProfessionisti(Long id_professionista);
    
    List<Professionista> findProfessionistiCitta(String citta);
    List<Professionista> findProfCompleto(String citta, Long idcat);
    List<Professionista> findProfessionistiCat(Long idcat);
    
    
    List<Professionista> findAllProf(); //tutti
    List<Professionista> findLastProfessionisti(); //id>10

    /**
     *
     * @return
     */
    Vector<String> GetAllNomiCat();
    Vector<String> findAllCityProf();
    
    
}
