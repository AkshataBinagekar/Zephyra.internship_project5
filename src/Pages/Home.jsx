import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
function Home() {
  return (
    <div className='home'>
      <Navbar />
      <section className='category'>
<h1>Shop By Category</h1>
<div className='btn_container'>
    <button className='btn'>New Arrivals</button>
    <button className='btn'>Frames</button>
    <button className='btn'>Embroidery Hoop</button>
    <button className='btn'>On Sale</button>
</div>
      </section>
      <section className='card_container'>

      <div className='card'>
<div className='img'>

</div>
<div className='text'>
<p >A4 Frame <i class="fa-solid fa-cart-shopping"></i></p>
</div>
<p>Rs.xxxx</p>

      </div>
      <div className='card'>
<div className='img'>

</div>
<div className='text'>
<p >A4 Frame <i class="fa-solid fa-cart-shopping"></i></p>
</div>
<p>Rs.xxxx</p>

      </div>
      <div className='card'>
<div className='img'>

</div>
<div className='text'>
<p >A4 Frame <i class="fa-solid fa-cart-shopping"></i></p>
</div>
<p>Rs.xxxx</p>

      </div>
      <div className='card'>
<div className='img'>

</div>
<div className='text'>
<p >A4 Frame <i class="fa-solid fa-cart-shopping"></i></p>
</div>
<p>Rs.xxxx</p>

      </div>
      <div className='card'>
<div className='img'>

</div>
<div className='text'>
<p >A4 Frame <i class="fa-solid fa-cart-shopping"></i></p>
</div>
<p>Rs.xxxx</p>

      </div>

      </section>
    </div>
  )
}

export default Home
