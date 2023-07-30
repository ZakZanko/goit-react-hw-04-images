// import axios from 'axios';

// export async function fetchImg(inputData, page) {
//   const searchParams = new URLSearchParams({
//     key: '37005449-eebbd0a7253ee1e1ac55ede27',
//     q: inputData,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//     page,
//   });
//   const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

//   return images.data;
// }

import axios from 'axios';

const apiKey = '37005449-eebbd0a7253ee1e1ac55ede27';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

const fetchImg = ({ query = '', currentPage = 1 }) => {
  const url = `${baseURL}${query}&page=${currentPage}`;
  return axios.get(url).then(({ data }) => data.hits);
};

export default fetchImg;
