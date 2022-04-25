const Product = ({ title, text, img }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`http://smktesting.herokuapp.com/static/${img}`}
      />
      <div className="card-body">
        <h5 className="card-title mt-10">{title}</h5>
        <p className="card-text mt-10">{text}</p>
      </div>
    </div>
  );
};

export default Product;
