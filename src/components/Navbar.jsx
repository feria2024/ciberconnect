import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logoprincipal.webp'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()

  const handleClick = (route) => {
    setClicked(!clicked)
    if (route) {
      navigate(route) // Navegamos a la ruta específica
    }
  }

  const handleLogout = () => {
    console.log("Cerrando sesión...")
    navigate('/login')
  }

  return (
    <>
     <>
      <NavContainer>
      <Link to='/redes'>
      <img src={Logo} alt="" style={{width: '100%', height: 'auto', maxWidth:'190px',marginLeft:'20px',cursor:'pointer'}} to='/redes' />
      </Link>


        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link to="/Redes" onClick={handleClick}>Home</Link>
          <Link to="/Tipos" onClick={handleClick}>Tipos</Link>
          <Link to="/Arquitectura" onClick={handleClick}>Arquitectura</Link>
          <Link to="/Proyecto" onClick={handleClick}>Ciber Connect</Link>
          {/* Simple link for "Cerrar Sesión" */}
          <Link to="/" onClick={handleClick}>Cerrar Sesión</Link>
        </div>
        <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>

    </>
  )
}

export default Navbar
const NavContainer = styled.nav`

img{
widht:20%;
height:auto;
max-widht:120px;
}
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #036564;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top:0;
  width:100%;
  position: fixed;
  z-index:2;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color:#036564;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`


