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
    @DisplayName("Create HighscoreEntry")
    void createHighscoreEntry() {
        HighscoreEntry highscoreEntry = highscoreRepository.save(createHighscore("Testi", "10"));
        Assert.isTrue((highscoreEntry != null), "The Username of this highscoreEntry must not be null");
    }

    @Test
    @DisplayName("Check HighscoreEntry Username")
    void checkHighscoreEntryUsername() {
        HighscoreEntry highscoreEntry = highscoreRepository.save(createHighscore("Testi", "10"));
        Assert.isTrue((highscoreEntry.getUsername().equals("Testi")), "The Username of this highscoreEntry must be Testi");
    }

    @Test
    @DisplayName("Create HighscoreEntry Username with wrong field size")
    void createFalseHighscoreEntryUsername() {

        Throwable e = null;

        try {
            HighscoreEntry highscoreEntry = highscoreRepository.save(createHighscore("Tester", "10"));
        } catch (Throwable ex) {
            e = ex;
        }
Assert.isInstanceOf(javax.validation.ConstraintViolationException.class, e, "The size of the Username of this highscoreEntry must between 1-5 characters");

    }

    @Test
    @DisplayName("Create empty HighscoreEntry Username")
    void createEmptyHighscoreEntryUsername() {

        Throwable e = null;

        try {
            HighscoreEntry highscoreEntry = highscoreRepository.save(createHighscore("", "10"));
        } catch (Throwable ex) {
            e = ex;
        }
        Assert.isInstanceOf(javax.validation.ConstraintViolationException.class, e, "The size of the Username of this highscoreEntry must between 1-5 characters");

    }

    @Test
    @DisplayName("Create empty HighscoreEntry Score")
    void createEmptyHighscoreEntryScore() {

        Throwable e = null;

        try {
            HighscoreEntry highscoreEntry = highscoreRepository.save(createHighscore("Testi", ""));
        } catch (Throwable ex) {
            e = ex;
        }
        Assert.isInstanceOf(javax.validation.ConstraintViolationException.class, e, "The size of the Username of this highscoreEntry must between 1-5 characters");
    }

    private HighscoreEntry createHighscore(String username, String score) {
        HighscoreEntry highscoreEntry = new HighscoreEntry();
        highscoreEntry.setUsername(username);
        highscoreEntry.setScore(score);
        highscoreEntry.setDatetime(LocalDateTime.now());
        return highscoreEntry;
    }

}