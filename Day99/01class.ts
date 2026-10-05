class Human{
    name:string;
    color:string;
    weight:number;
    height:number;

    constructor(name:string,color:string,weight:number,height:number){
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.name =name;
    }

    displayInfo():void{
        console.log(`${this.name}'s weight is ${this.weight} kg & height is ${this.height} ft.`)
    }
}

let h1 = new Human('monali','red',57,5)
let h2 = new Human('khalid','red',55,5.5)

h1.displayInfo();
h2.displayInfo();

