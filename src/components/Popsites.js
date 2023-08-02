import React from 'react'
import "./Popsites.css"
import PopData from "./PopData.js"
import Trip1 from "../assets/1b.jpg"
import Trip2 from "../assets/2.jpeg"
import Trip3 from "../assets/2b.jpg"

function Popsites() {
  return (
    <div className="trip">
        <h1 className="tripheading">Popular Tour Sites</h1>
        <p className="tripheading"> This sites are well known tour sites</p>
    <div className="tripcard">
    <PopData 
    image={Trip1}
    heading="Kakum National Park"
    text="Kakum National Park is a dense tropical rain forest in southern Ghana. The forest is home to over 40 species of larger mammals including forest elephants, forest buffalo, Mona-meerkats and civets. The bird life is fantastic as well with over 250 species present."
    />
    <PopData
    image={Trip3} 
    heading="Mole National Park"
    text= "Mole National Park is Ghana's largest wildlife refuge. The park is located in northwest Ghana on grassland savanna and riparian ecosystems at an elevation of 150 m, with sharp escarpment forming the southern boundary of the park."
    />
    <PopData
    image={Trip2}
    heading="Cape Coast Castle"
    text ="Cape  is Ghana's largest wildlife refuge. The park is located in northwest Ghana on grassland savanna and riparian ecosystems at an elevation of 150 m, with sharp escarpment forming the southern boundary of the park"
    />
    </div>
     </div>
  )
}

export default Popsites;