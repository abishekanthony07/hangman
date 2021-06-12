package com.GenarroSEProjekt.DG.AA.TS.AG.hangman.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * Eine Automarke hat einen Markennamen, verschiedene Motoren und eine Geschäftsführung.
 *
 */
@Entity
@Data
public class HighscoreEntry implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private long id;

    private LocalDateTime datetime = LocalDateTime.now();

    @Column(length = 5)
    @Size(min = 1, max = 5, message = "Der Username muss zwischen einem und 5 Zeichen lang sein.")
    @NotNull(message = "Der Username darf nicht leer sein.")
    private String username;

    @Size(min = 1, max = 5, message = "Die Anzahl der Durchläufe muss zwischen einem und 5 Zeichen lang sein.")
    @NotNull(message = "Die Anzahl der Durchläufe darf nicht leer sein.")
    private String score;

    /**
     * Default-Konstruktor
     */
    public HighscoreEntry() {
    }
}