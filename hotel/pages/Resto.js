import React from 'react'
import DefaultLayout from '../layouts/default'
import { title, subtitle } from "@/components/primitives";
import { Menudrop } from '../components/menudrop'


const Resto = () => {
  return (
    <div>
        <DefaultLayout>
          <div>       
            <h1 className={title()}>Restaurante</h1>
             <Menudrop/>
          </div>  
        </DefaultLayout>
    </div>
  )
}

export default Resto