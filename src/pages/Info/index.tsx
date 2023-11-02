import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Footer, Header } from '@/components';
import { Icon } from '@/assets';
import { menus, menuChildren } from '@/utils/helpers';
import './style.less';

type InfoProps = object;

type List ={
  id: string;
  time: string;
  content: string;
}

const lists: List[] = [{
  id:crypto.randomUUID(),
  time:'2023-11-2',
  content:'这里是一条示例'
}]


const Info: React.FC<InfoProps> = () => {


  
  const [search, setSearch] = useSearchParams();
  let menu = search.get('menu');
  let menuchild = search.get('menuchild');
  let a = search.get('a');
  let i = Number(menu);
  let j = Number(menuchild);

  const listRender = () =>{
    if(a=='list')
    return (
  <ul className='list'>
    {
      lists.map((list,index)=>{
        return <li key={index}>
          <a href={`/info?menu=${menu}&menuchild=${menuchild}&a=single&id=${list.id}`} target='_blank'>{list.content}</a>
          <span>{list.time}</span>
        </li>
      })
    }
  </ul>
  )
}

  const list = menuChildren.filter((child) => {
    return i == child.index;
  });

  const title = menus.filter((menu) => {
    return i == menu.index;
  });

  return (
    <>
      <Header />
      <main>
        <div className='topdiv'></div>
        <div className='aside'>
          <div className='h'>
            <img src={Icon} alt='' />
            <h4>{title[0].name}</h4>
          </div>
          <ul className='menu'>
            {title[0].haveChildren == true
              ? list.map((each, index) => {
                  return (
                    <a href={each.uri} key={index}>
                      <li
                        key={each.id}
                        className={index == j ? 'activeList' : ''}>
                        {each.name}
                      </li>
                    </a>
                  );
                })
              : ' '}
          </ul>
        </div>
        <div className='content'>
          <p className='station'>
            <a href='/home'>首页</a>
            &nbsp;&lt;&nbsp;
            <a href={title[0].uri}>{title[0].name}</a>
            <span hidden={menuchild!=null ? false : true}>
              &nbsp;&lt;&nbsp;
            </span>
            <a href={title[0].haveChildren ? list[j].uri : ''}>
              {menuchild!=null ? list[j].name : ''}
            </a>
          </p>
          {listRender()}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Info;
