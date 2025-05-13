import './App.css'
import Individual from './component/Individual.jsx'
import { useState } from 'react'
import webLourdes from "./assets/lourdesobras.png"
import web1 from "./assets/web1.png"
import calculadora from "./assets/calculadora.png"
import cosl from "./assets/cosl.png"
import petrol from "./assets/petrollogo.png"
function App() {
 
  const data= [
    { id: 1,
      image: web1,
      title: "First artist web",
      webdirection: "https://lourdesmiazzo-gilt.vercel.app/index.html",
      text: `First artist portfolio website created using semantic HTML, custom CSS and SASS.
              Focused on layout, responsive design and visual presentation.
              Stack: HTML, CSS, SASS`,
      github: "https://github.com/lourdes-miazzo/repo1"
    },
    {
      id: 2,
      image: calculadora,
      title: "Art pricing calculator",
      webdirection: "https://ejercicios-java-script-3wut.vercel.app/",
      text: `A web tool to calculate artwork prices based on materials, size, and technique.
            Built with vanilla JavaScript, focused on DOM interaction and user input handling.
            Stack: HTML, CSS, JavaScript`,
      github: "https://github.com/lourdes-miazzo/ejercicios-JavaScript/tree/master"
    },
    { 
      id: 3,
      image: webLourdes,
      title: "Artist portfolio",
      webdirection: "https://lourdesobras.onrender.com/",
      text: `React-based website with backend support to display and manage original art pieces.
            Users can view detailed information about each artwork.
            Stack: React, Node.js, Express, MongoDB`,
      github: "https://github.com/lourdes-miazzo/frontLourdesObras/tree/main",
      github2: "https://github.com/lourdes-miazzo/backLourdesObras/tree/main"
    },
    {
      id: 4,
      image: cosl,
      title: "COSL website (Client Project",
      webdirection: "https://cosl-front-end.vercel.app/",
      text: `Corporate website for a professional association (Odontologic Centre Of San Luis Province). Built using React for a modern, responsive layout.
              Included reusable components, responsive design and brand integration.
              Stack: React, CSS`,
      github: "https://github.com/lourdes-miazzo/coslFrontEnd"
    }

  ]
  const [dataProject, setdataProject]= useState(null)
  return (
    
    <>
     <div className='back'>
    <nav><a href="index.html"><img src={petrol} alt="" className='logoNav'/></a></nav>
   
      
        {
          dataProject 
          ? 
          (
            <Individual {...dataProject}/>
          )
          :
          (
            <div className='container'>
            {data.map((item)=>(
              <div className='card' key={item.id} webirection={item.webdirection} title={item.title} image={item.image} 
                text={item.text} onClick={()=>setdataProject(item)}>
                
                <img src={item.image} alt="" className='imgSize'/>
                <h3 className='title'>{item.title}</h3> 
              </div>
            ))}
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
