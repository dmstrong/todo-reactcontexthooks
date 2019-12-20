import React, { createContext, useReducer } from 'react'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
const [books, dispatch] = useReducer(BookReducer, [])
    return (
        <div>
            <BookContext.Provider value={{books, dispatch}}>
                { props.children }
            </BookContext.Provider>
        </div>
    )
}

export default BookContextProvider
