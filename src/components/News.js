import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0dd418eda768429cba391f6cab5450d9";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
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

            </div>
        )
    }
}
export default News
