import React from 'react';
import Post from './Post';

export default function GetPosts(props) {
  return (
    <div>
      {props.posts.map((post) => {
            return <Post post={post} key={post.data.id} counter = {props.countProp} />
           })}
    </div>
  );
}