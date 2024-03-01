import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1
        });
    }

    handleNextPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page + 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1
        });

    }
    handlePrevPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page - 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page - 1
        });

    }
    render() {

        return (
            <div className='container'>
                <div className="row my-3 d-flex justify-content-between">
                    {this.state.articles.map((data) => {
                        return <div className="col-md-3" key={data.url}>
                            <NewsItem title={data.title} description={data.description} url={data.url} urlToImage={data.urlToImage} />
                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between'>
                    <button onClick={this.handleNextPage} disabled={this.state.page <= 1} type="button" class="btn btn-dark">&larr; Previous</button>
                    <button onClick={this.handlePrevPage} type="button" class="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News
