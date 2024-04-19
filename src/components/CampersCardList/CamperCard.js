import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampersFavorite } from 'components/redux/selectors';

export const CamperCard = ({
  _id,
  name,
  price,
  rating,
  location,
  description,
  details,
  gallery,
  reviews,
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectCampersFavorite);
  const isFavorite = favorite.find(evt => evt._id === _id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
};
