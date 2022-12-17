
export enum FrameworkEnum {
    ASTRO = 'astro',
    REACT = 'react',
    SOLID = 'solid-js',
    SVELTE = 'svelte',
    VUE = 'vue',
}

export interface FrameworkInterface {
    title: string;
    image: string;
    framework: FrameworkEnum;
    tooltip: string;
}


export const frameworkListMock: FrameworkInterface[] = [
    {
        title: 'astro',
        image: '../astro.png',
        framework: FrameworkEnum.ASTRO,
        tooltip: 'Use Astro Card'
    },
    {
        title: 'react',
        image: '../react.png',
        framework: FrameworkEnum.REACT,
        tooltip: 'Use React Card'
    },
    {
        title: 'solid-js',
        image: '/solid-js.png',
        framework: FrameworkEnum.SOLID,
        tooltip: 'Use Solid Card'
    },
    {
        title: 'svelte',
        image: '/svelte.png',
        framework: FrameworkEnum.SVELTE,
        tooltip: 'Use Svelte Card'
    },
    {
        title: 'vue',
        image: '/vue.png',
        framework: FrameworkEnum.VUE,
        tooltip: 'Use React Card'
    },
]