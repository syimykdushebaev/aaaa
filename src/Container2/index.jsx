import React from "react";
import stil from "./Cont.module.css"
import mainPhoto2 from "../images/photo2.png"
import mainPhoto3 from "../images/photo3.png"
import mainPhoto4 from "../images/photo4.png"

export  const Container =()=>{
return(
    <div className={stil.Fon}>
<div className={stil.about}>ABOUT US</div>
<p className={stil.story2}>We want to help you thrive! Whether you are just looking for someone to talk to,
 or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with 
a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
</p>
<span className={stil.black}>WE CAN HELP YOU WITH</span>
<div className={stil.boss}>
<div  className={stil.Keys}><hr /><li className={stil.colorr}>Pumping Iron</li></div>
<div  className={stil.Keys1}><hr /><li className={stil.colorr}>Pumping Iron</li></div>
<div  className={stil.Keys2}><hr /><li className={stil.colorr}>Running  & Spinning</li></div>
<div  className={stil.Keys3}><hr /><li className={stil.colorr}>Weight Lifting</li></div>
    </div>
    <div className={stil.Container2}>
    <div className={stil.Keys4}><hr /><li className={stil.colorr}>Physical Health</li></div>
    <div  className={stil.Keys5}><hr /><li className={stil.colorr}>Mental Health</li></div>
    <div  className={stil.Keys6}><hr /><li className={stil.colorr}>Nutrition</li></div>
    <div  className={stil.Keys7}><hr /><li className={stil.colorr}>Gymnastics</li></div>
    <div  className={stil.Keys8}><hr /><li className={stil.colorr}>Crossfit</li></div>
    <div  className={stil.Keys9}><hr /><li className={stil.colorr}>Aerobics</li></div>
    </div>
    
        <div className={stil.Container3}>
            <div className={stil.Container4}>
        <div className={stil.Keys10}><h1>Nutritional Plans</h1><p>Nutritional Facts on some shitty things that<br></br> you  don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
        <div className={stil.Keys10}><h1>Weight Loss</h1><p>Nutritional Facts on some shitty things that<br></br> you don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
        <div className={stil.Keys10}><h1>Mental Peace</h1><p>Nutritional Facts on some shitty things that<br></br> you don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
        <div className={stil.Keys10}><h1>Home Training</h1><p>Nutritional Facts on some shitty things that <br></br> you don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
        <div className={stil.Keys10}><h1>Work/Life Balance</h1><p>Nutritional Facts on some shitty things that <br></br> you don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
        <div className={stil.Keys10}><h1>Cardio</h1><p>Nutritional Facts on some shitty things that <br></br> you don’t care about and even we don’t , I <br></br> need to replace this copy.</p></div>
    </div>
    </div>
    <div>
        <div>
        <img  className={stil.mainPhoto2} src={mainPhoto2} alt="" />
        <span className={stil.textspan}>YOU SHOULD ALSO KNOW</span>
        <h2 className={stil.texth2}>MDD affects more than 16.1 million <br /> American adults, or about 6.7%of the U.S. <br /> population age 18 and older in a given year.<br></br> We at ThriveTalk can help you.</h2>
        <button className={stil.pp}>GET HELP NOW</button></div>
    </div>
    <div className={stil.Container5}><div>
        <div className={stil.Container6}><span className={stil.span2}>CONTACT US</span> <h2 className={stil.texth23}>Ready. Set. Smile</h2>
        <p className={stil.ppp}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        <button className={stil.button1}>GET HELP NOW</button></div>
        <div>
            <img  className={stil.mainPhoto3} src={mainPhoto3} alt="" />
        </div>
        </div>
    </div>
    <div className={stil.Container7}><div>
        <div>
            <img className={stil.mainPhoto4} src={mainPhoto4} alt="" />
        </div>
        <div className={stil.Container8}>
            <h4 className={stil.hh}>SOME INFO</h4>
            <p className={stil.ppp4}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
            <h4 className={stil.hhh}>ENFOLD HEALTH</h4>
            <p className={stil.ppp5}> Main Street 1, Olcott Buffalo, United States +555 283 784 333 office <a className={stil.aaa}  href="https://kriesi.at/themes/enfold-health-coach/">office@enfold-health.com</a> </p>
            <h4 className={stil.hhhh}>OFFICE HOURS</h4>
            <p className={stil.ppp6}>Mo-Fr: 8:00-19:00 <br />
Sa: 8:00-14:00 <br />
Su: closed</p>
        </div>
        <div className={stil.Container9}><span className={stil.sapnn}> Copyright - ThriveTalk  2017</span></div>
        </div>
    </div>
    </div>
)
    

}