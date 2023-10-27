import React from 'react';

import { Header } from '@/components';

import { useSearchParams } from 'react-router-dom';

import './style.less'

import Icon from '@/assets/icon1.png'
import {menus,menuChildren } from '@/utils/helpers';

type InfoProps = object;




const Info: React.FC<InfoProps> = (props) => {

    const [search,setSearch] = useSearchParams();
    let  menu = search.get('menu');
    let  menuchild = search.get('menuchild');
    let i = Number(menu);
    let a = Number(menuchild);

    const list = menuChildren.filter((child)=>{
        return i == child.index;
    })

    const title = menus.filter((menu)=>{
        return i == menu.index;
    })

  return (
    <>
      <Header />
      <main>
        <div className='topdiv'></div>
        <div className='aside'>
            <div className='h'>
                <img src={Icon} alt="" />
                <h4>{title[0].name}</h4>
            </div>
            <ul className='menu'>
                {   title[0].haveChildren==true?
                    list.map((each,index)=>{
                        return <a href={each.uri}><li key={each.id} className={index==a?'active':''}>
                        {each.name}
                    </li>
                            </a>
                    }):' '
                }
            </ul>
        </div>
        <div className='content'>
            <p className='station'>
                <a href='/home'>首页</a>
                &nbsp;&lt;&nbsp;
                <a href={title[0].uri}>{title[0].name}</a>
                <span hidden={title[0].haveChildren?false:true}>&nbsp;&lt;&nbsp;</span>
                <a href={title[0].haveChildren?list[a].uri:''}>{title[0].haveChildren?list[a].name:''}</a>
            </p>
        </div>
      </main>
    </>
  );
};
export default Info;