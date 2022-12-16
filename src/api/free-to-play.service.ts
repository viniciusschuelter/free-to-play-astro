

const BASE_API = 'https://www.freetogame.com/api/games';

export async function getAllFreeToPlayGames() {
    const response = await fetch(BASE_API);
    return response;
}
