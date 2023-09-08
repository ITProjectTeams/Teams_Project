import React from 'react'
import Header from '../Components/Header/Header'
import About from '../Components/AboutUs/AboutUs'
import Services from '../Components/Services/Services'
import Product from '../Components/Product/Product'
import Material from "../Components/Material/Material"

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Services />
      <Product />
      <Material />
    </React.Fragment>
  )
}
