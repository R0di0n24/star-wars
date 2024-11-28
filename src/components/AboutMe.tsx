import {useContext, useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {HeroInfo} from "../utils/types";
import {useParams} from "react-router-dom";
import {SWContext} from "../utils/context.ts";
import Hero from "./Hero.tsx";


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const {changeHero} = useContext(SWContext);
    let {heroId = defaultHero} = useParams();
    useEffect(() => {
        changeHero(heroId);
    }, [heroId]);

    if (!characters[heroId]) {
        heroId = defaultHero;
    } else {

    }
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${characters[heroId].url}`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    return (
        <>
            {(!!hero) &&
                <div
                    className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
                    <Hero hero={heroId} />
                    {Object.keys(hero).map(key =>
                        <p key={key}>
                        <span className={`text-[1.25em] capitalize`}>
                            {key.replace('_', ' ')}:
                        </span>
                            {hero[key as keyof HeroInfo]}</p>)}
                </div>
            }
        </>
    );
}

export default AboutMe;