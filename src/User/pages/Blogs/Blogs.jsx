import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { MainHeading } from "../../components"
import BlogCard from './BlogCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "../../../redux/actions/blog";


const Blogs = () => {
    const blogobj = {
        "blogs": [
          {
            "title": "Basic of Web cache and web cache poisoning",
            "link": "https://nishanghimire50.medium.com/basic-of-web-cache-and-web-cache-poisoning-bea9ba9a0bce?source=rss-1638f5afe286------2",
            "pubDate": "Sun, 29 Dec 2024 17:15:24 GMT",
            "author": "Nishan Ghimire",
            "description": "Hi everyone, I am Nishan Ghimire, developer, engineering student and security researcher. Today we are diving deep into the world of web cache and how web cache poisoning vulnerability works in detail...",
            "contentSnippet": "Hi everyone, I am Nishan Ghimire, developer, engineering student and security researcher. Today we are diving deep into the world of web cache...",
            "image": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8ehQDKNJc141q7ZVQvcgJg.png",
            "thumbnail": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8ehQDKNJc141q7ZVQvcgJg.png"
          },
          {
            "title": "Prompt Injection: The Subtle Threat Lurking in AI Models",
            "link": "https://nishanghimire50.medium.com/prompt-injection-the-subtle-threat-lurking-in-ai-models-dfe287296ae4?source=rss-1638f5afe286------2",
            "pubDate": "Sat, 09 Dec 2023 15:33:15 GMT",
            "author": "Nishan Ghimire",
            "description": "With the evolution of every new technology, there arise new vulnerabilities that might be exploited by a malicious actor for their benefit or any other reason...",
            "contentSnippet": "With the evolution of every new technology, there arise new vulnerabilities that might be exploited by a malicious actor for their benefit or any other reason...",
            "image": "https://cdn-images-1.medium.com/max/444/1*DyCs0DnJzzeTtbW8P0GUqQ.png",
            "thumbnail": "https://cdn-images-1.medium.com/max/444/1*DyCs0DnJzzeTtbW8P0GUqQ.png"
          }
        ]
    };

    ////////////////////////////// VARIABLES //////////////////////////////////////
    const dispatch = useDispatch()
    const { blogs } = useSelector(state => state.blog)

    ////////////////////////////// USE EFFECTS ////////////////////////////////////
    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////

    return (
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            name="blogs"
            className="h-auto w-full flex flex-col "
        >

            <div className="w-full flex justify-center " >
                <MainHeading
                    forwardHeading='Blogs'
                    backHeading='Blogs'
                    detail='In my blog posts, I share my insights and expertise on the latest web development trends, covering topics such as the MERN stack, front-end frameworks, back-end technologies, and best practices for building robust and scalable web applications.'
                />
            </div>

            <Swiper
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                slidesPerView={3}
                pagination={true}
                modules={[Pagination]}
                className="w-full"
            >
                {
                    blogobj.blogs.map((blog, index) => (
                        <SwiperSlide key={index} className="p-[1rem] flex justify-center " >
                            <BlogCard blog={blog} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </motion.section>
    )
}

export default Blogs
