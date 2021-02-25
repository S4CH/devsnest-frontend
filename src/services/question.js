import axios from '../config/axios.config';

export const getQuestions = async () => {
  const url = undefined;
  if (url) {
    const response = await axios.get(url);
    return response.data;
  } else return (await fakeQuestionData()).data;
};

const fakeQuestionData = () => {
  const rejectAPI = Math.random() < 0.1;
  return new Promise((res, rej) => {
    setTimeout(() => {
      rejectAPI
        ? rej({
            error: 'some error occured',
          })
        : res({
            data: [
              {
                id: '3',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/3',
                },
                attributes: {
                  unique_id: 'Q3',
                  parent_id: 'warmup',
                  name: 'Check If A Number Is A Palindrome',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/palindrome-number/',
                  priority: 2,
                  score: 'attempted',
                },
              },
              {
                id: '4',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/4',
                },
                attributes: {
                  unique_id: 'Q4',
                  parent_id: 'warmup',
                  name: 'Reverse Bits',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/reverse-bits/',
                  priority: 2,
                  score: 'unsolved',
                },
              },
              {
                id: '5',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/5',
                },
                attributes: {
                  unique_id: 'Q5',
                  parent_id: 'warmup',
                  name: 'Power of Two',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/power-of-two/',
                  priority: 2,
                  score: 'unsolved',
                },
              },
              {
                id: '6',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/6',
                },
                attributes: {
                  unique_id: 'Q6',
                  parent_id: 'warmup',
                  name: 'Add Strings',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/add-strings/',
                  priority: 2,
                  score: 'attempted',
                },
              },
              {
                id: '7',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/7',
                },
                attributes: {
                  unique_id: 'Q7',
                  parent_id: 'warmup',
                  name: 'Changing Base',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/convert-to-base-2/',
                  priority: 2,
                  score: 'solved',
                },
              },
              {
                id: '8',
                type: 'contents',
                links: {
                  self: 'http://13.233.145.241:8000/api/v1/contents/8',
                },
                attributes: {
                  unique_id: 'Q8',
                  parent_id: 'warmup',
                  name: 'Power of Four',
                  data_type: 'question',
                  link: 'https://leetcode.com/problems/power-of-four/',
                  priority: 2,
                  score: 'solved',
                },
              },
            ],
          });
    }, 1000);
  });
};