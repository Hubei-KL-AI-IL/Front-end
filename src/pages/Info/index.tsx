import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDoc } from '../../api/fetch';

import { Footer, Header } from '@/components';
import { Icon } from '@/assets';
import { menus, menuChildren } from '@/utils/helpers';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import example from '../../assets/example.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import './style.less';
import { get } from 'http';
import { type } from 'os';

type InfoProps = object;

type List = {
  id: string;
  time: string;
  content: string;
};

const lists: List[] = [
  {
    id: crypto.randomUUID(),
    time: '2023-11-2',
    content: '这里是一条示例',
  },
];

type doc = {
  block: string;
  content: string;
  create_at: number;
  group: string;
  id: number;
  title: string;
};

const Info: React.FC<InfoProps> = () => {
  const [search, setSearch] = useSearchParams();
  let menu = search.get('menu');
  let menuchild = search.get('menuchild');
  let a = search.get('a');
  let i = Number(menu);
  let j = Number(menuchild);
  let id = search.get('id');

  const [docs, setDocs] = useState<doc[] | null>(null);

  const listRender = () => {
    return (
      <ul className='list'>
        {docs != null && docs.length > 0 ? (
          docs.map((list, index) => {
            return (
              <li key={index}>
                <a
                  href={`/info?menu=${menu}&menuchild=${menuchild}&a=single&id=${list.id}`}
                  target='_blank'>
                  {list.title}
                </a>
              </li>
            );
          })
        ) : (
          <p>No documents available</p>
        )}
      </ul>
    );
  };

  const list = menuChildren.filter((child) => {
    return i == child.index;
  });

  const title = menus.filter((menu) => {
    return i == menu.index;
  });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onLoadSuccess(data: { numPages: number }) {
    setNumPages(numPages);
  }
  const [docId, setdocId] = useState(null);
  const [docContent, setdocContent] = useState<string | null>(null);

  useEffect(() => {
    if (menuchild != null && menuchild != 'null') {
      getDoc(`visitor/document?block=${title[0].name}&group=${list[j].name}`)
        .then((result) => {
          console.log(result);
          if (result.code == 1000) {
            setDocs(result.data.Docs);
            setdocContent(result.data.Docs[0].content);
          } else {
            setDocs(null);
            setdocContent(null);
          }
        })
        .catch((error) => console.log('error', error));
    } else if (id != null && id != 'null') {
      getDoc(`visitor/document/detail?id=${id}`)
        .then((result) => {
          setdocContent(result.data.Docs.content);
        })
        .catch((error) => console.log('error', error));
    } else {
      getDoc(`visitor/document?block=${title[0].name}&group=${encodeURI('%')}`)
        .then((result) => {
          console.log(result);
          if (result.code == 1000) setDocs(result.data.Docs);
          else {
            setDocs(null);
          }
        })
        .catch((error) => console.log('error', error));
    }
  }, [menu, menuchild]);

  const docRender = () => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: docContent ?? '' }}
        className='docPage'></div>
    );
  };

  //const file ={ url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', httpHeaders: { 'X-CustomHeader': 'xxxxxxxxxxxx' }, withCredentials: true }
  //https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/
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
                    <a href={each.uri} key={each.id}>
                      <li
                        className={
                          String(index) == menuchild ? 'activeList' : ''
                        }>
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
            <span
              hidden={menuchild != 'null' && menuchild != null ? false : true}>
              &nbsp;&lt;&nbsp;
            </span>
            <a
              href={
                menuchild != 'null' && menuchild != null ? list[j].uri : ''
              }>
              {menuchild != 'null' && menuchild != null ? list[j].name : ''}
            </a>
          </p>
          {a == 'list' ? listRender() : docRender()}

          {/*file 只实现了本地文件的加载
          如果使用url 会出现跨域问题..
          以下是一个pdf示例

          <Document file={example} onLoadSuccess={onLoadSuccess}>
              <Page className="page_style" pageNumber={pageNumber}/>
            </Document>

          */}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Info;
