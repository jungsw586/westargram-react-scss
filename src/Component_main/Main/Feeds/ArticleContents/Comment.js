import React, {Component} from 'react';
import InstagramHeart from '../../Image_Logo/instagram-heart.png'

class Comment extends Component {

    render(){
        return(
            <div className="article-feed comment-box">
                <div>
                    <a className="comment-user" href="/">{this.props.userName}</a>
                    <span className="comment-content">{this.props.userComment}</span>
                </div>
                <div>
                    <img className="comment-Like" src={InstagramHeart} alt={InstagramHeart}/>
                </div>
            </div>
        );
    }
}

export default Comment