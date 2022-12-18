import React from 'react';
import type { GameInterface } from "../../interfaces/game.interface";


const CardReact = (props: { game: GameInterface }) => {
    const game: GameInterface = props.game;
    return (
        <li className="link-card react">
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

export default CardReact;