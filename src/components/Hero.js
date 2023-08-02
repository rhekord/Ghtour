import React from 'react'
import "./HeroStyles.css"

function Hero(props) {
  return (
    <>
    <div className ={props.cName}>
        <img alt="landing" src={props.heroImg}/>
    <div className="hero-text" >
        <h1>{props.title}</h1>
        <p>{props.text} </p>
        <a href={props.url} className={props.btn}> {props.btntext}</a>
    </div>
    </div>
    {/* <Hero 
    CName="hero"
    heroImg="https://www.primenewsghana.com/images/2018/sept/24/KwameNkrumahMausoleum.jpg"
    title="Travel"
    text="Travel to the most beautiful places in the world"
    btntext ="Book Now"
    url="./"
    btn="show"   
    
    /> */}
    </>
  )
}

export default Hero