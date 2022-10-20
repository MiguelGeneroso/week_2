class Vector{

    constructor(){
        this.arrNum = [];
    }

    Constructor(n,m){
        //crear un array de n numeros aleatorios desde 0 hasta m

        for (let i = 0; i < n; i++){
            this.arrNum.push(Math.floor(Math.random() * (m + 1)));
        }
        return this.arrNum;
    }

    add(a){
        //Suma el array a con el array de la clase vector si y solo si tienen el mismo numero de elementos.
        if (a.length == this.arrNum.length){
            
            let arr = [];
            for (let i = 0; i < a.length; i++){
                arr.push(a[i] + this.arrNum[i]);
            }

            console.log(arr);
        }else{
            console.log("EROR: los arrays no tienen la misma longitud");
        }
    }

    productNum(n){
        //Multiplica el array de la clase vector por el numero n.

        let arr = [];

            for (let i = 0; i < this.arrNum.length; i++){
                arr.push(this.arrNum[i] * n);
            }
            console.log(arr);
    }

    subs(a){
        //Resta el array a con el array de la clase vector si y solo si tienen el mismo numero de elementos.

        if (a.length == this.arrNum.length){
            
            let arr = [];
            for (let i = 0; i < a.length; i++){
                arr.push(a[i] - this.arrNum[i]);
            }

            console.log(arr);
        }else{
            console.log("EROR: los arrays no tienen la misma longitud");
        }
    }

    product(a){
        //Multiplica el array a con el array de la clase vector si y solo si tienen el mismo número de elementos.

        if (a.length == this.arrNum.length){
            
            let arr = [];
            for (let i = 0; i < a.length; i++){
                arr.push(a[i] * this.arrNum[i]);
            }

            console.log(arr);
        }else{
            console.log("EROR: los arrays no tienen la misma longitud");
        }
    }
}

module.exports = {Vector}
