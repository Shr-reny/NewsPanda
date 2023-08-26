import React from 'react'


const NewsItem=(props)=>{
    
    let {title,description,imgUrl,newsUrl,author,date}=props;
    return (
      <div>
        <div className="card my-3" style={{width:"18rem"}}>
  <img src={imgUrl} alt="hi" className="card-img-top" />
  <div className="card-body  bg-light">
    <h5 className="card-title ">{title}...</h5>
    <p className="card-text ">{description}...</p>
    <p className="card-text"><small className="text-body-dark">By {!author?"unknown":author} published on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
</div>
    )
}

export default NewsItem
