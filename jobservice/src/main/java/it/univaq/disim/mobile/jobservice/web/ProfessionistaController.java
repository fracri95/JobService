package it.univaq.disim.mobile.jobservice.web;

import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import it.univaq.disim.mobile.jobservice.business.domain.Professionista;
import it.univaq.disim.mobile.jobservice.business.domain.Preferito;
import java.util.List;
import java.util.Vector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/professionisti")
public class ProfessionistaController {
    
    @Autowired
    private JobServiceService service;

    @GetMapping("/categoria/{idcat}")
    public List<Professionista> findAllProfessionistiByCategoria (@PathVariable(value = "idcat") Long idcat) {
        List<Professionista> professionisti = service.findProfessionistiCat(idcat);
        return professionisti; //ok
    }
    
    @GetMapping("/citta/{cittaparam}")
    public List<Professionista> findAllProfessionistiByCitta (@PathVariable(value = "cittaparam") String citta) {
        List<Professionista> professionisti = service.findProfessionistiCitta(citta);
        return professionisti;  //ok
    }  
    
    @GetMapping("/all")
    public List<Professionista> findAllProfessionisti(){
        List<Professionista> professionisti= service.findAllProf();
        return professionisti;
    }
            
    
    @GetMapping("/last") //id maggiore di 10
    public List<Professionista> findLastProfessionisti () {
        List<Professionista> professionisti = service.findLastProfessionisti();
        return professionisti;
    }
    
    @GetMapping("/ricerca/{citta}/{idcat}") //due parametri x la ricerca
    public List<Professionista> findAllProfessionistiByCittaByCategoria (@PathVariable(value = "citta") String citta, @PathVariable(value = "idcat") Long idcat) {
        List<Professionista> professionisti = service.findProfCompleto(citta,idcat);
        return professionisti;
    }
    
    @GetMapping("/{id}")
    public Professionista findProfessionisti  (@PathVariable(value = "id") Long id_professionista) {
        Professionista professionisti = service.findProfessionisti(id_professionista);
       return professionisti;  //ritorna professionista x id //ok
    }

        
    @GetMapping("/allcitta")
    public Vector<String> AllCityProf(){
        Vector<String> AllCityProf = service.findAllCityProf();
        return AllCityProf;
    }
}