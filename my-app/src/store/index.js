import {compose,applyMiddleware,reducer,createStore} from './redux'
import thunk from 'redux-thunk'
//这里让项目支持浏览器插件Redux Devtools
const composeEnhancers = typeof window === 'object' &&   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );
  
  const store = createStore(
    reducer,
    enhancer
  )
  
  export default store