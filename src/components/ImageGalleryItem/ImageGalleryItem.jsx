import s from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImageURL }) => {
  return (
    <li
      className={s.imageGalleryItem}
      onClick={() => onToggleModal(largeImageURL)}
    >
      <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
