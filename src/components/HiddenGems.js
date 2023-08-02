import React from 'react'
import "./Popsites.css"
import PopData from "./PopData.js"
import Trip1 from "../assets/mon.jpeg"
import Trip2 from "../assets/5a.jpeg"
import Trip3 from "../assets/4a.jpeg"

function HiddenGems() {
  return (
    <div className="trip">
        <h1 className="tripheading">Hidden Gem Sites</h1>
        <p className="tripheading"> These tour sites might not be widely recognized, but they possess remarkable beauty</p>
    <div className="tripcard">
    <PopData 
    image={Trip1}
    heading="Tafi Atome Monkey Sanctuary"
    text="Tafi Atome Monkey Sanctuary is a unique and fascinating tour site located in Ghana. It is a protected area that serves as a sanctuary for several species of monkeys, particularly the Mona monkeys."
    />
    <PopData
    image={Trip3} 
    heading="Wli Waterfalls"
    text= "Hidden within the lush Volta Region of Ghana, Wli Waterfalls is a true hidden gem that beckons adventure seekers and nature enthusiasts. Standing at a towering height of approximately 80 meters, it is the highest waterfall in Ghana and offers a breathtaking sight amidst its serene and picturesque surroundings."
    />
    <PopData
    image={Trip2}
    heading="Cape Three Points"
    text ="Tucked away on the southernmost tip of Ghana, Cape Three Points remains a hidden gem that captivates with its unspoiled beauty and idyllic coastal charm. The cape boasts stunning sandy beaches, turquoise waters, and dramatic rocky cliffs, creating a serene and picturesque setting for nature lovers and beach enthusiasts alike."
    />
    </div>
     </div>
  )
}

export default HiddenGems;