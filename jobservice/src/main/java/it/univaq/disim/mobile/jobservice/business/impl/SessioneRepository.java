package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Sessione;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SessioneRepository extends JpaRepository<Sessione, Long> {

   
    Sessione findByToken(String token);
    
     }
