import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


const News=(props)=> {

  const[articles,setArticles]=useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//   constructor(props)
// {
//   super(props);
//   state={
//     articles:articles,
//     newsUrl:true,
//     loading: false,
//     page:1,
//     totalResults:0
//   }
//   document.title= `${capitalizeFirstLetter(props.category)}-NewsPanda`;
// }

const update=async()=>{
  props.setProgress(10);
  let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed32bd5104a446cbb07212f7062e12eb&page=${page+1}&pageSize=${props.pageSize}`;
  //const url='http://localhost:3000/news';
  //const url= 'https://api.mediastack.com/newsRun API Request? access_key = 9b7510efe7c84bc1e5c5939deda671ddcountry=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}';
  setLoading(true)
  let data=await fetch(url);
  let parsedData=await data.json()
  props.setProgress(50);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  // setState({articles: parsedData.articles,
  // totalResults:parsedData.totalResults,
  // loading:false})
  props.setProgress(100);
}

useEffect(() => {
  
   document.title= `${capitalizeFirstLetter(props.category)}-NewsPanda`;
  update();
},[])

// async componentDidMount()
// {
//   update();
// }

// handleprev=async()=>{
//   setState({ page:state.page-1})
//   update();
// }

// handlenext=async()=>{
//   setState({ page:state.page+1})
//   update();
// }

const fetchMoreData = async() => {
  const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed32bd5104a446cbb07212f7062e12eb&page=${page+1}&pageSize=${props.pageSize}`;
  //const url='http://localhost:3000/news';
  setPage(page+1)
  let data=await fetch(url);
  let parsedData=await data.json()
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
};

    return (
     <>
        <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsPanda - Top Headlines from {capitalizeFirstLetter(props.category)} category</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length!==totalResults}
          loader={<Spinner/>}
        >
      <div className="container">
        <div className="row my-3">
        {articles?.map((element,index)=>{
          return <div className="col sm-1 md-3 lg-4" key={index}>
          <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imgUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>})}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-3">
        <button disabled={state.page<=1} type="button" className="btn btn-success " onClick={handleprev}> &larr; Previous</button>
        <button disabled={state.page+1> Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-success " onClick={handlenext}>Next &rarr;</button>
        </div> */}
      </>
    );

}

News.defaultProps ={
  country:'in',
  pageSize:10,
  category:'general'
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;

