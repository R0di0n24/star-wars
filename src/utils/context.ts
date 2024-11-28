import {createContext} from "react";
import {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    newHero: 'luke',
    changeHero: (newHero: string) => console.log(newHero),
});