import { atom } from "nanostores";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '7ff0dcbba6msh3e9a44a4a9d77d5p1cad6bjsn5025470c6125'
    }
};

const data = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options).then((response) => response.json());

console.log(data.length);

export const gameList = atom(data);