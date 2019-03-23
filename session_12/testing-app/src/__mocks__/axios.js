'use strict';

let currentId = 1;
module.exports = {
  get: (url) => {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: 'dtodo1paco'
        },
        {
          id: 2,
          name: 'ocap1odotd'
        }
      ]
    });
  },
  post: (url, data) => {
    return Promise.resolve({
      data: {
        task: {
          name: data.task,
          id: currentId++
        }
      }
    });
  }
};