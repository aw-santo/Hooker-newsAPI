import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './news.css';
import Loader from './Loader';
import fire from '../fire.gif';

export class News extends Component {

  constructor() {
      super();
      console.log("into the news comp!");
      this.state = {
          articles: [],
          loading: true,
          page: 1,
          totalResults: 0
      }
  }

  pageSize = 20;

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee9191de296449f8d4136f75dd1e5b7&page=${this.state.page}&pageSize=${this.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  // componentDidMount() {
  //   let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee9191de296449f8d4136f75dd1e5b7&page=1";
    
  //   fetch(url).then((dt) => dt.json())
  //             .then((d) => this.setState({ articles: d.articles}));

  // }

  handlePrev = async() => {
    this.setState({
      loading: true
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee9191de296449f8d4136f75dd1e5b7&page=${this.state.page-1}&pageSize=${this.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);

    console.log("prev");

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNext = async(event) => {  

    if (!((this.state.page+1) > Math.ceil(this.state.totalResults/this.pageSize))) {
      // event.target.setAttribute('disabled', true);

      this.setState({
        loading: true
      });
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee9191de296449f8d4136f75dd1e5b7&page=${this.state.page+1}&pageSize=${this.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log(parsedData);

      console.log("next");

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  render() {
      return (
          
              this.state.loading? <div id='loader'><Loader /></div> : <><h2 className='my-5 mx-2 text-center'><strong>Hooker's</strong> hot <img src={fire} alt="🔥" width='40' style={{
                position: 'relative',
                left: '-12px',
                top: '-9px'
              }}/> picks</h2>
              <hr />
              <div className='container'>
                  {/* This is a news component!😁 */}
                  {this.state.articles.map( (article) => {
                      return (
                          <NewsItem key={article.url} title={article.title} desc={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
                      );
                  })}
              </div>
              <div className="container d-flex justify-content-between my-4">
              <button type="button" className=" my-3 btn btn-outline-secondary" onClick={this.handlePrev} disabled={this.state.page<=1?true:false}> &larr; Previous</button>
              <button type="button" className=" my-3 btn btn-outline-secondary" onClick={this.handleNext}
              disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/this.pageSize)?true:false}>Next &rarr;</button>
              </div></>
          
      )
  }
}

export default News
