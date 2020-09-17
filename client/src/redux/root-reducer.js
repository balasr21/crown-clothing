import { combineReducers } from 'redux';
import userReducer from '../redux/user/user.reducer';
import CartReducer from '../redux/cart/cart.reducer';
import ShopReducer from '../redux/shop/shop.reducer';
import DirectoryReducer from '../redux/directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:DirectoryReducer,
    shop:ShopReducer
});

export default persistReducer(persistConfig,rootReducer);