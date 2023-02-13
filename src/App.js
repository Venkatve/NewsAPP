import React, { useEffect, useState } from 'react';
import './App.css';
import NavInShort from './components/NavInShort';
// import Apikey from "./data/Config"
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';

function App() {
  const[category,setCategory] = useState("general");
  const[newsArray,setNewsArray] = useState([])
  
  
 
  const newsApi=async()=>{
    try{
      // const proxyUrl="https://cors-anywhere.herokuapp.com/"
        // const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${Apikey}&pageSize=${loadmore}`)
        const news= await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
        console.log(news)
        setNewsArray(news.data.articles)
        
    }
      
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{ 
     newsApi()
     // eslint-disable-next-line
  },[category])
  
  return (
    
    <div className="App">
      
      <NavInShort  setCategory={setCategory}/>
      <NewsContent  newsArray={newsArray} />
      
      <Footer/>
    </div>
    
  );
}

export default App;