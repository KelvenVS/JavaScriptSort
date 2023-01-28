function sleep(milliseconds){
    return new Promise(resolve => setTimeout(resolve,milliseconds));
}

async function incrementNumber(number){
    console.log(number)
    await sleep(2000)

    if (number === 10){
        return 'expired timer'
    }
    return incrementNumber(number + 1); 
}

incrementNumber(1);