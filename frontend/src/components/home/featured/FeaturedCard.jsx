import React ,{useState,useEffect}from "react"
import { featured } from "../../data/Data"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import image from "D:/reactjs/Real-estate/src/images/hero/h1.png"

const FeaturedCard = () => {

  const[data,setdata]=useState([]);
  const ex = true;

  const filterAppartments = data.filter(row=>{
    if(ex==true){
      return row.Type == "Appartments";
    }
  })

  
  const filterHouse = data.filter(row=>{
    if(ex==true){
      return row.Type == "House";
    }
  })

  
  const filterFlats = data.filter(row=>{
    if(ex==true){
      return row.Type == "Flats";
    }
  })
  
  const filteroffice = data.filter(row=>{
    if(ex==true){
      return row.Type == "office";
    }
  })
  
  const filterStore = data.filter(row=>{
    if(ex==true){
      return row.Type == "Store";
    }
  })
  console.log(filterAppartments.length);

  

  const properties=[
    {
      type:"Appartments",
      size:filterAppartments.length
    },{
      type:"House",
      size:filterHouse.length

    },{
      type:"Flats",
      size:filterFlats.length

    },{
      type:"office",
      size:filteroffice.length

    },{
      type:"Store",
      size:filterStore.length

    }
  ]

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
  return (
    <>
      
      <div className='content grid5 mtop'>
        {properties.map((items, index) => (
          <NavLink to={`/blog/${items.type}`}>
          <div className='box' key={index}>
            <img src={image} alt='' />
            <h4>{items.type}</h4>
            <label>{items.size}</label>
          </div>
          </NavLink>
        ))}
      </div>
   
    </>
  )
}

export default FeaturedCard
