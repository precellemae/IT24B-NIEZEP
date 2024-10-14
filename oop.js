class shoes {
    constructor (brand, prize){
        this.brand = brand;
        this.prize = prize;
    }  
    getBrand() {
        return  "Brand: " +this.brand
    getPrize()

    }   
}
const Nike = new shoes ("nike", 400);
const Adidas = new shoes ("adidas", 500);
console.log(Nike.getBrand());