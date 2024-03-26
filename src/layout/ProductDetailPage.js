import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import eclipse from "../assets/ProducDetailPage/Ellipse 14 (1).png";
import eclipse2 from "../assets/ProducDetailPage/Ellipse 15 (1).png";
import eclipse3 from "../assets/ProducDetailPage/Ellipse 16 (1).png";
import eclipse4 from "../assets/ProducDetailPage/Ellipse 17 (1).png";

export default function ProductDetailPage() {
  const productDetail = useSelector((store) => store.product.productList);
  const productDetailParams = useParams();
  const { productId } = productDetailParams;

  // console.log(productDetailParams);
  // console.log(productId);

  const product = productDetail.find((product) => productId == product.id);

  console.log(product);
  return (
    <div className="w-[15rem]">
      <div>
        <div>
          <img src={product.images[0].url} className="object-cover" />
        </div>
        <div>
          <h4>{product.name}</h4>
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <p>${product.price}</p>
          <div>
            <h6>Availability :</h6>
            <h6>In Stock </h6>
          </div>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr />
          <div>
            <img src={eclipse} className="w-3" />
            <img src={eclipse2} className="w-3" />
            <img src={eclipse3} className="w-3" />
            <img src={eclipse4} className="w-3" />
          </div>
          <div>
            <button>Select Options</button>
          </div>
        </div>
      </div>
    </div>
  );
}
