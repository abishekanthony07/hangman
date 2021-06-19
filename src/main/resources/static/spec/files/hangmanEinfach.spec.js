describe('Testen der Unterstriche', function (){
    it('should test html-view', function () {
        expect(generateUnderscore()).toBe(false); //because id does not exist in html-file
    });
})