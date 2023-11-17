import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillCaretLeft } from 'react-icons/ai';

import './style.less';
import { Logo } from '@/assets';
import { menus, menuChildren } from '@/utils/helpers';
import { slideUpOut } from '@/animations';

type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <TopBanner />
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

const TopBanner = () => {
  return (
    <section className='top_banner'>
      <Link to='/index.html'>
        <img className='logo' src={Logo} alt='Logo' />
      </Link>
      <Link to='/index.html'>
        <p className='subname'>人工智能与智慧学习湖北省重点实验室</p>
      </Link>
      <img
        className='ccnu_gate'
        src='http://cs.ccnu.edu.cn/images/header_top.png'
        alt='ccnu_gate'
      />
    </section>
  );
};

const Navigation = () => {
  const [menuStates, setMenuStates] = useState<{ [key: number]: boolean }>({});

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

  const renderSubMenu = (menuIndex: number) => {
    const filteredChildren = menuChildren.filter(
      (child) => child.index === menuIndex,
    );

    return filteredChildren.map((child) => (
      <Link key={child.index} to={child.uri}>
        <motion.div whileTap={{ scale: 1.2 }} className='dropdown_list_content'>
          <p className='dropdown_list_name'>{child.name}</p>
          <AiFillCaretLeft className='AiFillCaretLeft' />
        </motion.div>
      </Link>
    ));
  };

  const renderMenu = () => {
    return menus.map((menu) => (
      <li key={menu.id}>
        <Link to={menu.uri}>
          <motion.div
            onMouseEnter={() => showMenuChildren(menu.index)}
            onMouseLeave={() => hideMenuChildren(menu.index)}
            whileTap={{ scale: 1.2 }}
            className={`navbar_choice ${
              menuStates[menu.index] ? 'highlight' : ''
            }`}>
            <p className='navbar_choice_name'>{menu.name}</p>
          </motion.div>
        </Link>
        <AnimatePresence>
          {menuStates[menu.index] && (
            <motion.div
              {...slideUpOut}
              className='dropdown_list'
              onMouseEnter={() => handleSubMenuHover(menu.index, true)}
              onMouseLeave={() => handleSubMenuHover(menu.index, false)}>
              {renderSubMenu(menu.index)}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    ));
  };

  return <>{renderMenu()}</>;
};

export default Header;
