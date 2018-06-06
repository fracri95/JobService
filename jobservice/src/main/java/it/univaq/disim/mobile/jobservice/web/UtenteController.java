package it.univaq.disim.mobile.jobservice.web;

import it.univaq.disim.mobile.jobservice.business.JobServiceService;
import it.univaq.disim.mobile.jobservice.business.domain.Sessione;
import it.univaq.disim.mobile.jobservice.business.domain.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UtenteController {

    @Autowired
    private JobServiceService service;

    @PostMapping("/login")
    public Response login(@RequestBody Utente u) {
        Sessione sessione = service.login(u.getUsername(), u.getPassword());
        if (sessione != null) {
            Response<Login> result = new Response<>(true, Response.DEFAULT_RESPONSE_OK.getMessage());
            Login login = new Login();
            login.setToken(sessione.getToken());
            login.setId(sessione.getUtente().getId());
            login.setUsername(sessione.getUtente().getUsername());
            login.setPassword(sessione.getUtente().getPassword());
            login.setEmail(sessione.getUtente().getEmail());
            login.setNome(sessione.getUtente().getNome());
            login.setCognome(sessione.getUtente().getCognome());
            login.setEta(sessione.getUtente().getEta());
            login.setCitta(sessione.getUtente().getCitta());
            login.setTelefono(sessione.getUtente().getTelefono());
            login.setDatadinascita(sessione.getUtente().getDatadinascita());

            result.setData(login);
            return result;
        } else {
            return Response.DEFAULT_RESPONSE_KO;
        }

    }
    
    @GetMapping("/logout/{token}")
    public Response logout(@PathVariable(value="token") String token) {
        service.logout(token);
        return Response.DEFAULT_RESPONSE_OK;
    }
    


    @PostMapping("/create")
    public Response createUtente(@RequestBody Utente utente) {
    boolean result = service.createUtente(utente);
        Response<Object> response = new Response<>();
        response.setResult(result);
        if (result) {
            response.setMessage("Ok");
        } else {
            response.setMessage("User already exist");
        }
        return response;
    }

    @PutMapping("/utenti/{token}")
    public Response updateUtente(@RequestBody Utente utente, @PathVariable String token) {
        service.updateUtente(token, utente);
        return Response.DEFAULT_RESPONSE_OK;
    }
    
    /*@GetMapping("/{username}") //ok
    public Utente findByUsername (@PathVariable(value = "username") String username) {
        Utente utente = service.findUsername(username);
        return utente;
    }*/
    
}
