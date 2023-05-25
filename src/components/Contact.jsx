import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//canvas
import { EarthCanvas } from './canvas'

// template_b79tnlf, service_s5b9giw, q3C6XOZ3RQF44Qhpg
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_s5b9giw",
      "template_b79tnlf",
      { 
        from_name: form.name,
        to_name: "Josh",
        from_email: form.email,
        to_email: "joshualevitas@gmail.com",
        message: form.message
      },
      "q3C6XOZ3RQF44Qhpg"
    )
    .then(() => {
      setLoading(false);
      alert("Thanks for reaching out! I'll get back to you soon.")
      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again.")
    });

  };


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", .2, 1)} className="flex-[.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>[Get in touch]</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="[What's your name?]" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email" 
              name="email" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="[What's your email?]" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7" 
              name="message" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="[What do you want to say?]" />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            { loading ? "Sending..." : "Send" }
          </button>

        </form>
      </motion.div>

      <motion.div 
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", .2, .1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")