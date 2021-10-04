import { useHistory } from 'react-router';

const ProductItem = ({ product, handleDelete }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/details/${product.id}`);
  };

  return (
    <div className="productWrapper">
      <div className="card">
        <div className="card-header">
          <img alt={product.name} src={product.image} onClick={handleClick} />
        </div>
        <div className="card-body">
          <p>{product.name}</p>
          <p className="product-price">{product.price} KD</p>
        </div>
        <div className="card-footer">
          <button
            className="btn-danger btn form-control"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
