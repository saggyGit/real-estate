import React ,{useEffect,useState}from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import { useParams } from "react-router-dom"
import axios from 'axios';


const Blog = () => {
  const { l } = useParams();
  console.log(l)
  const {t}=useParams();
  console.log(t);
  const {p}=useParams();
  console.log(p);

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

  const filter=data.filter(row=>{

    // if(l===undefined){
    //   return row;
    // }
    // if(row.Type==t )
    // {
    //   if(row.Address==l && row.Price<=p)
    //   {
    //     return row;
    //   }
    // }
   
    if(t)
    {
      return row.Type==t;
    }
    else{
      return row;
    }
   
  })
  console.log(filter)

  
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
        <div className='content grid3 mtop'>
        {filter.map((val, index) => {
          const { category } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                {/* <img src={image} alt='' /> */}
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{val.Name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {val.Address}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{val.Price}</button> <label htmlFor=''>/Price</label>
                </div>
                <span>{val.Type}</span>
              </div>
            </div>
          )
        })}
      </div>
        </div>
      </section>
    </>
  )
}

export default Blog
