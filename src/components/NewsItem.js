import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, url, urlToImage } = this.props;
        const imageSource = urlToImage ? urlToImage : "https://cdn.abcotvs.com/dip/images/994847_092115-abcnewslivestreams-img.jpg";
        return (
            <div>
                <div className="card mb-2" >
                    <img onError={(e) => { e.target.src = imageSource }} src={!urlToImage ? "https://cdn.abcotvs.com/dip/images/994847_092115-abcnewslivestreams-img.jpg" : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title && title.slice(0, 45)}...</h5>
                        <p className="card-text">{description && description.slice(0, 95)}...</p>
                        <a target='_blank' rel='noreferrer' href={url} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
