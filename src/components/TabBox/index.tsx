import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDocList } from '@/interface/fetch';
import { formatDate } from '@/utils/formatDate';
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
  xk_list,
} from '@/assets';
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
  //tab选项栏
  const [activeTabOne, setActiveTabOne] = useState('新闻中心');
  const [activeTabTwo, setActiveTabTwo] = useState('人才培养');
  const [activeTabThree, setActiveTabThree] = useState('优秀论文');
  const [activeTabFour, setActiveTabFour] = useState('学术交流');

  //展示的内容区域
  const [displayArrOne, setDisplayArrOne] = useState([]);
  const [displayArrTwo, setDisplayArrTwo] = useState([]);
  const [displayArrThree, setDisplayArrThree] = useState([]);
  const [displayArrFour, setDisplayArrFour] = useState([]);

  const handleTabHover = (
    block: string,
    tab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>,
    setDisplayArr: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    setActiveTab(tab);
    getDocList({ block, group: tab })
      .then((res) => {
        // 如果 res.data.Docs 不为空，只取后八个元素（最新）
        const displayArrTemp =
          res.data.Docs && res.data.Docs.slice(-8).reverse();
        setDisplayArr(displayArrTemp);
      })
      .catch((error) => console.log(error));
  };
  const handleTabHoverOne = (tab: string) =>
    handleTabHover('新闻动态', tab, setActiveTabOne, setDisplayArrOne);
  const handleTabHoverTwo = (tab: string) =>
    handleTabHover('人才培养', tab, setActiveTabTwo, setDisplayArrTwo);
  const handleTabHoverThree = (tab: string) =>
    handleTabHover('科学研究', tab, setActiveTabThree, setDisplayArrThree);
  const handleTabHoverFour = (tab: string) =>
    handleTabHover('合作交流', tab, setActiveTabFour, setDisplayArrFour);

  useEffect(() => {
    const fetchData = async (
      block: string,
      group: string,
      setDisplayArr: React.Dispatch<React.SetStateAction<any>>,
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

    const sections = [
      { block: '新闻动态', group: '新闻中心', setDisplayArr: setDisplayArrOne },
      { block: '人才培养', group: '人才培养', setDisplayArr: setDisplayArrTwo },
      {
        block: '科学研究',
        group: '优秀论文',
        setDisplayArr: setDisplayArrThree,
      },
      {
        block: '合作交流',
        group: '学术交流',
        setDisplayArr: setDisplayArrFour,
      },
    ];

    sections.forEach(({ block, group, setDisplayArr }) => {
      fetchData(block, group, setDisplayArr);
    });
  }, []);

  const listOneRender = () => {
    return (
      <ul className='box_content'>
        {displayArrOne &&
          displayArrOne.map((item: ListInfo, index) => {
            return (
              <li className='box_news' key={item.id}>
                <span className='box_news_wrap'>
                  <img src={news_list} alt='' />
                  <Link
                    to='/info?menu=6&menuchild=1&a=list'
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

  const listTwoRender = () => {
    return (
      <ul className='sec_box_content'>
        {displayArrTwo &&
          displayArrTwo.map((item: ListInfo, index) => {
            return (
              <li className='sec_box_news' key={item.id}>
                <span className='sec_box_news_wrap'>
                  <img src={xk_list} alt='' />
                  <Link
                    to='/info?menu=6&menuchild=1&a=list'
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

  const listThreeRender = () => {
    return (
      <ul className='sec_box_content'>
        {displayArrThree &&
          displayArrThree.map((item: ListInfo, index) => {
            return (
              <li className='sec_box_news' key={item.id}>
                <span className='sec_box_news_wrap'>
                  <img src={xk_list} alt='' />
                  <Link
                    to='/info?menu=6&menuchild=1&a=list'
                    className='news_title'>
                    {item.title}
                  </Link>
                </span>
              </li>
            );
          })}
      </ul>
    );
  };

  const listFourRender = () => {
    return (
      <ul className='sec_box_content'>
        {displayArrFour &&
          displayArrFour.map((item: ListInfo, index) => {
            return (
              <li className='sec_box_news' key={item.id}>
                <span className='sec_box_news_wrap'>
                  <img src={xk_list} alt='' />
                  <Link
                    to='/info?menu=6&menuchild=1&a=list'
                    className='news_title'>
                    {item.title}
                  </Link>
                </span>
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
          <div className='table_box'>
            <div className='box_header'>
              <ul className='header_info'>
                <li
                  className={`header_title ${
                    activeTabOne === '新闻中心' ? 'title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=6&menuchild=0&a=list'
                    className='link_style'
                    onMouseEnter={() => handleTabHoverOne('新闻中心')}>
                    <img src={homeIcon_1} alt='' />
                    <span>新闻中心</span>
                  </Link>
                </li>
                <li
                  className={`header_title ${
                    activeTabOne === '通知公告' ? 'title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=6&menuchild=1&a=list'
                    className='link_style'
                    onMouseEnter={() => handleTabHoverOne('通知公告')}>
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
            {listOneRender()}
          </div>
          <div className='table_box'>
            <div className='sec_box_header'>
              <ul className='sec_header_info'>
                <li
                  className={`sec_header_title ${
                    activeTabTwo === '人才培养' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=5&menuchild=0&a=list'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverTwo('人才培养');
                    }}>
                    <img src={homeIcon_3} alt='' />
                    <span>人才培养</span>
                  </Link>
                </li>
                <span className='sec_division'>|</span>
                <li
                  className={`sec_header_title ${
                    activeTabTwo === '人才引进' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=5&menuchild=1&a=list'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverTwo('人才引进');
                    }}>
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
            {listTwoRender()}
          </div>
        </div>
        <div className='main_side right_box'>
          <div className='table_box'>
            <div className='sec_box_header'>
              <ul className='sec_header_info'>
                <li
                  className={`sec_header_title ${
                    activeTabThree === '优秀论文' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=4&menuchild=0&a=list'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverThree('优秀论文');
                    }}>
                    <img src={homeIcon_5} alt='' />
                    <span>优秀论文</span>
                  </Link>
                </li>
                <span className='sec_division'>|</span>
                <li
                  className={`sec_header_title ${
                    activeTabThree === '知识产权' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=4&menuchild=1&a=list'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverThree('知识产权');
                    }}>
                    <img src={homeIcon_6} alt='' />
                    <span>知识产权</span>
                  </Link>
                </li>
                <span className='sec_division'>|</span>
                <li
                  className={`sec_header_title ${
                    activeTabThree === '成果奖励' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=4&menuchild=2&a=list'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverThree('成果奖励');
                    }}>
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
            {listThreeRender()}
          </div>
          <div className='table_box'>
            <div className='sec_box_header'>
              <ul className='sec_header_info'>
                <li
                  className={`sec_header_title ${
                    activeTabFour === '学术交流' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=7&menuchild=0'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverFour('学术交流');
                    }}>
                    <img src={homeIcon_8} alt='' />
                    <span>学术交流</span>
                  </Link>
                </li>
                <span className='sec_division'>|</span>
                <li
                  className={`sec_header_title ${
                    activeTabFour === '对外开放' ? 'sec_title_active' : ''
                  }`}>
                  <Link
                    to='/info?menu=7&menuchild=1'
                    className='sec_link_style'
                    onMouseEnter={() => {
                      handleTabHoverFour('对外开放');
                    }}>
                    <img src={homeIcon_9} alt='' />
                    <span>对外开放</span>
                  </Link>
                </li>
              </ul>
              <Link className='sec_header_more' to='/info?menu=7&menuchild=1'>
                更多+
              </Link>
            </div>
            {listFourRender()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBox;
