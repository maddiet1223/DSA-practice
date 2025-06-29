const isPrime = (n) => {
if(n<2){
    console.log(`The number ${n} is not a prime`);
    return;
}

for(let i=2;i<n;i++) {
    if(n%i === 0) {
        console.log(`The number ${n} is not a prime`);
        return;
    }
}
console.log(`The number ${n} is a prime`);
}



isPrime(7);
isPrime(8);
isPrime(44);
isPrime(787);