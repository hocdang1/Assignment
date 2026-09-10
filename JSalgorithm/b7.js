function pyramid(num){
    const result = [];
    for (let i = 0; i < num; i++) {
        
         result.push(Array(i + 1).fill(1));
    }
    return result;
}
console.log(pyramid(5));
