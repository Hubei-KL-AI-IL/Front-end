import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';
import { Icon } from '@/assets';

type FooterProps = object;

const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className='footer-container'>
        {/* 左侧：学校信息 */}
        <div className='school-info'>
          <div className='school-logo-section'>
            <img className='school-logo' src={Icon} alt='School Logo' />
            <div className='school-text'>
              <h3 className='school-name-cn'>华中师范大学 计算机学院</h3>
              <p className='school-name-en'>CENTRAL CHINA NORMAL UNIVERSITY</p>
            </div>
          </div>
          <div className='copyright-section'>
            <p className='copyright-cn'>版权所有 华中师范大学计算机学院</p>
            <p className='copyright-en'>
              Copyright © 1992-2022 Central China Normal University
            </p>
          </div>
        </div>

        {/* 中间：友情链接 */}
        <div className='friendship-links'>
          <h4 className='section-title'>友情链接</h4>
          <div className='links-grid'>
            <div className='links-column'>
              <Link
                to='https://www.ccnu.edu.cn/'
                target='_blank'
                className='link-item'>
                华中师范大学
              </Link>
              <Link
                to='https://frontier.ccnu.edu.cn/'
                target='_blank'
                className='link-item'>
                华中师范大学前沿交叉研究院主页
              </Link>
              <Link
                to='https://cs.ccnu.edu.cn/index.htm'
                target='_blank'
                className='link-item'>
                华中师范大学计算机学院
              </Link>
            </div>
            <div className='links-column'>
              <Link
                to='https://www.hzsdyfz.com.cn/'
                target='_blank'
                className='link-item'>
                华中师范大学附属第一中学
              </Link>
              <Link
                to='https://maths.ccnu.edu.cn/'
                target='_blank'
                className='link-item'>
                华中师范大学数学与统计学学院
              </Link>
              <Link
                to='https://nisc.ccnu.edu.cn/'
                target='_blank'
                className='link-item'>
                华中师范大学信息化办公室
              </Link>
            </div>
          </div>
        </div>

        {/* 右侧：联系我们 */}
        <div className='contact-info'>
          <h4 className='section-title'>联系我们</h4>
          <div className='contact-details'>
            <div className='contact-text'>
              <p className='contact-item'>
                地址: 湖北省武汉市华中师范大学南湖校区综合楼7层
              </p>
              <p className='contact-item'>邮编: 430079</p>
              <p className='contact-item'>电话: 027-67867655</p>
              <p className='contact-item'>邮箱: cs@ccnu.edu.cn</p>
            </div>
            <div className='qr-code'>
              <div className='qr-placeholder'>
                <div className='qr-logo'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className='footer-bottom'>
        <div className='bottom-left'>
          <span className='url-text'>https://cs.ccnu.edu.cn/shfw/zaks.htm</span>
        </div>
        <div className='bottom-right'>
          <button className='back-to-top' onClick={scrollToTop}>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='white'>
              <path d='M12 2l8 8h-6v12h-4V10H4z' />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
