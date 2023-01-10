//BigInt
//Number.MAX_SAFE_INTEGER 

//

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let laci_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

/*let weight = will_pokemon.pikachu.weight;
console.log('weight: ', weight);*/

/*let weight2 = laci_pokemon.pikachu.weight;
console.log('weight: ', weight);*/

//optional chaining operator ?.

let weight3 = laci_pokemon?.pikachu?.weight;

console.log(weight3);

//nullish coalescing operator ??

let power = laci_pokemon?.pikachu?.power ?? 'no power';

console.log(power);