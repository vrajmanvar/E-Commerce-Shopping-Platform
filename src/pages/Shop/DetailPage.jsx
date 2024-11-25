import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === Number(id)); // Convert detailId to a number

  if (!product) {
    return <p>Product not found!</p>;
  }

  const navigate = useNavigate();

  return (
    <div className="detailPage">
      <img src={product.productImage} alt={product.productName} />
      <h1>{product.productName}</h1>
      <p>Price: ${product.price}</p>
      {product.detail && (
        <p>
          <strong>Description: </strong>
          {product.detail}
        </p>
      )}
      <button onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  );
};

export default DetailPage;
