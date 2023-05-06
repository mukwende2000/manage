import { useEffect, useState } from "react"

function Testimony({active, imgUrl, fullName, quote }) {
  const [width, setWidth] = useState(window.innerWidth)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <li style={{ display: width > 668 || active && width < 768 ? 'initial' : 'none'}}>
        <blockquote>
            <figure>
                <img src={imgUrl} alt={fullName} />
                <figcaption>
                { fullName } 
                </figcaption>
            </figure>
            {quote}
        </blockquote>
    </li>  
  )
}

export default Testimony
