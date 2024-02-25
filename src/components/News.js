import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row my-3 d-flex justify-content-between">

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                </div>

                <div className="row my-3 d-flex justify-content-between">

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                    <div className="col-md-3">
                        <NewsItem title="Hello world" description="This is a demo description" />
                    </div>

                </div>
            </div>
        )
    }
}
export default News
