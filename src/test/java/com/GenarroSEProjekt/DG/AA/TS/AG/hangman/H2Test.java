package com.GenarroSEProjekt.DG.AA.TS.AG.hangman;

import com.GenarroSEProjekt.DG.AA.TS.AG.hangman.model.HighscoreEntry;
import com.GenarroSEProjekt.DG.AA.TS.AG.hangman.repository.HighscoreEntryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.time.LocalDateTime;

@SpringBootTest
public class H2Test {
    @Autowired
    private HighscoreEntryRepository highscoreRepository;

    @Test
    @DisplayName("Highscore Test")
    void createHighscoreTest() {
        HighscoreEntry highscoreEntry = highscoreRepository.save(getHighscore());
        Assert.isTrue((highscoreEntry.getUsername().equals("Testi")), "The Username of this highscoreEntry must be Testi");
    }

    private HighscoreEntry getHighscore() {
        HighscoreEntry highscoreEntry = new HighscoreEntry();
        highscoreEntry.setScore("44");
        highscoreEntry.setUsername("Testi");
        highscoreEntry.setDatetime(LocalDateTime.now());
        return highscoreEntry;
    }
}