import { createContext, useReducer } from "react";
import {reducer} from '../reducers/reducer'
export const UsersContext = createContext();

export default UsersProvider = ({ children }) => {
 

    const [ state, dispatch ] = useReducer(reducer, {
       list:[],
       details:{}
    });
  
    return (
      <UsersContext.Provider value={{state,dispatch}}>{children}</UsersContext.Provider>
    );
  };

