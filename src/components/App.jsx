import { useState, useEffect } from 'react';
// import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImg from './fetch/fetch';
import Searchbar from './Searchbar/Searchbar';
// import Notiflix from 'notiflix';
// import Loader from './Loader/Loader';

// let page = 1;

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleSubmitSearchbar = query => {
    setQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  const fetchImages = () => {
    const options = {
      query,
      currentPage,
    };

    setIsLoading(true);

    fetchImg(options)
      .then(
        images => setImages(prevState => [...prevState, ...images]),
        setCurrentPage(prevState => prevState + 1)
      )
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmitSearchbar} />
      <ImageGallery
        query={query}
        images={images}
        currentPage={currentPage}
        error={error}
        isLoading={isLoading}
        fetchImages={fetchImages}
      />
    </>
  );
};

export default App;
// class App extends Component {
//   state = {
//     inputData: '',
//     items: [],

//     status: 'idle',
//     totalHits: 0,
//   };

//   const handleSubmit = async inputData => {
//     page = 1;
//     if (inputData.trim() === '') {
//       Notiflix.Notify.info('You cannot search by empty field, try again.');
//       return;
//     } else {
//       try {
//         this.setState({ status: 'pending' });
//         const { totalHits, hits } = await fetchImages(inputData, page);
//         if (hits.length < 1) {
//           this.setState({ status: 'idle' });
//           Notiflix.Notify.failure(
//             'Sorry, there are no images matching your search query. Please try again.'
//           );
//         } else {
//           this.setState({
//             items: hits,
//             inputData,
//             totalHits: totalHits,
//             status: 'resolved',
//           });
//         }
//       } catch (error) {
//         this.setState({ status: 'rejected' });
//       }
//     }
//   };
//   const onNextPage = async () => {
//     this.setState({ status: 'pending' });

//     try {
//       const { hits } = await fetchImages(this.state.inputData, (page += 1));
//       this.setState(prevState => ({
//         items: [...prevState.items, ...hits],
//         status: 'resolved',
//       }));
//     } catch (error) {
//       this.setState({ status: 'rejected' });
//     }
//   };
//   render() {
//     const { totalHits, status, items } = this.state;
//     if (status === 'idle') {
//       return (
//         <div className="App">
//           <Searchbar onSubmit={this.handleSubmit} />
//         </div>
//       );
//     }
//     if (status === 'pending') {
//       return (
//         <div className="App">
//           <Searchbar onSubmit={this.handleSubmit} />
//           <ImageGallery page={page} items={this.state.items} />
//           <Loader />
//           {totalHits > 12 && <Button onClick={this.onNextPage} />}
//         </div>
//       );
//     }
//     if (status === 'rejected') {
//       return (
//         <div className="App">
//           <Searchbar onSubmit={this.handleSubmit} />
//           <p>Something wrong, try later</p>
//         </div>
//       );
//     }
//     if (status === 'resolved') {
//       return (
//         <div className="App">
//           <Searchbar onSubmit={this.handleSubmit} />
//           <ImageGallery page={page} items={this.state.items} />
//           {totalHits > 12 && totalHits > items.length && (
//             <Button onClick={this.onNextPage} />
//           )}
//         </div>
//       );
//     }
//   }
// }
// export default App;
