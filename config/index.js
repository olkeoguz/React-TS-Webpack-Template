console.log(`[CONFIG] process.env.NODE_ENV`, process.env.NODE_ENV);

const CONFIG_DEV = {
  URL: {
    base: 'https://jsonplaceholder.typicode.com',
    posts: '/posts',
  },
};

const CONFIG_PROD = {
  URL: {
    base: 'https://reqres.in/api',
    posts: '/users',
  },
};

export default process.env.NODE_ENV === 'production' ? CONFIG_PROD : CONFIG_DEV;
