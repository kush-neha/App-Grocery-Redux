import {createStore} from 'redux'
import reducer from '../reducer'

const initialState=[
        { name: "Cake", votes: 0 },
        { name: "Cupcake", votes: 0 },
        { name: "Muffins", votes: 0 },
        { name: "Pastry", votes: 0 },
        { name: "Choclate", votes: 0 },
        { name: "RedRose", votes: 0 },
]
    
export const store=createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())