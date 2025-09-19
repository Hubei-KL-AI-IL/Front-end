import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDocList } from '@/interface/fetch';
import { formatDate } from '@/utils/formatDate';
import { homeIcon_1, homeIcon_2, news_list } from '@/assets';
import './style.less';

type TabBoxProps = object;

type ListInfo = {
  block: string;
  content: string;
  create_at: number;
  group: string;
  id: number;
  title: string;
};

const TabBox: React.FC<TabBoxProps> = () => {
  //展示的内容区域
  const [newsData, setNewsData] = useState<ListInfo[]>([]);
  const [noticeData, setNoticeData] = useState<ListInfo[]>([]);

  useEffect(() => {
    const fetchData = async (
      block: string,
      group: string,
      setDisplayArr: React.Dispatch<React.SetStateAction<ListInfo[]>>,
    ) => {
      try {
        const res = await getDocList({ block, group });
        // 如果 res.data.Docs 不为空，只取后八个元素（最新）
        const displayArrTemp =
          res.data.Docs && res.data.Docs.slice(-8).reverse();
        setDisplayArr(displayArrTemp);
      } catch (error) {
        console.log(error);
      }
    };

    // 分别获取新闻中心和通知公告的数据
    fetchData('新闻动态', '新闻中心', setNewsData);
    fetchData('新闻动态', '通知公告', setNoticeData);
  }, []);

  const newsListRender = () => {
    return (
      <ul className='box_content'>
        {newsData &&
          newsData.map((item: ListInfo) => {
            return (
              <li className='box_news' key={item.id}>
                <span className='box_news_wrap'>
                  <img src={news_list} alt='' />
                  <Link
                    to={`/info?menu=6&menuchild=0&a=single&id=${item.id}`}
                    className='news_title'>
                    {item.title}
                  </Link>
                </span>
                <span className='news_time'>{formatDate(item.create_at)}</span>
              </li>
            );
          })}
      </ul>
    );
  };

  const noticeListRender = () => {
    return (
      <ul className='box_content'>
        {noticeData &&
          noticeData.map((item: ListInfo) => {
            return (
              <li className='box_news' key={item.id}>
                <span className='box_news_wrap'>
                  <img src={news_list} alt='' />
                  <Link
                    to={`/info?menu=6&menuchild=1&a=single&id=${item.id}`}
                    className='news_title'>
                    {item.title}
                  </Link>
                </span>
                <span className='news_time'>{formatDate(item.create_at)}</span>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <div className='home_main_container'>
      <div className='main_box'>
        <div className='main_side left_box'>
          {/* 新闻中心框 */}
          <div className='table_box'>
            <div className='box_header'>
              <ul className='header_info'>
                <li className='header_title title_active'>
                  <Link
                    to='/info?menu=6&menuchild=0&a=list'
                    className='link_style'>
                    <img src={homeIcon_1} alt='' />
                    <span>新闻中心</span>
                  </Link>
                </li>
              </ul>
              <Link
                className='header_more'
                to='/info?menu=6&menuchild=0&a=list'>
                更多+
              </Link>
            </div>
            {newsListRender()}
          </div>
        </div>

        <div className='main_side right_box'>
          {/* 通知公告框 */}
          <div className='table_box'>
            <div className='box_header'>
              <ul className='header_info'>
                <li className='header_title title_active'>
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
            {noticeListRender()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBox;
