// Components
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
// Data
import products from '../products';

const ProductList = () => {
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleDelete = (id) => {
    setFilteredList(filteredList.filter((product) => product.id !== id));
  };

  const productList = filteredList
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        handleDelete={handleDelete}
      />
    ));

  useEffect(() => {
    setFilteredList(products);
  }, []);

  return (
    <>
      <SearchBar setQuery={setQuery} query={query} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
