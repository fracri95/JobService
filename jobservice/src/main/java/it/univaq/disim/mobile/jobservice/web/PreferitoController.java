package it.univaq.disim.mobile.jobservice.web;

import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import it.univaq.disim.mobile.jobservice.business.domain.Preferito;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/preferiti")
public class PreferitoController {
    
    @Autowired
    private JobServiceService service;
    
    @GetMapping("/{token}")
    public List<Preferito> findAllPreferiti(@PathVariable(value = "token") String token) {
        List<Preferito> preferiti = service.findAllPreferiti(token);
        //Response<List<Prenotazione>> response = new Response<>(true, "all prenotazioni");
        //response.setData(prenotazioni);
        return preferiti;
    }
    
@PostMapping("/{token}")
    public Response creaPreferito(@PathVariable(value = "token") String token, @RequestBody Preferito preferito) {
        boolean result = service.creaPreferito(token,preferito);
        Response<Object> response = new Response<>();
        response.setResult(result);
        if (result) {
            response.setMessage("Ok");
        } else {
            response.setMessage("User already exist");
        }
        return response;
    }  
    
}
