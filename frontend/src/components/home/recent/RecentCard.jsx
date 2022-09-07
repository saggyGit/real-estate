import axios from "axios";
import React, { useEffect ,useState} from "react"
import { list } from "../../data/Data";
import image from '../../../images/list/p-1.png';


const RecentCard = () => {

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
  return (
    <>
      <div className='content grid3 mtop'>
        {data.reverse().map((val, index) => {
          const { cover, category } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={image} alt='' />
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
    </>
  )
}

export default RecentCard
