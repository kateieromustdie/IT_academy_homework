class Salad {
    constructor() {
        this.cucumber = false;
        this.tomato = false;
        this.olive = false;
        this.pepper = false;
        this.meat = false;
        this.chease = false;
        this.sauce = false;
        this.oil = false;
        this.sourCream = false;
    }
};

class SaladBuilder {
    constructor() {
        this.salad = new Salad();
    }
    
    addCucumber(cucumber) {
        this.salad.cucumber = cucumber;
        return this;
    }
    
    addTomato(tomato) {
        this.salad.tomato = tomato;
        return this;
    }
    
    addOlive(olive) {
        this.salad.olive = olive;
        return this;
    }
    
    addPepper(pepper) {
        this.salad.pepper = pepper;
        return this;
    }
    
    addMeat(meat) {
        this.salad.meat = meat;
        return this;
    }
    
    addChease(chease) {
        this.salad.chease = chease;
        return this;
    }
    
    addSauce(sauce) {
        this.salad.sauce = sauce;
        return this;
    }
    
    addOil(oil) {
        this.salad.oil = oil;
        return this;
    }
    
    addSourCream(sourCream) {
        this.salad.sourCream = sourCream;
        return this;
    }
    
    build() {
        return this.salad;
    }
};

const mySalad = new SaladBuilder()
                    .addCucumber(true)
                    .addTomato(true)
                    .addOlive(true)
                    .addPepper(true)
                    .addMeat(true)
                    .addChease(true)
                    .addSauce(true)
                    .addOil(true)
                    .addSourCream(true)
                    .build();
                    
console.log(mySalad);
