import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p> {/*identifier chosen in the router*/}
        <Link to='..' relative='path'>Back</Link>
    </>
  );
};

export default ProductDetailPage;
