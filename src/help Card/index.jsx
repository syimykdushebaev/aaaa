import React from "react";
import style from "./HelpCard.module.css"
import mainPhoto from "../images/photo.png"
export const HelpCard =() =>{
    return(<div>
<div className={style.helpCard}>
    <h1 className={style.text}>Why Thrive?</h1>
    <h3 className={style.story}>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?
          <p>Here at ThriveTalk, our licensed therapists provide the same quality
         care you would get in office from anywhere you can access your laptop or mobile phone.
          Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p></h3>
    <p></p>
</div>
<img className={style.Photo} src={mainPhoto} alt="" />
</div>
    )
}