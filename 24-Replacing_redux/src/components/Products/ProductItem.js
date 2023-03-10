import React from 'react';
// import React, {useContext} from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
// import { ProductsContext } from '../../context/products-context';

const ProductItem = React.memo(props => {
  // const dispatch = useDispatch(); //redux
  // const toggleFav = useContext(ProductsContext).toggleFav;  

  const dispatch = useStore(false)[1]
  //the list that uses this component will use the store
  //to re-render anyways, so these don't need to change
  //if they don't receive new props

  const toggleFavHandler = () => {
    console.log('RENDERING');
    // dispatch(toggleFav(props.id)); //redux
    // toggleFav(props.id); //context
    dispatch('TOGGLE_FAV', props.id) //this will search for actions map
    // the action was set in products-store
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
