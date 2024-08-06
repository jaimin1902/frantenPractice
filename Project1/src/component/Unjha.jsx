import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Unjha = () => {
  const [data, setData] = useState([])
  const [url, seturl] = useState('')
  // const[xyz]=data||[]
  // const{}=xyz||{}
  // console.log(xyz);
  // console.log(pin);
  
  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`https://backend-gram.onrender.com/form/`);
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    dataget();

  }, [])
  return (
    <div>
      <h1 className='unjha'>unjha</h1>
      <div>
        {data.map((item) => {
            return <div key={item.id}>
              <div>
                <h2>{item.gam}</h2>
                <p>{item.taluko}</p>
                <h2>{item.district}</h2>
                {/* <h3>{item.work}</h3>
                <h3>{item.city}</h3> */}
              </div>

            </div>
          
        })}
       
      </div>
    </div>
  )
}

export default Unjha