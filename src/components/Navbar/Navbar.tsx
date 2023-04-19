import React from 'react'

import {Nav,ApiInfo,Divider} from '../Navbar/NavbarStyle'
import StoneLogo from '../StoneLogo'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Nav>
        <StoneLogo />
        <div>
            <ApiInfo>
                <p>14 de janeiro 2023</p>
                <Divider></Divider>
                <p>21:00 UTC</p>
            </ApiInfo>
            <p style={{color:'#8C9CAD'}}>Dados de câmbio disponibilizados pela Morningstar</p>
        </div>
    </Nav>
  )
}

export default Navbar