import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        const { title, desc, imageUrl, newsUrl } = this.props;

        return (
            <div className="card shadow-3" style={{width: '18rem'}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ desc }</p>
                    <a href={newsUrl} className="btn btn-info btn-sm" target="_blank" rel="noreferrer" >Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
