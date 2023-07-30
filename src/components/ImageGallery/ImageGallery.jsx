import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import s from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({
  query,
  images,
  currentPage,
  error,
  fetchImages,
  isLoading,
}) {
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    setLargeImageURL(null);
  };

  const handleModalImage = url => {
    toggleModal();
    setLargeImageURL(url);
  };

  const showButton = images.length > 0;

  return (
    <>
      {error && <h2>{error}</h2>}
      <ul className={s.imageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onToggleModal={handleModalImage}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>

      {showButton && <Button onClick={fetchImages} isLoading={isLoading} />}

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
}
