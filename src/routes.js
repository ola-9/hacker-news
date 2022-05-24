const host = 'https://hacker-news.firebaseio.com/';
const prefix = 'v0';

const routes = {
  getNewsIds: () => [host, prefix, 'newstories.json?print=pretty'].join('/'),
  getNewsItem: (id) => [host, prefix, 'item', `${id}.json?print=pretty`].join('/'),
};

export default routes;
