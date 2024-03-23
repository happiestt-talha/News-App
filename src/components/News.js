import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        if (!data.ok) {
            throw new Error("Error at fetching...", data.status)
        }
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
            loading: false
        });
    }
    async componentDidMount() {
        this.fetchData();
    }

    handleNextPage = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page + 1}&pageSize=${this.state.page}&pageSize=${this.props.pageSize}`;
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
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0dd418eda768429cba391f6cab5450d9&page=${this.state.page - 1}&pageSize=${this.state.page}&pageSize=${this.props.pageSize}`;
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
                {/* <div className="row my-3 d-flex justify-content-between">
                    {!this.state.loading && this.state.articles.map((data) => {
                        return <div className="col-md-3" key={data.url}>
                            <NewsItem title={data.title} description={data.description} url={data.url} urlToImage={data.urlToImage} />
                        </div>
                    })}
                </div> */}
                <InfiniteScroll
                    dataLength={56} //This is important field to render the next data
                    next={this.fetchData()}
                    hasMore={true}
                    loader={<Loader/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    
                >
                <div className="row my-3 d-flex justify-content-between">
                    {!this.state.loading && this.state.articles.map((data) => {
                        return <div className="col-md-3" key={data.url}>
                            <NewsItem title={data.title} description={data.description} url={data.url} urlToImage={data.urlToImage} />
                        </div>
                    })}
                </div>
                </InfiniteScroll>

                {/* <div className='container d-flex justify-content-between'>
                    <button onClick={this.handlePrevPage} disabled={this.state.page <= 1} type="button" className="btn btn-dark">&larr; Previous</button>
                    <button onClick={this.handleNextPage} type="button" className="btn btn-dark">Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
export default News