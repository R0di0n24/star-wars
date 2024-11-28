// import main from "../assets/main.jpg";
import {characters} from "../utils/constants.ts";
interface Props {
    hero?:string
}
const Hero = ({hero}:Props) => {

    return (
        <div className={`float-left w-1/4 mr-4`}>
            <img className={`w-full shadow-hero`} src={ !characters[hero!]? characters.luke.img: characters[hero!].img  } alt="Hero"/>
        </div>
    );
}

export default Hero;