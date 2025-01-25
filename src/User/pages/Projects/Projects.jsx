import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MainHeading } from "../../components";
import ProjectCard from "./Project"; // Import your ProjectCard component
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/actions/project";
import Pagination from "@mui/material/Pagination";
import './pagination.css'


const Projects = () => {
    ////////////////////////////// VARIABLES //////////////////////////////////////
    const dispatch = useDispatch();
    const { projects } = useSelector((state) => state.project);
    const projectsPerPage = 9; // Number of projects per page
    const [currentPage, setCurrentPage] = useState(1);

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// USE EFFECTS ////////////////////////////////////
    useEffect(() => {
        dispatch(getProjects());
    }, []);

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const allprojects = [{
        image: 'https://raw.githubusercontent.com/Nishaan-Ghimire/Dashboard/main/Screenshot%20from%202024-05-05%2021-21-21.png',
        title: 'Admin Dashboard',
        detail: 'A React web based dashboard for administartive purposes',
        github: 'https://github.com/Nishaan-Ghimire/Dashboard?tab=readme-ov-file',
        technologies: ['React', 'Material UI', 'Javascript']
      },
      {
        image: 'https://user-images.githubusercontent.com/65059712/236405535-f45e78d0-4965-4ecb-9c7a-d7e51dd1f2fd.png',
        title: 'Instagram Clone',
        detail: 'A simple clone to the popular social media platform Instagram',
        github: 'https://github.com/Nishaan-Ghimire/Instagram-Clone?tab=readme-ov-file',
        technologies: ['React', 'SASS', 'Javascript']        
        },
        {
            image: '/src/assets/stremline.png',
            title: 'Streamline',
            detail: 'A pre written backend code in node and express for quick start of projects',
            github: 'https://github.com/Nishaan-Ghimire/StreamLine',
            technologies: ['Node', 'MongoDB', 'Javascript',"Express"]        
        }
    ];





    return (
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: 0.3, delayChildren: 0.5 }}
            name="projects"
            className="h-auto w-full flex flex-col"
        >
            <div className="w-full flex justify-center">
                <MainHeading
                    forwardHeading="Projects"
                    backHeading="Projects"
                    detail="Transforming complex ideas into functional and intuitive web solutions that address unique needs and exceed user expectations with the latest web technologies and frameworks"
                />
            </div>


            <div className="flex flex-col gap-[1rem] ">
                <div className="flex flex-wrap md:justify-center justify-center gap-[1rem] mt-[3rem] sm:p-0 p-[2rem] ">
                    {allprojects.map((project, index) => (
                        <ProjectCard project={project} index={index} key={index} />
                    ))}
                </div>
                {
                    projects.length > projectsPerPage &&
                    <div className="w-full flex justify-center items-center">
                        <Pagination
                            count={Math.ceil(projects.length / projectsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </div>
                }
            </div>

        </motion.section>
    );
};

export default Projects;
