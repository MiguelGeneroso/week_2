class Matrix{

    constructor(){

        this.arrVector = [];
    }

    Constructor(n,m,k){
        //Crea una matriz de nxm de números aleatorios que van desde 0 hasta k.
        let matriz = [];
        
        for (let i = 0; i < n; i++){
            matriz.push([]);
            for (let j = 0; j < m; j++){

                matriz[i].push(Math.floor(Math.random() * (k + 1)));
            }
        } 
        console.log(matriz);
    }

    add(m){
        //Suma la matriz m con la matriz de la clase Matrix si y solo si tienen el mismo numero de elementos.
        let iguales = true;

        if(m.length == this.arrVector.length){
            for (let i = 0; i < m.length; i++){
            
                if(m[i].length == this.arrVector[i].length){
                    iguales = true;
                }else{
                    iguales = false;
                }
            } 
        }else{

            iguales = false;
        }

        if (!iguales){

            let arr = [];
            
            for (let i = 0; i < m.length; i++){
                arr.push([]);
                for (let j = 0; j < m[i].length; j++){
                    //arr[i].push(this.arrVector[i][j] + m[i][j]);
                    arr[i].push([m[i][j]])
                    //arr[i][j] = this.arrVector[i][j] + m[i][j];
                    //let val = this.arrVector[i][j] + m[i][j];
                    console.log(this.arrVector[i][j]);
                    //arr[i].push(val);
                }
            }

            console.log(arr);

        }else{

            console.log("Las matrices no coinciden");
        }
        





        /*if (m.length == this.arrVector.length){
            
            for (let i = 0; i < m.length; i++){
                
            }

        }else{
            console.log("ERROR: el tamaño de las matrices no coinciden");
        }*/
    }

    productNum(n){
        //Multiplica la matriz de la clase Matrix por el numero n.
    }

    subs(m){
        //Resta la matriz m con la matriz de la clase Matrix si y solo si tienen el mismo número de elementos.
    }
    product(a){
        //Multiplica la matriz m con la matriz de la clase Matrix si y solo si tienen el mismo número de elementos.
    }
}


module.exports = {Matrix};