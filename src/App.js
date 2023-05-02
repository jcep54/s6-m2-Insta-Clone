/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';

// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData

import Posts from './components/Posts/Post'
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data.js';

import './App.css';


const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData);
  const [search, setSearch] = useState('')
  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */

      /**
       * may -> loop over an array, do something to each element and return a new array 
       * filter -> loop over an array, based on a condition, return particular elements into a new array
       * reduce -> loop over an array and reduce it to a singular value 
       * find -> loop over an array, based on a condition return the FIRST element it finds that matches that condition 
       */
    const updatedLikes = posts.map(id => {
      if(postId === id){
        return { ...id, likes: id.likes + 1}
        
      } else{
        return id;
      }
      })

      setPosts(updatedLikes);
  };

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}

      <SearchBar />
      <Posts likePost = {likePost} posts = {posts}/>
     
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
