import React, { useReducer } from 'react';
import INITIAL_STATE from './model'
import recordStoolReducer from './reducer'
import { persistData } from '../../components/firebase/utils'
import { STOOL_NAMESPACE } from '../../components/firebase/namespaces'

export function persistStoolData(state) {
  persistData(STOOL_NAMESPACE, state);
}

export const RecordStoolStateContext = React.createContext();
export const RecordStoolDispatchContext = React.createContext();

const RecordStoolContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recordStoolReducer, INITIAL_STATE)
  return (
    <RecordStoolStateContext.Provider value={state}>
      <RecordStoolDispatchContext.Provider value={dispatch}>
        {children}
      </RecordStoolDispatchContext.Provider>
    </RecordStoolStateContext.Provider>
  )
}
export default RecordStoolContextProvider