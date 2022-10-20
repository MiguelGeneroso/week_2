export class Vector{

    private elements : number[];
    public n : number;
    public k : number;


    constructor(n : number, k : number){

        this.n = n;
        this.k = k;
        this.elements = [];

        for (let i = 0; i < n; i++){

            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }

    }

    public print(){

        console.log(this.elements);        
    }

    public add (v1 : Vector) : Vector {

        if (v1.elements.length == this.elements.length){

            for(let i = 0; i < v1.elements.length; i++){

                v1.elements[i] = v1.elements[i] + this.elements[i];
            }
        }else{
            
                v1.elements= [];
            
        }

        

        return v1;
    } 

    public subs (v1 : Vector) : Vector {

        if (v1.elements.length == this.elements.length){

            for(let i = 0; i < v1.elements.length; i++){

                v1.elements[i] =this.elements[i] - v1.elements[i];
            }
        }else {

            v1.elements= [];
        }

        return v1;
    } 

    public mult (v1 : Vector) : Vector {

        if (v1.elements.length == this.elements.length){

            for(let i = 0; i < v1.elements.length; i++){

                v1.elements[i] = v1.elements[i] * this.elements[i];
            }
        }else{

            v1.elements= [];
        }

        return v1;
    } 

    public multNumber (n :number ) : Vector {

        let v : Vector = new Vector(this.elements.length,5);

        for(let i = 0; i < this.elements.length; i++){

            v.elements[i] = n * this.elements[i];
        }

        return v;
    } 





}



 