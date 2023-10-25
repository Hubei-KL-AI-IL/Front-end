import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./style.less";
import Logo from "@/assets/logo.png";
import { menus, menuChildren } from "@/utils/helpers";
import { slideUpOut } from "@/animations";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <section className="top_banner">
        <motion.div whileTap={{ scale: 0.9 }} className="menu_button">
          &#9776;
        </motion.div>
        <img className="logo" src={Logo} alt="Logo" />
        <p className="subname">人工智能与智慧学习湖北省重点实验室</p>
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

  const toggleMenuChildren = (menuIndex: number) => {
    setMenuStates((prevMenuStates) => {
      const updatedStates = { ...prevMenuStates };
      Object.keys(updatedStates).forEach((key) => {
        updatedStates[key] = false;
      });
      updatedStates[String(menuIndex)] = !prevMenuStates[String(menuIndex)];
      return updatedStates;
    });
  };

  return (
    <>
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link to={menu.uri}>
            <motion.div
              onClick={() => {
                if (menu.haveChildren) {
                  toggleMenuChildren(menu.index);
                }
              }}
              whileTap={{ scale: 1.2 }}
              className="navbar_choice"
            >
              <p className="navbar_choice_name">{menu.name}</p>
            </motion.div>
          </Link>
          {menuStates[String(menu.index)] && (
            <AnimatePresence>
              <motion.div {...slideUpOut} className="dropdown_list">
                {menuChildren.map((child) => {
                  if (child.index === menu.index) {
                    return (
                      <Link key={child.index} to={child.uri}>
                        <motion.div
                          whileTap={{ scale: 1.2 }}
                          className="dropdown_list_content"
                        >
                          <p className="dropdown_list_name">{child.name}</p>
                        </motion.div>
                      </Link>
                    );
                  }
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </li>
      ))}
    </>
  );
};
