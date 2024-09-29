import React from 'react';
import './styles.css';
import useApiData from '../../hooks/useApiData';

function LoadMore() {
  const [index, setIndex] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const limit = 8;
  const maxLimit = 104;
  const loadRef = React.useRef()

  const { data, isLoading, error } = useApiData(
    `https://dummyjson.com/products?limit=${limit}&skip=${index}`
  );

  React.useEffect(() => {
    if (data?.products) {
      setProducts(prev => {
        return [...products, ...data.products]
      });
    }
  }, [data]);

  const scrollToBottom = () => {
    loadRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
        scrollToBottom()
    }, [products]);

  function loadMore() {
    setIndex(index + limit < maxLimit ? index + limit : maxLimit);
    scrollToBottom()
  }

  if (isLoading && index === 0) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="loader-container">
     
      {products && products.length > 0 && (
        <div className="loader-products">
          {products.map((product, i) => (
            <div  key={i} className='loader-product'>
              <img src={product.thumbnail} alt="" />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && index !== maxLimit && products && products.length > 0&& <button onClick={loadMore}>Load More</button>}
      {index === maxLimit && <p>No more items</p>}
      <div ref={loadRef}></div>
    </div>
  );
}

export default LoadMore;
