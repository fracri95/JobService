package it.univaq.disim.mobile.jobservice.web;


import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import it.univaq.disim.mobile.jobservice.business.domain.Categoria;
import java.util.List;
import java.util.Vector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categorie")
public class CategoriaController {
    
    @Autowired
    private JobServiceService service;
    
    @GetMapping("/all")
    public List<Categoria> findAllCategorie () {
    List<Categoria> AllCategorie= service.findAllCategorie();
    return AllCategorie;
    }
    
    @GetMapping("/{categoria}")
    public Long findCategoriaById(@PathVariable(value="categoria") String nome){
    Long idricerca= service.GetCategoriaById(nome);
    return idricerca;    
    }
    
    @GetMapping("/nomi")
    public Vector<String> GetAllNCat(){
    Vector<String> AllNCat= service.GetAllNomiCat();
    return AllNCat;  //ok
    }
    
}
