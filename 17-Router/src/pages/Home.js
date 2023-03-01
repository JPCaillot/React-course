import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      {/*<p>Go to <a href='/products'>the list of products</a></p>*/}
      {/*this would be a new http request to load all JS code again, losing also any state*/}
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button> {/* just a demonstration, imperative navigations wouldn't have this */}
      </p>
    </>
  );
}

export default Homepage;
