// import {useContext} from "react";
// import {SWContext} from "../utils/context.ts";
import {Item} from "../utils/types";
import {NavLink} from "react-router-dom";
// import {useContext} from "react";

interface Props {
    item: Item;
}

const NavItem = ({item}:Props) => {
    // const {changePage} = useContext(SWContext);

    return (
            <NavLink
                className={`bg-red-color border-black border-2 rounded-[5px] px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}
                to={`${item.path}`}
            >
                {item.title}
            </NavLink>
    );
};

export default NavItem;
// onClick={() => changePage(itemTitle)}