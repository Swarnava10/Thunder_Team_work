import React from 'react'

import { FaLinkedin,FaInstagram,FaTwitter,FaDiscord, FaPinterestP} from "react-icons/fa";
import "../Css/mainpage.css"
import {MdViewHeadline} from "react-icons/md";
import logo from '../Images/logo.png'
import sample from '../Images/sample.jpg';
import { useState,useRef,useEffect } from 'react';
import { MdMic } from "react-icons/md";
import homelogo from '../Images/homes.png'


const Mainpage = () => {
  const [nav, setnav] = useState(false);
  const trends =useRef();
  
  return (
    <>
    <div className="Home">
        <header>
        <div className="navbar">
          <div className="logo"><img src={logo} alt="" width="150px"/></div>

          <ul className={(!nav)? "items" : "items hamvisi"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#application">Application</a></li>
            <li><a href="#trends">Trends</a></li>
            <li>< a href="#api">API</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>

          <div className="hamburgermenu"><MdViewHeadline onClick={()=>setnav(!nav)}/></div>
        </div>
      </header>

      <p id='home'></p>
      <section className="sect3">
        <div className="home">
          <div className="homebox1">
            <p className='homehead'>Summarizing your articles using text summarizer</p>
            <p className='hometext'>Here you can shorten your bug articles or news and get in a good
            summarized format. The process brings out information that is crucial,
            and also ensures that the meaning of the paragraph stays the same.</p>
            <a href="#application"><button className='homebtn'>Get Started</button></a>
          </div>
        

        <div className="homebox2">
          <img src={homelogo} alt="" width="90%" className='homelogo'/>
        </div>
        </div>
        
      </section>



      <p id="application"></p>
      <p className='textapp'  id="application">Text Summarizer</p>
      <p className='textappnotes'>The technique, where a computer program shortens longer texts and generates summaries to pass the intended message, is defined as Automatic Text Summarization and is a common problem in machine learning and natural language processing (NLP).</p>
      <p className='textappnotes'>Text summarization is the process of creating a short, coherent, and fluent summary of a longer text document and involves the outlining of the text’s major points.</p>
     
      <section className="sect2">
        <div className="sectbox2">
          <div className="box2">
            <textarea placeholder='Enter the article here...' className='inputbox1' />
            <br /><input type="text" placeholder=' Enter number of words...' className='inputbox2' />
            <button>Short</button>
            <button className='btn1'>Share</button>
          </div>
        </div>
      </section>



      <p id='trends'></p>

      <section className='sect1'>
      <p className='trends'>Trends</p>

          <div class="container1">
            <form action="https://www.google.com/search" method="get" target="_blank" id="search-form">
                <input name="q" type="text" placeholder="Search Thunders..." autocomplete="off" autofocus/>
                <button type="button"><MdMic/></button>
            </form>
            <p class="info"></p>
          </div>   

          <p className='textappnotes1'>Trending News: Check all the latest trending news, latest viral videos, viral memes, world top trending news, Today's trending events, latest fashion trends ...</p>


          <div className="cardsbucket">
            <div className="cards1">
               <a href="#">
                 <img src={sample} width="300px"  /> 
                 <p className='cardtexts'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates corporis facilis.</p> 
               </a>
            </div>
            <div className="cards1 cards2">
               <a href="#">
                 <img src={sample} width="260px" alt="" /> 
                 <p className='cardtexts'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates corporis facilis.</p> 
               </a>
            </div>
            <div className="cards1">
               <a href="#">
                 <img src={sample} width="300px" alt="" /> 
                 <p className='cardtexts'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates corporis facilis.</p> 
               </a>
            </div>
          </div>
          
      </section>
    <p id='api'></p>
    <p className='apihead'  id="api">Our Api for text summarizer</p>
      <p className='textappnotes'>This is our api for text summarization. it can be used by other builders and anyone who would like to implement our work in their projects and all.
      This is our api for text summarization. it can be used by other builders and anyone who would like to implement our work in their projects and all.
      This is our api for text summarization. it can be used by other builders and anyone who would like to implement our work in their projects and all.
      This is our api for text summarization. it can be used by other builders and anyone who would like to implement our work in their projects and all.
      This is our api for text summarization. it can be used by other builders and anyone who would like to implement our work in their projects and all.
      </p>
      
     

    <p id='contact'></p>
    
    </div>
    <footer className="footer"> 
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h3>Company</h3>
                <p>Hello we are CSE students of B. P. Poddar Institute of Management and Technology, Kolkata. </p>
            </div>
            <div className="footer-col">
                <h3>Office</h3>                    
                     <p>137,</p> <p>VIP Rd,</p> <p>Mali Bagan, Poddar Vihar,</p><p> Kolkata,</p>
                     <p>West Bengal 700052,</p> <p>India</p>
                     <p><a href = "mailto:rohit.cse120027@bppimt.ac.in " className='mail'>rohit.cse120027@bppimt.ac.in</a></p>
                    <p>91-033-40619174/75/76 </p> 
            </div>
        <div className="footer-col">
            <h3>Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#application">Application</a></li>
                <li><a href="#trends">Trends</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>NewsLetter</h3>
            <div className="social-links">
                <a href="https://www.instagram.com/" className='footia1'><FaInstagram className='materialicon'/></a>
                <a href="https://twitter.com/" className='footia1'><FaTwitter className='materialicon'/></a>
                <a href="https://www.linkedin.com/" className='footia1'><FaLinkedin className='materialicon'/></a>
                <a href="https://discord.com/" className='footia1'><FaDiscord className='materialicon'/></a>
                <a href="https://in.pinterest.com/" className='footia1'><FaPinterestP className='materialicon'/></a>
            </div>
        </div>
    </div>   
    </div>
    
</footer>

 </> 
  )
}

export default Mainpage