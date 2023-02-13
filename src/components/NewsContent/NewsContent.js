import { Container } from '@mui/system'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./NewsContent.css"

const NewsContent = ({newsArray}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
        <div className='downloadmessage'>
            <span className='msg'>For the best experience use inshorts app on your smartphone</span>
            <img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='playstore' height="80%"/>
            <img src='https://assets.inshorts.com/website_assets/images/playstore.png'alt='playstore' height="80%"/>
        </div>
        {newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>
        ))}

        
        
        </div>
    </Container>
  )
}

export default NewsContent