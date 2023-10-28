import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.less';
import { Logo } from '@/assets';
import { menus } from '@/utils/helpers';

type indexProps = object;

const index: React.FC<indexProps> = () => {
  return (
    <footer>
      <Link to='/index.html'>
        <img className='logo' src={Logo} alt='Logo' />
      </Link>
      <nav>
        <ul>
          {menus.map((menu) => (
            <Link to={menu.uri}>
              <li key={menu.id}>{menu.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className='lab_info'>
        <div className='lab_info_container right_p'>
          <p>湖北省武汉市洪山区珞喻路 152 号</p>
          <p>027-67868046 (咨询)</p>
          <p>027-67862810 (信访)</p>
        </div>
        <div className='lab_info_container lab_info_container2'>
          <div className='info_button'>
            <Link to='#'>
              <motion.img
                whileTap={{ scale: 0.9 }}
                src='https://www.ccnu.edu.cn/newskin/images/mt01.png'
              />
            </Link>
            <Link to='#'>
              <motion.img
                whileTap={{ scale: 0.9 }}
                src='https://www.ccnu.edu.cn/newskin/images/mt02.png'
              />
            </Link>
            <Link to='#'>
              <motion.img
                whileTap={{ scale: 0.9 }}
                src='https://www.ccnu.edu.cn/newskin/images/mt03.png'
              />
            </Link>
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
export default index;
