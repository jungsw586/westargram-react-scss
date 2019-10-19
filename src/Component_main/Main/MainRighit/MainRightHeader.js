import React, { Component } from 'react'

export class MainRightHeader extends Component {
    render() {
        return (
            <div className="main-right-header">
                <div>{this.props.title}</div>
                <button className="main-right-showAll">모두 보기</button>
            </div>
        )
    }
}

export default MainRightHeader
