import React, { useEffect, useState } from 'react';
import './App.css';
import NavInShort from './components/NavInShort';
import Apikey from "./data/Config"
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';

function App() {
  const[category,setCategory] = useState("Sports");
  const[newsArray,setNewsArray] = useState([])
  const[newsResults,setNewsResults] = useState();
  const[loadmore,setLoadmore] = useState(20);
 
  const newsApi=async()=>{
    try{
        const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${Apikey}&pageSize=${loadmore}`)
        
        
        setNewsArray(news.data.articles)
        setNewsResults(news.data.totalResults)
    }
      
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{ 
     newsApi()
     // eslint-disable-next-line
  },[category,newsResults,loadmore])
  
  return (
    
    <div className="App">
      
      <NavInShort setLoadmore={setLoadmore} setCategory={setCategory}/>
      <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={newsArray} newsResults={newsResults}/>
      
      <Footer/>
    </div>
    
  );
}

export default App;