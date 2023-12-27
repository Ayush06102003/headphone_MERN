import React, { useEffect , useState} from 'react'
import '../styling/style.css'
import DataItem from './DataItem'


function Allproducts(props) {
  const host = "http://localhost:8000"
  const initialdata = [];
  const [data,setData] = useState(initialdata)

  const getdata = async () => {
      try {
        const response = await fetch(`${host}/fetchall`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // "auth-token": localStorage.getItem('token')
          }
        });
        const json = await response.json();
        console.log('Fetched data:', json);
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(()=> {
    getdata();
     // eslint-disable-next-line
  },[])
  return (
    <div>
     
      <section className="all-products">
      <h2>All Products</h2>
      <div className="products">
      {data.length===0 &&'No products to display' } 
      {data.map((item)=>{
        return <DataItem key={item._id} item={item} />
      })}
      </div>
      </section>


    </div>
  )
}

export default Allproducts
