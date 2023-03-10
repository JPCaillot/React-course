//THIS IS A DEDICATED FILE, its logic applies to specific project
//this file sets initial values to the generic 'store' made earlier
import { initStore } from "./store";

const configureStore = () => {
    // setting an initial action
    const actions = {
        TOGGLE_FAV: (curState, productId) => {
            //productId would be the store payload
            const prodIndex = curState.products.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !curState.products[prodIndex].isFavorite;
              const updatedProducts = [...curState.products];
              updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: newFavStatus
              };

            return { products: updatedProducts };
        }
    }

    initStore(actions, {products: [        
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]});
};

export default configureStore;