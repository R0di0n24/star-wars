import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
// import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [newHero, setHero] = useState('luke');
const changeHero= (newHero:string) => {
    setHero(newHero);
    console.log(newHero);
}
    return (
        <div>
            <SWContext.Provider value={{newHero, changeHero}}>
                <Header/>
                <Main/>
            </SWContext.Provider>
            <Footer/>
        </div>
    )
}

export default App
