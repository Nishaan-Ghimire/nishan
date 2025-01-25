import { Modal } from "@mui/material";
import { useState } from "react";
import { limitText } from "../../../utils/functions";

const BlogCard = ({ blog }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className="flex flex-col justify-start bg-darkGray gap-2 my-4 min-h-[450px] rounded-[8px] sm:w-fit w-[80%]"
      >
        <div className="w-full h-[12rem]">
          <img
            src={blog.thumbnail || blog.image || "/default-image.jpg"}
            alt="blog thumbnail"
            className="w-full h-full rounded-t-[8px]"
          />
        </div>
        <div className="flex flex-col w-full h-auto justify-between items-start p-4">
          <h5 className="text-orange text-[16px]">{blog.pubDate}</h5>
          <a className="text-white hover:text-orange text-[20px] cursor-pointer no-underline">
            {blog.title}
          </a>
          <p className="text-textGray text-[16px]">{limitText(blog.contentSnippet, 170)}</p>
          <p className="text-white text-[16px]">{blog.author}</p>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="max-h-[80%] overflow-y-scroll border-textGray border-[1px] rounded-[4px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] lg:w-[40%] md:w-[60%] sm:w-[80%] w-[90%]">
          <div className="p-[2rem] bg-darkGray flex flex-col gap-[1rem] w-full">
            <div className="w-full h-[22rem] rounded-t-[20px]">
              <img
                src={blog.thumbnail || blog.image || "/default-image.jpg"}
                alt="blog thumbnail"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-full h-auto justify-between items-start p-4">
              <h5 className="text-orange text-[16px]">{blog.pubDate}</h5>
              <a className="text-white hover:text-orange text-[20px] cursor-pointer no-underline">
                {blog.title}
              </a>
              <p className="text-textGray text-[16px]">{blog.description}</p>
              <a className="text-white text-[16px]" target="_blank" href={blog.link}>Readmore..</a>
              <div className="w-full flex justify-end items-center mt-[1rem]">
                  <p className="text-white text-[16px]">{blog.author}</p>
               
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlogCard;
