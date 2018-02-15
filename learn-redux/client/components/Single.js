import React from 'react';

import Photo from './Photo';


const Single = React.createClass({
    render() {

        // index of the post
        const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
        // get us the post

        const post = this.props.posts[i];
        console.log(post)



        return (
            <div className="single-photo">
            <Photo key={i} i={i} post={post} {...this.props}/>
            Single Photo</div>
        )
    }
})

export default Single;