import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";
// interface Props {
//     [key:string]: string;
// }

export const withErrorPage = <T extends object>(Comp:ComponentType<T>) => (props:T) =>  {
    const {heroId=defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    useEffect(() => {
        if(!characters[heroId]){
            return;
        }
        changeHero(heroId);
    },[heroId] );
    return characters[heroId] ? <Comp  {...props} heroId={heroId}/> : <ErrorPage/>
};

