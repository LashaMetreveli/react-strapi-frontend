import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

import configContext from "../context/configContext";

function Posts(props){

   const [posts, loading] = useSelector((state) => [state.appPosts.posts, state.appCommon.loading]);
    const {baseURL} = useContext(configContext);
    if(loading){
        return <h1>loading...</h1>
    }
    return <div>
       <h1>POSTS</h1> 
        <h2>Post Count in DB: {posts.length}</h2>
        <hr/>
        {posts.map(post => {
            return <article key={post.id}>
               <h2>{post.title}</h2>
               <section>
                   <ReactMarkdown>
                   {post.content}
                   </ReactMarkdown>
                   </section>
                   <img src={`${baseURL}${post.thumbnail.formats.thumbnail.url}`}/>
            </article>
        })}
    </div>
}

export default Posts;