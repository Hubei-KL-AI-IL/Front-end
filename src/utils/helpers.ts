export type Menu = {
  id: string;
  index: number;
  haveChildren: boolean;
  name: string;
  uri: string;
};

export type MenuChildren = {
  id: string;
  index: number;
  name: string;
  uri: string;
};

export const menus: Menu[] = [
  {
    id: crypto.randomUUID(),
    index: 1,
    haveChildren: false,
    name: '首页',
    uri: '/index.html',
  },
  {
    id: crypto.randomUUID(),
    index: 2,
    haveChildren: true,
    name: '实验室概况',
    uri: '/info?menu=2&menuchild=0',
  },
  {
    id: crypto.randomUUID(),
    index: 3,
    haveChildren: true,
    name: '科研队伍',
    uri: '/info?menu=3&menuchild=0',
  },
  {
    id: crypto.randomUUID(),
    index: 4,
    haveChildren: true,
    name: '科学研究',
    uri: '/info?menu=4&a=list',
  },
  {
    id: crypto.randomUUID(),
    index: 5,
    haveChildren: true,
    name: '人才培养',
    uri: '/info?menu=5&a=list',
  },
  {
    id: crypto.randomUUID(),
    index: 6,
    haveChildren: true,
    name: '新闻动态',
    uri: '/info?menu=6&a=list',
  },
  {
    id: crypto.randomUUID(),
    index: 7,
    haveChildren: true,
    name: '合作交流',
    uri: '/info?menu=7&a=list',
  },
  {
    id: crypto.randomUUID(),
    index: 8,
    haveChildren: false,
    name: '联系我们',
    uri: '/info?menu=8',
  },
];

export const menuChildren: MenuChildren[] = [
  { id: crypto.randomUUID(), index: 2, name: '实验室介绍', uri: '/info?menu=2&menuchild=0' },
  { id: crypto.randomUUID(), index: 2, name: '现任领导', uri: '/info?menu=2&menuchild=1' },
  { id: crypto.randomUUID(), index: 2, name: '研究方向', uri: '/info?menu=2&menuchild=2' },
  { id: crypto.randomUUID(), index: 2, name: '组织架构', uri: '/info?menu=2&menuchild=3' },

  { id: crypto.randomUUID(), index: 3, name: '教授', uri: '/info?menu=3&menuchild=0' },
  { id: crypto.randomUUID(), index: 3, name: '副教授', uri: '/info?menu=3&menuchild=1' },
  { id: crypto.randomUUID(), index: 3, name: '讲师', uri: '/info?menu=3&menuchild=2' },

  { id: crypto.randomUUID(), index: 4, name: '优秀论文', uri: '/info?menu=4&menuchild=0&a=list' },
  { id: crypto.randomUUID(), index: 4, name: '知识产权', uri: '/info?menu=4&menuchild=1&a=list' },
  { id: crypto.randomUUID(), index: 4, name: '成果奖励', uri: '/info?menu=4&menuchild=2&a=list' },

  { id: crypto.randomUUID(), index: 5, name: '人才培养', uri: '/info?menu=5&menuchild=0&a=list' },
  { id: crypto.randomUUID(), index: 5, name: '人才引进', uri: '/info?menu=5&menuchild=1&a=list' },
  { id: crypto.randomUUID(), index: 5, name: '团队建设', uri: '/info?menu=5&menuchild=2&a=list' },

  { id: crypto.randomUUID(), index: 6, name: '新闻中心', uri: '/info?menu=6&menuchild=0&a=list' },
  { id: crypto.randomUUID(), index: 6, name: '通知公告', uri: '/info?menu=6&menuchild=1&a=list' },

  { id: crypto.randomUUID(), index: 7, name: '学术交流', uri: '/info?menu=7&menuchild=0' },
  { id: crypto.randomUUID(), index: 7, name: '对外开放', uri: '/info?menu=7&menuchild=1' },
  { id: crypto.randomUUID(), index: 7, name: '开放基金', uri: '/info?menu=7&menuchild=2' },
];

export const heroDescriptions: string[] = [
  "南湖图书馆",
  "喷水池",
  "华师一百二十周年"
];