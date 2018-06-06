package it.univaq.disim.mobile.jobservice.web;

import it.univaq.disim.mobile.jobservice.business.domain.Prenotazione;
import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneController {
    
    @Autowired
    private JobServiceService service;
    
    
    @GetMapping("/{token}")
    public List<Prenotazione> findAllPrenotazioni(@PathVariable(value = "token") String token) {
        List<Prenotazione> prenotazioni = service.findAllPrenotazioni(token);
        //Response<List<Prenotazione>> response = new Response<>(true, "all prenotazioni");
        //response.setData(prenotazioni);
        return prenotazioni;
    }
    
    @PostMapping("/{token}")
    public Response creaPrenotazione(@PathVariable(value = "token") String token, @RequestBody Prenotazione prenotazione) {
        boolean result = service.creaPrenotazione(token,prenotazione);
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

    
            