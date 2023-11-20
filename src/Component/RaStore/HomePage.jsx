import React from 'react'
import Header from '../Header'
import Slider from '../Slider'
import Detail from '../Detail'
import Products from '../Products'
import Section from '../Section'
import Client from '../Client'
import Sign from '../Sign'
import Info from '../Info'
import Footer from '../Footer'
function HomePage() {
  return (
    <div>
      <>
  <div className="hero_area">
    {/* header section strats */}

    <Header></Header>

    {/* end header section */}

    {/* slider section */}

    <Slider></Slider>

    {/* end slider section */}
  </div>
  {/* detail section */}

    <Detail></Detail>

  {/* end detail section */}

  {/* products section */}
  <section className="products_section">
    <div className="heading_container">
      <h2>New Products In Store</h2>
      <p>Featured Product Just Arrived</p>
    </div>
    <div className="container layout_padding">
      <div className="product_container">

     <Products></Products>
     <Products></Products>
     <Products></Products>
     <Products></Products>
     <Products></Products>
     <Products></Products>
     <Products></Products>
     <Products></Products>
 
      </div>
    </div>
  </section>
  {/* end products section */}

  {/* find section */}

    <Section></Section>

  {/* end find section */}

  {/* client section */}

    <Client></Client>

  {/* end client section */}

  {/* sign section */}

    <Sign></Sign>

  {/* end sign section */}


  {/* info section */}

    <Info></Info>

  {/* end info section */}

  {/* footer section */}

    <Footer></Footer>
    
  {/* footer section */}
</>

    </div>
  )
}

export default HomePage
