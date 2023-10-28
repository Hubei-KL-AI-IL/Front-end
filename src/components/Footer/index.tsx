import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.less';
import { Logo } from '@/assets';
import { menus } from '@/utils/helpers';

type FooterProps = object;

const Footer: React.FC<FooterProps> = () => {
  const renderMenuItems = () => {
    return menus.map((menu) => (
      <Link to={menu.uri} key={menu.id}>
        <li>{menu.name}</li>
      </Link>
    ));
  };

  return (
    <footer>
      <Link to='/index.html'>
        <img className='logo' src={Logo} alt='Logo' />
      </Link>
      <nav>
        <ul>{renderMenuItems()}</ul>
      </nav>
      <div className='lab_info'>
        <div className='lab_info_container right_p'>
          <p>湖北省武汉市洪山区珞喻路 152 号</p>
          <p>027-67868046 (咨询)</p>
          <p>027-67862810 (信访)</p>
        </div>
        <div className='lab_info_container lab_info_container2'>
          <div className='info_button'>
            {[1, 2, 3].map((num) => (
              <Link to='#' key={num}>
                <motion.img
                  whileTap={{ scale: 0.9 }}
                  src={`https://www.ccnu.edu.cn/newskin/images/mt0${num}.png`}
                />
              </Link>
            ))}
          </div>
          <div className='friend_link'>
            <p>
              <Link to='#'>华中师范大学</Link>
            </p>
            <p>
              <Link to='#'>华中师范大学研究生院</Link>
            </p>
            <p>
              <Link to='#'>华中师范大学计算机学院</Link>
            </p>
          </div>
          <p className='copyright'>
            Copyright © 2023 华中师范大学人工智能与智慧学习湖北省重点实验室
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
