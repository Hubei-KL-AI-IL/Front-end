import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDoc } from '../../api/fetch';

import { Footer, Header } from '@/components';
import { Icon1 } from '@/assets';
import { menus, menuChildren } from '@/utils/helpers';

import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// import example from '../../assets/example.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import './style.less';
// removed unused imports

type InfoProps = object;

// removed unused demo list

type doc = {
  block: string;
  content: string;
  create_at: number;
  group: string;
  id: number;
  title: string;
};

const Info: React.FC<InfoProps> = () => {
  const [search] = useSearchParams();
  const menu = search.get('menu');
  const menuchild = search.get('menuchild');
  const a = search.get('a');
  const i = Number(menu);
  const j = Number(menuchild);
  const id = search.get('id');

  const [docs, setDocs] = useState<doc[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  const list = useMemo(() => {
    return menuChildren.filter((child) => {
      return i === child.index;
    });
  }, [i]);

  const title = useMemo(() => {
    return menus.filter((menu) => {
      return i === menu.index;
    });
  }, [i]);

  // removed unused pdf states and handlers
  const [docContent, setdocContent] = useState<string | null>(null);

  const showChild = menuchild != 'null' && menuchild != null;

  useEffect(() => {
    // 防止在没有必要数据时发送请求
    if (title.length === 0 || loading) return;

    setLoading(true);

    if (menuchild != null && menuchild != 'null' && list[j]) {
      getDoc(`visitor/document?block=${title[0]?.name}&group=${list[j]?.name}`)
        .then((result) => {
          console.log(result);
          if (result.code === 1000) {
            setDocs(result.data.Docs);
            setdocContent(result.data.Docs[0]?.content);
          } else {
            setDocs(null);
            setdocContent(null);
          }
        })
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    } else if (id != null && id != 'null') {
      getDoc(`visitor/document/detail?id=${id}`)
        .then((result) => {
          setdocContent(result.data.Docs?.content);
        })
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    } else if (title[0]?.name) {
      getDoc(`visitor/document?block=${title[0].name}&group=0`)
        .then((result) => {
          console.log(result);
          if (result.code === 1000) {
            setDocs(result.data.Docs);
            setdocContent(
              result.data?.Docs && result.data.Docs.length > 0
                ? result.data.Docs[0].content
                : null,
            );
          } else {
            setDocs(null);
            setdocContent(null);
          }
        })
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [menu, menuchild, id, j]);

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
        <div className='topdiv'>
          <>
            <div className='topbar'>
              <div className='h'>
                <img src={Icon1} alt='' />
                <h4>{title[0]?.name}</h4>
              </div>
              <p className='station'>
                <a href='/home'>首页</a>
                &nbsp;&lt;&nbsp;
                <a href={title[0]?.uri}>{title[0]?.name}</a>
                <span hidden={!showChild}>&nbsp;&lt;&nbsp;</span>
                <a href={showChild ? list[j]?.uri : ''}>
                  {showChild ? list[j]?.name : ''}
                </a>
              </p>
            </div>
          </>
        </div>
        {title[0]?.haveChildren === true && (
          <div className='aside'>
            <ul className='menu'>
              {list.map((each, index) => {
                return (
                  <a href={each.uri} key={each.id}>
                    <li
                      className={
                        String(index) === menuchild ? 'activeList' : ''
                      }>
                      {each.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        )}
        <div
          className={`content ${
            title[0]?.haveChildren === true ? 'withAside' : 'noAside'
          }`}>
          {title[0]?.haveChildren !== true && (
            <div className='sectionHeader'>
              <img src={Icon1} alt='' />
              <h4>{title[0]?.name}</h4>
            </div>
          )}
          {a === 'list' ? listRender() : docRender()}

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
