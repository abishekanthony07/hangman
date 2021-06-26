describe('Testen der Unterstriche', function (){
    it('should test html-view', function () {
        expect(generateUnderscore()).toBe(false); //because id does not exist in html-file
    });
})

describe('Testen des Speicherns', function (){
    it('should test save', function () {
        saveGame("TestUser", "12").then(v =>{
            expect(v).toBe("{username:\"TestUser\", score:\"12\"}");
        })
    });
})



describe('Testen der Bildaktualisierung', function (){
    it('Test mit 0 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(0)).toBe(pfad + "0" + fehlerteil + dateityp);
    });

    it('Test mit 1 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(1)).toBe(pfad + "1" + fehlerteil + dateityp);
    });

    it('Test mit 2 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(2)).toBe(pfad + "2" + fehlerteil + dateityp);
    });

    it('Test mit 3 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(3)).toBe(pfad + "3" + fehlerteil + dateityp);
    });

    it('Test mit 4 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(4)).toBe(pfad + "4" + fehlerteil + dateityp);
    });

    it('Test mit 5 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(5)).toBe(pfad + "5" + fehlerteil + dateityp);
    });

    it('Test mit 6 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(6)).toBe(pfad + "6" + fehlerteil + dateityp);
    });

    it('Test mit 7 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(7)).toBe(pfad + "7" + fehlerteil + dateityp);
    });

    it('Test mit 8 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(8)).toBe(pfad + "8" + fehlerteil + dateityp);
    });

    it('Test mit 9 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var fehlerteil = "_Fehler";
                var dateityp = ".png";
        expect(aktualisiereBild(9)).toBe(pfad + "9" + fehlerteil + dateityp);
    });

    it('Test mit 10 Fehler des Users', function () {
                var pfad = "../assets/images/zuständeHangman/Hangman_";
                var dateityp = ".png";
        expect(aktualisiereBild(10)).toBe(pfad + "game_over" + dateityp);
    });
})



