import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillCaretLeft } from 'react-icons/ai';

import './style.less';
import Logo from '@/assets/logo.png';
import { menus, menuChildren } from '@/utils/helpers';
import { slideUpOut } from '@/animations';

type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <section className='top_banner'>
        <motion.div whileTap={{ scale: 0.9 }} className='menu_button'>
          &#9776;
        </motion.div>
        <img className='logo' src={Logo} alt='Logo' />
        <p className='subname'>人工智能与智慧学习湖北省重点实验室</p>
      </section>
      <section>
        <nav>
          <ul>
            <Navigation />
          </ul>
        </nav>
      </section>
    </header>
  );
};
export default Header;

const Navigation = () => {
  const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({});

  const showMenuChildren = (menuIndex: number) => {
    setMenuStates((prevMenuStates) => ({
      ...prevMenuStates,
      [menuIndex]: true,
    }));
  };

  const hideMenuChildren = (menuIndex: number) => {
    setMenuStates((prevMenuStates) => ({
      ...prevMenuStates,
      [menuIndex]: false,
    }));
  };

  const handleSubMenuHover = (menuIndex: number, show: boolean) => {
    setMenuStates((prevMenuStates) => ({
      ...prevMenuStates,
      [menuIndex]: show,
    }));
  };

  return (
    <>
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link to={menu.uri}>
            <motion.div
              onMouseEnter={() => showMenuChildren(menu.index)}
              onMouseLeave={() => hideMenuChildren(menu.index)}
              whileTap={{ scale: 1.2 }}
              className='navbar_choice'
            >
              <p className='navbar_choice_name'>{menu.name}</p>
            </motion.div>
          </Link>
          <AnimatePresence>
            {menuStates[String(menu.index)] && (
              <motion.div
                {...slideUpOut}
                className='dropdown_list'
                onMouseEnter={() => handleSubMenuHover(menu.index, true)}
                onMouseLeave={() => handleSubMenuHover(menu.index, false)}
              >
                {menuChildren
                  .filter((child) => child.index === menu.index)
                  .map((child) => (
                    <Link key={child.index} to={child.uri}>
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        className='dropdown_list_content'
                      >
                        <p className='dropdown_list_name'>{child.name}</p>
                        <AiFillCaretLeft className='AiFillCaretLeft' />
                      </motion.div>
                    </Link>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </>
  );
};
