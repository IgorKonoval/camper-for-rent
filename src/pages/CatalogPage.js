import { getAllCampers } from 'components/Api';
import { ButtonLoadMore } from 'components/Button/Button.styled';
import { Loader } from 'components/Loader';
import { fetchCampers } from 'components/redux/operatoins';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from 'components/redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CatalogPage = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    (async () => {
      const result = await getAllCampers({ page: 1, limit: '' });
      setTotalPage(Math.ceil(result.length / limit));
    })();
  }, [dispatch, limit]);

  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <>
      {/* <Filter /> */}
      <div>
        <div>{error && <div>Error: {error}</div>}</div>
        {isLoading && <Loader />}
        {page < totalPage && (
          <ButtonLoadMore onClick={loadMore}>
            {isLoading ? <Loader /> : 'Load more'}
          </ButtonLoadMore>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
