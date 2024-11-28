import {FunctionComponent} from "react";

export interface SWContextValue {
    hero: string;
    changeHero: (page: string) => void;
}

export interface HeroInfo {
    name: string,
    gender:string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
    // [key: string]: string;
}
export interface Item {
    title: string,
    path: string
}

export interface Hero {
    name: string,
    img: string,
    url: string
}
export interface Characters {
    [key: string]: Hero
}

export  interface Wrapper {
    Component: FunctionComponent,
    props?: {
        [key: string]: string
    }
}
// export interface CharactersKeys keyof Character