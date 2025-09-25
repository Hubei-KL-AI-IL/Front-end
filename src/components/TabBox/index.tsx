import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDocList } from '@/interface/fetch';
import { formatDate } from '@/utils/formatDate';
import { homeIcon_1 } from '@/assets';
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
  // 展示的内容区域（合并后的工作动态）
  const [workData, setWorkData] = useState<ListInfo[]>([]);

  useEffect(() => {
    const fetchGroup = async (block: string, group: string) => {
      try {
        const res = await getDocList({ block, group });
        return Array.isArray(res?.data?.Docs) ? res.data.Docs : [];
      } catch (error) {
        console.log(error);
        return [] as ListInfo[];
      }
    };

    // 获取工作动态
    fetchGroup('工作动态', '0').then((workData) => {
      const sortedData = workData
        .filter(Boolean)
        .sort(
          (a: ListInfo, b: ListInfo) => (b.create_at || 0) - (a.create_at || 0),
        )
        .slice(0, 8);
      setWorkData(sortedData);
    });
  }, []);

  const workListRender = () => {
    return (
      <ul className='box_content'>
        {workData &&
          workData.map((item: ListInfo) => {
            return (
              <li className='box_news' key={item.id}>
                <span className='box_news_wrap'>
                  <Link
                    to={`/info?menu=7&a=single&id=${item.id}`}
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
          {/* 工作动态（合并新闻中心与通知公告） */}
          <div className='table_box'>
            <div className='box_header'>
              <ul className='header_info'>
                <li className='header_title title_active'>
                  <Link to='/info?menu=7' className='link_style'>
                    <img src={homeIcon_1} alt='' />
                    <span>工作动态</span>
                  </Link>
                </li>
              </ul>
              <Link className='header_more' to='/info?menu7'>
                更多+
              </Link>
            </div>
            {workListRender()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBox;
