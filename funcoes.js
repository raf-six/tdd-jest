function solucaoPrimeiroGrau(a, b){

    // função afim -> f(x) = ax + b

    // quando a = 0:
    if (a == 0){

        // a função não existe
        return null;
    } 
    
    // aqui a função existe:
    
    res = {
        x: -b/a
    }
   
    return res;

}

function solucaoSegundoGrau(a, b, c){

    // função quadrática -> g(x) = ax^2 + bx + c

    var x1;
    var x2;

    // quando a = 0:
    if (a == 0){

        // a função não existe
        return null;

    }

    // quando b = 0:
    if (b == 0){
        // g(x) = ax^2 + c

        x1 = Math.sqrt((-c)/a) // x pode ser positivo e negativo
        x2 = Math.sqrt((-c)/a) * (-1)

        res = {
            x1: x1,
            x2: x2
        }

        return res;
    }

    // quando c = 0:
    if (c == 0){
        // g(x) = ax^2 + bx

        res = {
            x1: 0,
            x2: -b/a
        }

        return res;
    }

    // quando a função é completa -> g(x) = ax^2 + bx + c

    // cálculo do delta:
    var delta = (b ** 2) - (4 * a * c)

    if (delta < 0){

        // as raízes não são reais
        return null;
    }

    if (delta == 0){

        // x1 = x2

        x1 = (  (b*(-1)) + Math.sqrt(delta)  ) / 2 * a;

        res = {
            x1: x1
        }

        return res;
    }

    if (delta > 0){

        // x1 != x2

        x1 = (  (b*(-1)) + Math.sqrt(delta)  ) / 2 * a;
        x2 = (  (b*(-1)) + Math.sqrt(delta)  ) / 2 * a;

        res = {
            x1: x1,
            x2: x2
        }

        return res;
    }

}

module.exports = {
    solucaoPrimeiroGrau,
    solucaoSegundoGrau
}