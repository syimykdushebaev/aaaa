import React from "react";
import mainPic from '../images/Mask Group.png'
import css from './Main.module.css'
import { HelpCard } from "../help Card";
import {Container} from "../Container2"
export const  MainPage = () =>{
    return (<div className={css.MainPage}>
        <div className={css.container}>
            <nav>
            <span className={css.mainText}>Thrivetalk</span>
            <ul className={css.mainMenu}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
            <button className={css.mainContact}>CONTACT US</button>
        </nav>
        <div className={css.MainBlock}>

        </div>
        <div>
               <p className={css.mainHeader}>Thrivetalk</p>
               <h1 className={css.mainAbout}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
               <p className={css.mainText2}>Our highly talented therapists can help you with a range
                 of issues including relationships, sex, PTSD, depression, 
                 social anxiety, or even just caring for yourself more.
                 </p>
            
            <div>
            <button className={css.mainButton1}> WHO AM I</button>
            <button className={css.mainButton2}>WHAT DO I DO</button>
            </div>
            </div>
            <div>
                <img className={css.pic} src={mainPic} alt="" />
            </div>
        </div>
        <div>
        <HelpCard/> 
        <Container/>
        
        </div>
    </div>
    )

    
}