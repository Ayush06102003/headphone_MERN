import React from 'react'
import DataContext from './dataContext'
function dataState(props) {
  
      
  return (
    <div>
      <DataContext.Provider >
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default dataState
