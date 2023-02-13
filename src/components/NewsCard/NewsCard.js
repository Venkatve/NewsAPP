import React from 'react';
import "./NewsCard.css";

const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
  return (
    
    <div className='newsCard'>
        <img src=
        {newsItem.urlToImage ? newsItem.urlToImage : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" } 
        alt={newsItem.title}
        className="newsImage"
        />
        <div className='newsText'>
           <div>
            <span className='title'>{newsItem.title}</span>
            <br/>
            <span className='author'>
                <a href={newsItem.url} target="__blank">
                    <b>
                        Short {" "}
                    </b>
                </a>
                <span className='muted'>by {newsItem.author ? newsItem.author :"unknown" }</span>
                
            </span>
           </div>
           <div className='lowerNewsText'>
                <div className='description'>{newsItem.description}</div>
                <span className='readmore'>
                    readmore at {" "}
                    <a href={newsItem.url} target="__blank">
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
           </div>
        </div>
    </div>
  )
}

export default NewsCard