import React from 'react';

export default function Post(props) {
    let post = props.post;
    return (
    <div className="post-card"> 
        <h3> <a href = {post.data.url} target = "_blank" rel="noopener noreferrer" onClick = {props.counter}> {post.data.title} </a></h3>
        <p>Author: {post.data.author} </p> 
        <p>ups: {post.data.ups.toLocaleString('en')} </p>
        <p>{comments(post.data.num_comments.toLocaleString('en'))}</p> 
        
    </div>
    )
} 
function comments(num) {
    if (num > 0) {
        return 'Comments: ' + num
    } else {
        return 'No Comments'
    }   

}

