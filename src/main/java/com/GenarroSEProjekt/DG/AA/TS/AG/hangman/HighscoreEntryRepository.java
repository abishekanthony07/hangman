package com.GenarroSEProjekt.DG.AA.TS.AG.hangman;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Einfaches Spring Data Repository für den Zugriff auf die in der Datenbank
 * gespeicherten Gästebucheinträge. Spring erzeugt automatisch eine abgeleitete
 * Klasse mit den üblichen Methoden zum Lesen, Schreiben und Löschen von
 * Einträgen.
 */
@RepositoryRestResource(collectionResourceRel = "highscoreEntries", path = "highscore")
public interface HighscoreEntryRepository extends PagingAndSortingRepository<HighscoreEntry, Long> {
    // Kann leer bleiben
}