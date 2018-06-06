package it.univaq.disim.mobile.jobservice.business.impl;

import it.univaq.disim.mobile.jobservice.business.domain.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtenteRepository extends JpaRepository<Utente, Long> {
       
    Utente findByUsername (String username);
  }
