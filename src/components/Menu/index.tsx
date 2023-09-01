import styles from './index.module.scss';
import {NavLink} from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { LINKS } from '../../utils/constans/routes'; 
import { Link } from '../../utils/interfaces/contants';
import { useWindowResize } from '../../hooks/useWindowResize';
import { useState } from 'react';



const Menu = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const width = useWindowResize();

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className={width <= 768 ? styles.mobileMenu : styles.menu}>
            {width <= 768 && <button className={styles.menuBtn} onClick={handleMenu}><AiOutlineMenu/></button> }
            {width <= 768
            ? (
                <ul className={menu ? styles.menuActive : styles.menuBlock}>
                {
                    LINKS.map((item:Link) => (
                    <li onClick={handleMenu} key={item.name}>
                        <NavLink 
                            to={item.to}
                            style={({ isActive }) => {return {color: isActive ? "#F0F0F0" : ""}}}>
                            {item.name}
                        </NavLink>
                    </li>))
                }
                </ul>
            )
            : (
                <ul className={styles.links}>
                {
                    LINKS.map((item:Link) => (
                    <li key={item.name}>
                        <NavLink 
                            to={item.to}
                            style={({ isActive }) => {return {color: isActive ? "#F0F0F0" : ""}}}>
                            {item.name}
                        </NavLink>
                    </li>))
                }
            </ul>
            )
            }

        </div>
    )
}

export default Menu;