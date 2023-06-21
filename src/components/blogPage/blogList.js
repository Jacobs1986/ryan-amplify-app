import React, { useContext, useEffect, useState } from "react";

// CSS File
import "./blog.css";

// Bootstrap
import { Button, Form } from "react-bootstrap";

// Imported Context
import { BlogContext } from "./blogColumns";

export default function BlogList() {
    const { coldBlog, thailandBlog, blog, setBlog, setPostId } = useContext(BlogContext);
    const [selectBlog, setSelectBlog] = useState("none");

    useEffect(() => {
        // begin the switch statement
        switch (selectBlog) {
            case "cold":
                setBlog(coldBlog);
                setPostId("");
                break;
            case "thai":
                setBlog(thailandBlog);
                setPostId("");
                break;
            default:
                setBlog(selectBlog);
                setPostId("");
        }
    }, [selectBlog, coldBlog, thailandBlog, blog, setBlog, setPostId]);

    // functions
    const handleBlogSelect = (event) => {
        setSelectBlog(event.target.value);
    }

    const handleSetPostId = (event) => {
        setPostId(event.target.id);
    }

    return (
        <div>
            <h4 id='blogHeader'>Blogs</h4>
            <Form.Select onChange={handleBlogSelect}>
                <option value="none">--Select a Blog--</option>
                <option value="cold">Cold Blog</option>
                <option value="thai">Thailand Blog</option>
            </Form.Select>
            {blog !== "none" ?
                blog.map((dates, i) => {
                    return (
                        <div key={i}>
                            <Button variant="link" id={i} onClick={handleSetPostId}>
                                {dates.date}
                            </Button>
                        </div>
                    )
                })
                :
                <div></div>
            }
        </div>
    );
};