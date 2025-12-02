import React, { createContext, useState } from 'react'


export const NavbarContext = createContext()

const NavContext = ({children}) => {
 
   
    const [navOpen, SetNavOpen] = useState(false)

  return (
    <div>
        <NavbarContext.Provider value={[navOpen,SetNavOpen]}>
            {children}
        </NavbarContext.Provider>
      
    </div>
  )
}

export default NavContext
