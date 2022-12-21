import { render } from "solid-js/web";
import type { GameInterface } from "../../interfaces/game.interface";

const CardSolid = (props: { game: GameInterface }) => {
    const game: GameInterface = props.game;
    return (
        <li className="link-card solid-js" id={game.genre}>
            <a href={game.game_url}>
                <img src={game.thumbnail} alt={game.title} width="100%" />
                <h2>
                    {game.title}
                    <span>&rarr;</span>
                </h2>
                <p>
                    {game.short_description}
                </p>
            </a>
        </li>
    );
} 

export default CardSolid;