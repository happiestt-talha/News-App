import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, url, urlToImage } = this.props;
        return (
            <div>
                <div className="card mb-2" style={{ width: "18rem" }}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title && title.slice(0, 45)}...</h5>
                        <p className="card-text">{description && description.slice(0, 95)}...</p>
                        <a target='_blank' rel='noreferrer' href={url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
