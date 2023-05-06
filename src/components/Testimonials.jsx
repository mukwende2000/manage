import { people } from '../data'
import Button from './Button'
import Testimony from './Testimony'
import classes from './Testimonials.module.css'
import { useState } from 'react'
function Testimonials() {
   const [active, setActive] = useState(0)

  return (
    <div className={`${classes.testimonials} container`}>
        <h2 className={classes.testimonials__header}>What they've said</h2>  
        <ul className='row--desktop row--mobile'>
            {people.map((person, index) => {
                return (
                  <Testimony
                key={index} 
                quote = {person.quote}
                imgUrl= {person.imgUrl}
                fullName={person.fullName}
                active = {active === index} />
                )
            })}           
        </ul>
        <div className={classes.togglers}>
            <div   
              onClick={(e) => setActive(+e.target.id)}
              id={0} 
              className={`${classes.toggler} ${classes['toggler--one']}`
              }>
                {active < 1 && <div></div>}
            </div>

            <div
              onClick={(e) => setActive(+e.target.id)}
              id={1} 
              className={`${classes.toggler} ${classes['toggler--two']}`
              }>
                {active == 1 && <div></div>}
            </div>

            <div
              onClick={(e) => setActive(+e.target.id)}
              id={2} 
              className={`${classes.toggler} ${classes['toggler--three']}`
              }>
                {active == 2 && <div></div>}
            </div>
            <div
              onClick={(e) => setActive(+e.target.id)}
              id={3} 
              className={`${classes.toggler} ${classes['toggler--three']}`
              }>
                {active > 2 && <div></div>}
            </div>
        </div> 
        <Button alwaysShow />     
    </div>
  )
}

export default Testimonials
