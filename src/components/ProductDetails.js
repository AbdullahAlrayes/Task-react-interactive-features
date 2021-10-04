import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === +id);
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-2">
            <Link className="btn btn-outline-primary form-control" to="/">
              Back
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <h1>Product Details </h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-4">
            <img
              src={product.image}
              alt=""
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-8">
            <h3>
              {product.name} | {product.price} KWD
            </h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
