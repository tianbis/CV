import { createStore } from 'redux'
import Resume from './data/resume.json'
import { composeWithDevTools } from 'redux-devtools-extension'

let themes = ['dark','light'];
let langs = ['es_AR','en_US'];

let initialState = {
    resume: Resume,
    lang: 'es_AR',
    theme: themes[0]
}

function reducer(state,action){
    if(typeof state === 'undefined'){
        return initialState;
    }
    switch (action.type) {
        case 'SWITCH_THEME':
            return switchTheme(state);
        case 'SWITCH_LANG':
            return switchLanguage(state);
        default:
            return state;
    }
}

function switchTheme(state){
    return {
        ...state,
        theme: state.theme === themes[0] ? themes[1] : themes[0]
    }
}

function switchLanguage(state){
    return {
        ...state,
        lang: state.lang === langs[0] ? langs[1] : langs[0]
    }
}

const store = createStore(
    reducer,
    composeWithDevTools()
);
export default store;