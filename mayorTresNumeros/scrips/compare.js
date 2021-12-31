export function compare(n1,n2,n3){
    
    if (n1>n2){
        if (n1>n3){
            return 'El número ' + n1 + ' es el mayor';
        }
       
    }
    if (n2>n3){
        return 'El número ' + n2 + ' es el mayor';
    }
    return 'El número ' + n3 + ' es el mayor';
}