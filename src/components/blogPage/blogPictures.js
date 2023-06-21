import React, { useContext } from "react";

// CSS File
import "./blog.css";

// Bootstrap
import { Image } from "react-bootstrap";

// Import a context
import { BlogContext } from "./blogColumns";

// Blogs
// import blogPictures from './blogs/cold-blog.json';

export default function BlogPictures() {
    const { blog, postId } = useContext(BlogContext);

    return (
        <div>
            {!postId ?
                <div></div>
                :
                blog[postId].photos.length !== 0 ?
                    blog[postId].photos.map((image, i) => {
                        return (
                            <a href={image} target="_blank" rel="noreferrer">
                                <Image
                                    key={i}
                                    src={image}
                                    className="blogPostPicture"
                                    alt='Blog image'
                                />
                            </a>
                        )
                    })
                    :
                    <div></div>
            }
            {/* {blogPictures.map((photos, i) => {
                return (
                    <div key={i}>
                        {photos.photos.length !== 0 ?
                            photos.photos.map((image, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={image}
                                        className="blogPostPicture"
                                        alt='Blog image'
                                    />
                                )
                            })
                            : <p></p>}
                    </div>
                )
            })} */}
        </div>
    );
};