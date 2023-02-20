const powerOfTwo = (power) => {
    if(power > -1)
        return 1 << power;
    else
        return 1/(1<<Math.abs(power));
}

console.log(powerOfTwo(-5));