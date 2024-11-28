import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {Route, Routes} from "react-router-dom";
import {navItems} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Main = () => {
    const {hero} = useContext(SWContext);
    // console.log('Main tsx working', hero);
     return (
        <Routes>
            {['/',`/${navItems[0].path}`, `/${navItems[0].path}/:heroId`].map(path => <Route path={path} key={path} element={<Home />}/>)}
            {[`/${navItems[1].path}`,
                `/${navItems[1].path}/:heroId`].map(path => <Route path={path} key={path} element={<AboutMe heroId={hero}/>}/>)}
            {[`/${navItems[2].path}`,`/${navItems[2].path}/:heroId`].map(path => <Route path={path} key={path} element={<StarWars/>}/>)}
            {[`/${navItems[3].path}`,`/${navItems[3].path}/:heroId`].map(path => <Route path={path} key={path} element={<Contact/>}/>)}
                        <Route path={`*`} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Main;