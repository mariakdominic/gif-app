import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

const initialState =  {
    selectedGif: null,
    modalIsOpen: false
};

export default function modal(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                selectedGif: action.gif.selectedGif
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false,
                selectedGif: null
            };
        default:
            return state;
    }
}