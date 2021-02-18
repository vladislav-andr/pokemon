import axios from "axios"

export default async info => {
    const data = await
        axios(`https://pokeapi.co/api/v2/pokemon/${info}/`)
            .then(res => res.data)
    const { id, name, types, stats, sprites } = data;
    return {
        id,     // айдишка
        name,   // имя
        types,  // это типы
        stats,  // характеристики
        img: sprites.other.dream_world.front_default ? 
        sprites.other.dream_world.front_default :  // ? svg
        sprites.other[`official-artwork`].front_default // ? png
    }
}


