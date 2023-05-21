import React from 'react'
import '../styles/Tower.css'

const Towercomp = ({title}) => {
    return (
        <div>


            <div className='imgdiv2'>
            <div className='overlay'></div>
                <img src="https://images.unsplash.com/photo-1524010464459-ebc38e4a3331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
                    alt=""
                    width={1600}
                    height={1000}
                />

                

                <h1 className='compHead'>{title}</h1>
                  
                 
            </div>


        </div>
    )
}

export default Towercomp