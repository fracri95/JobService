package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Sessione;
import it.univaq.disim.mobile.jobservice.business.domain.Utente;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import it.univaq.disim.mobile.jobservice.business.domain.Prenotazione;
import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import it.univaq.disim.mobile.jobservice.business.domain.Categoria;
import it.univaq.disim.mobile.jobservice.business.domain.Preferito;
import java.util.ArrayList;



@Service
@Transactional
public class JobServiceServiceImpl implements JobServiceService {

    @Autowired
    private SessioneRepository sessioneRepository;

    @Autowired
    private UtenteRepository utenteRepository;
    
    @Autowired
    private PreferitoRepository preferitoRepository;
    
    @Autowired
    private ProfessionistaRepository professionistaRepository;
    
    @Autowired
    private PrenotazioneRepository prenotazioneRepository;
    
    @Autowired
    private CategoriaRepository categoriaRepository;
    
    

    @Override
    public Sessione login(String username, String password) {
        Utente utente = utenteRepository.findByUsername(username);
        if (utente != null && utente.getPassword().equals(password)) {
            Sessione sessione = new Sessione();
            sessione.setUtente(utente);
            sessione.setToken(Utility.generateToken());
            Sessione newSessione = sessioneRepository.save(sessione);
            return newSessione;
        } else {
            return null;
        }
    }

    @Override
    public void logout(String token) {
        Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            sessioneRepository.delete(sessione);
        }
    }

    @Override
    public boolean createUtente(Utente utente) {
        Utente u = utenteRepository.findByUsername(utente.getUsername());
        if (u != null) {
            return false;
        }
        utenteRepository.save(utente);
        return true;
    }

    @Override
    public void updateUtente(String token, Utente utente) {
        Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            Utente oldUtente = sessione.getUtente();
            oldUtente.setNome(utente.getNome());
            oldUtente.setCognome(utente.getCognome());
            oldUtente.setEmail(utente.getEmail());
            oldUtente.setUsername(utente.getUsername());
            oldUtente.setTelefono(utente.getTelefono());
            oldUtente.setCitta(utente.getCitta());
            oldUtente.setEta(utente.getEta());
            oldUtente.setDatadinascita(utente.getDatadinascita());
        }
    }
    
    
    /**
     *
     * @param id_professionista
     * @param p
     * @param prof
     * @param u
     * @param p
     * @return
     */

    
    @Override
    public Professionista findProfessionisti(Long id_professionista) {
        return professionistaRepository.findProfessionista(id_professionista);
    }  
    
    @Override
    public List<Professionista> findProfessionistiCitta(String citta) {
        return professionistaRepository.findAllProfessionistiByCitta(citta);
    }
    
    @Override
    public List<Professionista> findProfessionistiCat(Long idcat) {
        return professionistaRepository.findByCategoria(idcat);
    }
        
    @Override
    public List<Professionista> findLastProfessionisti() {
        return professionistaRepository.findLastProfessionisti();
    }
  


    @Override
    public boolean creaPrenotazione(String token, Prenotazione prenotazione) {
 Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            boolean flag=true;
            List<Prenotazione> p= prenotazioneRepository.findAllPren();
for(Prenotazione i: p){
    if(i.getProfessionista().getIdProfessionista()== prenotazione.getProfessionista().getIdProfessionista() && i.getData().equals(prenotazione.getData()) && i.getOra().equals(prenotazione.getOra()))
    flag=false;
        }
if(flag){
            prenotazione.setUtente(sessione.getUtente());
            prenotazioneRepository.save(prenotazione);
            return true;
        }
else{
        return false;
        }}
        return false;
        }
    


     @Override
    public boolean creaPreferito(String token, Preferito preferito) {
     
 Sessione sessione = sessioneRepository.findByToken(token);
          if (sessione != null) {
              boolean flag= true;
        List<Preferito> u= preferitoRepository.findByUtenteId(sessione.getUtente().getId());
 for(Preferito i: u){
     if(i.getProfessionista().getIdProfessionista()== preferito.getProfessionista().getIdProfessionista())
            flag=false;
     }
     if(flag){
            preferito.setUtente(sessione.getUtente());
          
            preferitoRepository.save(preferito);
            return true;
        }
         else{
        return false;
        }}
    return false;
    }

    @Override
    public List<Prenotazione> findAllPrenotazioni(String token) {
        Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            return prenotazioneRepository.findByUtenteId(sessione.getUtente().getId());
            
        } else {
            return new ArrayList<>();
        }

    }
        @Override
    public List<Preferito> findAllPreferiti(String token) {
        Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            return preferitoRepository.findByUtenteId(sessione.getUtente().getId());
            
        } else {
            return new ArrayList<>();
        }

    }

    
        @Override
    public void cancellaPreferito(String token, Long id_preferito) {
        Sessione sessione = sessioneRepository.findByToken(token);
        if (sessione != null) {
            preferitoRepository.delete(id_preferito);
        }

    }

    

    @Override
    public List<Categoria> findAllCategorie() {
       return categoriaRepository.findAllCategorie();
    }

    @Override
    public Long GetCategoriaById(String nome) {
         return categoriaRepository.findIdbyNome(nome);
    }

    

    @Override
    public List<Professionista> findAllProf() {
       return professionistaRepository.findAll();
    }

    @Override
    public List<String> GetAllNomiCat() {
        return categoriaRepository.GetAllCategorieNome();
    }

    @Override
    public List<String> findAllCityProf() {
        return professionistaRepository.findAllCityProf();
    }
    
    public List<Professionista> findProfCompleto(Long id_categoria, String citta){
        return professionistaRepository.findAllProfessionistiByCittaByCategoria(citta, id_categoria);
    }

    @Override
    public List<Professionista> findProfCompleto(String citta, Long idcat) {
     return professionistaRepository.findAllProfessionistiByCittaByCategoria(citta, idcat);  
    }

     
}

         
