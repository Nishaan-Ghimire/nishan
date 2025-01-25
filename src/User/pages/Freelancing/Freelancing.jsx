import { Button, MainHeading } from "../../components"
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCards } from '../../../redux/actions/freelancing'
import { Link } from "react-router-dom"
import Confirm from './Confirm'

const Freelancing = () => {

    ////////////////////////////// VARIABLES //////////////////////////////////////
    const dispatch = useDispatch()
    const { cards } = useSelector(state => state.freelancing)
    const names = [
        {
            name: 'Fiverr',
            link: 'https://www.fiverr.com/nishan_50?up_rollout=true'
        },
        {
            name: 'Upwork',
            link: 'https://www.upwork.com/freelancers/~0109f2bfc02d15f92d?viewMode=1'
        },
        {
            name: 'Freelancer',
            link: 'https://www.freelancer.com/u/Nishan50'
        },
    ]

    ////////////////////////////// STATES /////////////////////////////////////////
    const [openConfirm, setOpenConfirm] = useState(false)
    const [selectedWeb, setSelectedWeb] = useState({ name: '', link: '' })

    ////////////////////////////// USE EFFECTS ////////////////////////////////////
    useEffect(() => {
        dispatch(getCards())
    }, [])

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////


    const GigCard = ({ card }) => (
        <div
            className="w-[20rem] bg-lightGray p-[12px] rounded-[4px] flex flex-col gap-[1rem] "
        >
            <div className='flex flex-col gap-[4px] ' >
                <div className="w-full h-[12rem] rounded-t-[8px] " >
                    <img src={card?.image} alt="image" className="w-full h-full " />
                </div>
                <div className='flex flex-col gap-[4px] ' >
                    <h4 className="text-white text-[18px] " >{card?.title}</h4>
                    <p className="text-textGray" >{card?.description}</p>
                    <div className="w-full flex justify-end items-center " >
                        <h6 className="text-white capitalize font-light " >{card?.category}</h6>
                    </div>
                </div>
            </div>
            <button className='px-[8px] py-[2px] transition-all rounded-[4px] text-white border-[1px] border-white font-light hover:bg-orange hover:text-white ' >Visit</button>
        </div>
    )


    return (
        <motion.div
            name='freelancing'
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            className="flex flex-col gap-[3rem] "
        >

            {/* main heading */}
            <div className="w-full flex justify-center " >
                <MainHeading
                    forwardHeading='freelancing'
                    small
                    backHeading='freelancing'
                    detail=''
                />
            </div>


            <div className='flex flex-col gap-[3rem] ' >

                {/* lets work together */}
                <div className="relative w-full flex flex-col justify-center z-40 items-center md:gap-4 sm:px-[4rem] p-[1rem] " >
                    <h2 className="flex flex-col font-semibold lg:text-[48px] md:text-[44px] sm:tetx-[28px] text-[24px] text-center xs:w-full text-white z-40 " >
                    Diving into the Digital Realm - Let's Create and Conquer Together!
                    </h2>
                    <p className={` lg:w-[70%] w-full flex flex-col sm:gap-[1rem] gap-[8px] sm:text-[1rem] text-[14px] font-normal z-10  mb-4 text-gray mt-[10px] md:px-[100px] px-[30px] text-center `} >
                    As a dedicated web artisan, I'm all about crafting digital masterpieces that not only meet but exceed your wildest expectations. Armed with a robust toolkit including HTML, CSS, JavaScript, and powerhouses like React and Node.js, I'm primed and ready to tackle any web challenge that comes my way.

                        <br />
                        <br />
                        From sleek user interfaces that dazzle the eye to rock-solid backend systems that power your dreams, I take a holistic approach to web development. I believe in creating seamless user experiences that shine on every device, ensuring your vision comes to life flawlessly.
                        <br />
                        <br />
                        With my freelancing services, you're not just getting a coder—you're getting a partner. Expect prompt communication, efficient project management, and deliveries that are right on the money. I value transparency and understanding your needs inside out, so you can trust that the end result will be nothing short of extraordinary.


                        <br />
                        <br />
                        Whether you're dreaming of a simple landing page or a complex web application, let's join forces and make it happen. Together, we'll carve out a corner of the digital world that's uniquely yours. Reach out today, and let's embark on this journey to online greatness!


                    </p>
                    <Button color="black" background="orange" text="Let's Work" />
                </div>


                {/* Fiverr */}
                <div className="flex flex-col justify-start items-center gap-[1rem]" >

                    {/* cards */}
                    <div className="flex flex-wrap justify-between gap-[1rem] w-full sm:p-0 p-[2rem] " >
                        {
                            names.map((name, index) => (
                                <div
                                    onClick={() => { setOpenConfirm(true); setSelectedWeb({ name: name.name, link: name.link }) }}
                                    className="cursor-pointer flex justify-center items-center bg-lightGray text-white hover:transform hover:scale-105 hover:rotate-3 hover:shadow-lg transition-transform hover:z-[100] hover:text-orange text-[2rem] font-semibold sm:w-[30%] w-full h-[14rem] rounded-[6px] border-[1px] border-white hover:border-orange transition-border duration-300 ease-in-out"
                                    key={index}
                                >
                                    {name.name}
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

            <Confirm open={openConfirm} setOpen={setOpenConfirm} title={selectedWeb.name} link={selectedWeb.link} />

        </motion.div>
    )
}

export default Freelancing

