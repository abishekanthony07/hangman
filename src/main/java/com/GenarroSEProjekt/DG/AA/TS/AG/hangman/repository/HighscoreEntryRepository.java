package com.GenarroSEProjekt.DG.AA.TS.AG.hangman.repository;

import com.GenarroSEProjekt.DG.AA.TS.AG.hangman.model.HighscoreEntry;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author Abishek
 */
@RepositoryRestResource(collectionResourceRel = "highscore", path = "highscore")
public interface HighscoreEntryRepository extends PagingAndSortingRepository<HighscoreEntry, Long> {
}
