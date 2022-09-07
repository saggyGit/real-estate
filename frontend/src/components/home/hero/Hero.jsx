import React,{useState} from "react"
import { NavLink,useNavigate } from "react-router-dom"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {

  const[location,setlocation]=useState('');
  const[type,setproperty]=useState('');
  const[price,setprice]=useState();

  const submitHandler=()=>{

    setlocation('');
    setproperty('');
    setprice('');


    


  }


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex' onSubmit={submitHandler}>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location'  onChange={e=>setlocation(e.target.value)} value={location} />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' onChange={e=>setproperty(e.target.value)} value={type}  />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' onChange={e=>setprice(e.target.value)} value={price} />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            
           <NavLink to={`/blog/${location}/${type}/${price}`}>
            <button className='btn1' type="submit">
              <i className='fa fa-search'>

              </i>
            </button>
            </NavLink>
           
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
