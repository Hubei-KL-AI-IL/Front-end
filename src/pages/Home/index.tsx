/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Carousel, Footer } from '@/components';
import {
  homeIcon_1,
  homeIcon_2,
  homeIcon_3,
  homeIcon_4,
  homeIcon_5,
  homeIcon_6,
  homeIcon_7,
  homeIcon_8,
  homeIcon_9,
  news_list,
} from '@/assets';
import './style.less';

type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <div className='home_main_container'>
          <div className='main_box'>
            <div className='main_side left_box'>
              <div className='table_box'>
                <div className='box_header'>
                  <ul className='header_info'>
                    <li className='header_title'>
                      <Link
                        to='/info?menu=6&menuchild=0&a=list'
                        className='link_style'>
                        <img src={homeIcon_1} alt='' />
                        <span>新闻中心</span>
                      </Link>
                    </li>
                    <li className='header_title'>
                      <Link
                        to='/info?menu=6&menuchild=1&a=list'
                        className='link_style'>
                        <img src={homeIcon_2} alt='' />
                        <span>通知公告</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    className='header_more'
                    to='/info?menu=6&menuchild=1&a=list'>
                    更多+
                  </Link>
                </div>
                <ul className='box_content'>
                  <li className='box_news'>
                    <span className='box_news_wrap'>
                      <img src={news_list} alt='' />
                      <Link
                        to='/info?menu=6&menuchild=1&a=list'
                        className='news_title'>
                        这是一条例子
                      </Link>
                    </span>
                    <span className='news_time'>2023-10-2</span>
                  </li>
                </ul>
              </div>
              <div className='table_box'>
                <div className='sec_box_header'>
                  <ul className='sec_header_info'>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=5&menuchild=0&a=list'
                        className='sec_link_style'>
                        <img src={homeIcon_3} alt='' />
                        <span>人才培养</span>
                      </Link>
                    </li>
                    <span className='sec_division'>|</span>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=5&menuchild=1&a=list'
                        className='sec_link_style'>
                        <img src={homeIcon_4} alt='' />
                        <span>人才引进</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    className='sec_header_more'
                    to='/info?menu=5&menuchild=1&a=list'>
                    更多+
                  </Link>
                </div>
                <ul className='sec_box_content'></ul>
              </div>
            </div>
            <div className='main_side right_box'>
              <div className='table_box'>
                <div className='sec_box_header'>
                  <ul className='sec_header_info'>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=4&menuchild=0&a=list'
                        className='sec_link_style'>
                        <img src={homeIcon_5} alt='' />
                        <span>优秀论文</span>
                      </Link>
                    </li>
                    <span className='sec_division'>|</span>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=4&menuchild=1&a=list'
                        className='sec_link_style'>
                        <img src={homeIcon_6} alt='' />
                        <span>知识产权</span>
                      </Link>
                    </li>
                    <span className='sec_division'>|</span>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=4&menuchild=2&a=list'
                        className='sec_link_style'>
                        <img src={homeIcon_7} alt='' />
                        <span>成果奖励</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    className='sec_header_more'
                    to='/info?menu=4&menuchild=2&a=list'>
                    更多+
                  </Link>
                </div>
                <ul className='sec_box_content'></ul>
              </div>
              <div className='table_box'>
                <div className='sec_box_header'>
                  <ul className='sec_header_info'>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=7&menuchild=0'
                        className='sec_link_style'>
                        <img src={homeIcon_8} alt='' />
                        <span>学术交流</span>
                      </Link>
                    </li>
                    <span className='sec_division'>|</span>
                    <li className='sec_header_title'>
                      <Link
                        to='/info?menu=7&menuchild=1'
                        className='sec_link_style'>
                        <img src={homeIcon_9} alt='' />
                        <span>对外开放</span>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    className='sec_header_more'
                    to='/info?menu=7&menuchild=1'>
                    更多+
                  </Link>
                </div>
                <ul className='sec_box_content'></ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
