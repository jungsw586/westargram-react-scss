import React, { Component } from 'react'

export class RecommandList extends Component {
    render() {
        return (
            <div className="main-right-recommand-content">
                <div>
                    <img className="Img-radius" src={this.props.imgSrc} alt={this.props.imgSrc} />
                    <div>
                        <div><a href="/">{this.props.user}</a></div>
                        <div className="story-time">회원님을 위한 추천</div>
                    </div>
                </div>
                <div>
                    <button>팔로우</button>
                </div>
            </div>
        )
    }
}

export default RecommandList
