import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log("Fetching data...");
        let data = await fetch(url);
        console.log(data);
        if (!data.ok) {
            throw new Error("Error at fetching...", data.status)
        }
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
        });
    }

    handleNextPage = async () => {

        let url = `https://newsapi.org/v2/everything?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page + 1}&pageSize=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
            loading: false

        });

    }
    handlePrevPage = async () => {
        let url = `https://newsapi.org/v2/everything?country=in&category=politics&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page - 1}&pageSize=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page - 1,
            loading: false
        });

    }
    render() {

        return (
            <div className='container'>
                <h1>Top Headlines</h1>
                {this.state.loading && <Loader />}
                <div className="row my-3 d-flex justify-content-between">
                    {!this.state.loading && this.state.articles.map((data) => {
                        return <div className="col-md-3" key={data.url}>
                            <NewsItem title={data.title} description={data.description} url={data.url} urlToImage={data.urlToImage} />
                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between'>
                    <button onClick={this.handlePrevPage} disabled={this.state.page <= 1} type="button" class="btn btn-dark">&larr; Previous</button>
                    <button onClick={this.handleNextPage} type="button" class="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News
