import axios from "axios"
import React,{useState,useEffect} from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"
import image from 'D:/reactjs/Real-estate/src/images/location/city-2.png';

const Location = () => {

  const[data,setdata]=useState([]);


  


  useEffect(()=>{
      
    axios.get("http://localhost:4000/realEstate")
    .then(async(res)=>{

      const data=await res.data;
      console.log(data);
      setdata(data);
    })
    .catch(err=>{
      console.log(err)
    })

  },[]);

  const map=data.map(row=>{
    return row.Address;
  })

  // const ex=true;
  // const filtered = data.filter(row=>{
  //   if(ex==true){
  //     return row.Address;
  //   }
  // })

  
  // const filtered=data.filter((row)=>{
  //   return(
  //     row.Address
     
  //   )

 
  // })

// console.log(filtered)

// const num=[11,22,11,44,33,44,55,44,33];
// const unique=Array.from(new Set(num));

const unique=Array.from(new Set(map));

console.log(unique);

 


  

  
  return (
    
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content grid3 mtop'>
            {unique.map((item, index) => (
              <div className='box' key={index}>
                <img src={image} alt='' />
                <div className='overlay'>
                  <h5>{item}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
