<template>
    <li className="link-card vue">
        <a :href="game.game_url">
            <img :src="game.thumbnail" :alt="game.title" width="100%" />
            <h2>
                {{game.title}}
                <span>&rarr;</span>
            </h2>
            <p>
                {{game.short_description}}
            </p>
        </a>
    </li>
</template>
  
<script>
export default {
    props: {
        game: Object
    }
}
</script>