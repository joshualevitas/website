import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", .5 * index, .75)} className="w-full green-pink-gradient p-[10px] rounded-[20px] shadow-card">
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>


        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Who I am</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", .1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        My name is Josh Levitas, and I'm a Master's student studying computer science at Northwestern University.
        I received a BA in computer science from Northwestern as well with a minor in data science. My academic 
        interests include natural language processing, statistical language modeling, machine learning, and web development.
        I love learning and am actively searching opportunities to grow my skills and learn from others.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")