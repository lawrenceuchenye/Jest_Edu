import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState } from "react"

export default function Home(){
  const [count,setCount]=useState(0);

  return (
    <div>
      <div className="header">
         <h1>{count}</h1>
         </div>
          <div className="btns_div">
             <button onClick={()=>setCount(count+1)}>Add</button>
             <button onClick={()=>setCount(count-1)}>Subtract</button>
             <button onClick={()=>setCount(0)}>Restart</button>
              <button onClick={()=>setCount(-1*count)}>Inverse</button>
            </div>
      </div>
  );
}
