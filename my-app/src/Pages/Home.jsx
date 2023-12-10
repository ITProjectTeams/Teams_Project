import React from 'react'
import Header from '../Components/Header/Header'
import Product from '../Components/Product/Product'
import Material from "../Components/Material/Material"

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Product />
      <Material />
    </React.Fragment>
  )
}
