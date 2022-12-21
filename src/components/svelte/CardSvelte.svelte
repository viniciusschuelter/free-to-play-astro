
<script lang="typescript">
    import type { GameInterface } from "../../interfaces/game.interface";

    export let game: GameInterface;
</script>


<li class="link-card svelte" id={game.genre}>
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