import { profile } from "../../../assets"
import { aboutnishan } from "../../../assets"
import { MainHeading, Button } from "../../components"
import { motion } from "framer-motion"

const About = () => {

    /////////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// STATES //////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// USE EFFECTS /////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////

    return (
        <motion.section
            name="about"
            className="h-auto w-full flex  "
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
        >

            {/* left side */}
            <div className="mx-4 px-4 lg:w-[50%] lg:block hidden justify-center " >
                <img src={aboutnishan} alt="profileImage" className="w-[35rem] h-[35rem] " />
            </div>

            {/* right side */}
            <div className="flex lg:w-[50%] flex-col md:px-8 " >

                {/* main heading */}
                <div className="w-full flex justify-center " >
                    <MainHeading
                        forwardHeading='About Me'
                        backHeading='About'
                        detail={`
                            Hey there!
                            <br/>
                            I’m Nishan Ghimire, a freelance developer and security researcher from Nepal. I’m also an AWS Cloud Practitioner. When I’m not juggling college work, I’m usually diving into tech—building cool stuff, playing CTFs, or breaking things (all in the name of learning, of course 😜).
                            <br/>
                            I love hiking, trying out new things, picking up random skills, and just chasing whatever sparks my curiosity.  
                            <br/>
                            Got a tech challenge, sci-fi theory, movie recommendation, or meme to share? Hit me up—I’m always up for a good chat! 😁
                            <br/>
                            Cheers,  
                            Nishan
                            `}
    
                        alignStart
                    />
                </div>

            </div>

        </motion.section>
    )
}

export default About
 