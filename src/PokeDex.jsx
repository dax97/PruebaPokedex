//////* librerias y componentes nativos *//////
import React from 'react'
//////* enrutadores *//////
import { AppRouter } from './Routers/AppRouter'
//////* Hojas de estilo *//////
import './PokeDex.css'

function PokeDex() {

  return (
    <AppRouter/>
  )
}

export { PokeDex }
