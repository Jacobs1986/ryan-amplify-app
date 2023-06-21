import React, { createContext, useState } from "react";

// CSS File
import "./blog.css";

// Bootstrap
import { Container, Col, Row } from "react-bootstrap";

// Components
import BlogList from "./blogList";
import BlogPost from './blogPost'
import BlogPictures from "./blogPictures";

// Blogs
import coldBlog from "./blogs/cold-blog.json";
import thailandBlog from "./blogs/thailand-blog.json";

// Context
export const BlogContext = createContext();

export default function BlogColumns() {
    const [ blog, setBlog] = useState("none");
    const [ postId, setPostId] = useState("");

    return (
        <BlogContext.Provider value={{ blog, coldBlog, setBlog, thailandBlog, postId, setPostId }}>
            <div className='blogColumns'>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3} lg={2}>
                            <BlogList />
                        </Col>
                        <Col xs={12} md={7}>
                            <BlogPost />
                        </Col>
                        <Col xs={12} lg={3}>
                            <BlogPictures />
                        </Col>
                    </Row>
                </Container>
            </div>
        </BlogContext.Provider>
    );
};