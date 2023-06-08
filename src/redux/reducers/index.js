import { combineReducers } from 'redux';
import GifsReducer from './gifsReducer';
import ModalReducer from './modalReducer';

const rootReducer = combineReducers({
    gifs: GifsReducer,
    modal: ModalReducer,
});

export default rootReducer;