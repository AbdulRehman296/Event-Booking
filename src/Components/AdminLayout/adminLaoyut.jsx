import React from 'react'
import SideBar from './SideBar/SideBar'

import "./adminLayout.css"

const AdminLaoyut = ({children}) => {
  return (
    <div className='adminLayout'>
        <div className='left-side'>
            <SideBar/>
        </div>
        <div className='right-side'>
            {children}
            
        </div>
    </div>
  )
}

export default AdminLaoyut