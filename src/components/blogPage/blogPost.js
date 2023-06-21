import React, { useContext } from "react";

// CSS File
import "./blog.css";

// Import a context
import { BlogContext } from "./blogColumns";

export default function BlogPost() {
    const { blog, postId } = useContext(BlogContext);

    return (
        <div>
            {!postId ?
                <div className="noPostBox"></div>
                :
                <div>
                    <h5 className="blogTitle centerText">
                        {blog[postId].date}
                    </h5>
                    {blog[postId].post.split("\n").map((paragraph, i) => <p key={i} className="blogText">{paragraph}</p>)}
                </div>
            }
        </div>
    );
};