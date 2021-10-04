import { useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    setIsDark(!isDark);
    document
      .getElementsByTagName('html')[0]
      .setAttribute('class', `${!isDark ? `bg-dark` : ''}`);
    document
      .getElementsByTagName('body')[0]
      .setAttribute('class', !isDark ? `bg-dark` : '');
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <button
              className={isDark ? `btn btn-light` : `btn btn-dark`}
              onClick={handleChange}
            >
              {!isDark ? `Dark Theme` : 'light Theme'}
            </button>
          </div>
        </div>
        <hr />
        <div className="home">
          <h1>Cookies and Beyond</h1>
          <h3>Where cookie maniacs gather</h3>
          <img
            alt="cookie shop"
            className="rounded shadow"
            src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          />
        </div>
        <hr />
      </div>

      <ProductList />
    </>
  );
};

export default Home;
