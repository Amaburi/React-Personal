import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// 
// 
const Contact = () => {
  let timerInterval;
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
     message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    // Go to Emailjs then create new service get that id then make your template and leave as it be copy the id too and last go to your profile then copy public key
    emailjs.send('service_cvy342o', 'template_6tfpbyi', {
      from_name: form.name,
      to_name: 'Jy',
      from_email: form.email,
      to_email: 'cryptoniac25@gmail.com',
      message: form.message
    }, 'qegHFdZGuA1a7lSx8').then(()=>{
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Your Message successfully sent',
        showConfirmButton: false,
        timer: 3000,
        text: 'Thanks For Contacting me i will reply it as soon as possible'
      })     
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error)=>{
      setLoading(false);
      console.log(error);
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Something went wrong. Please try again later.',
      // });
      Swal.fire({
        title: 'Error Has Occured Please Try again Later!!!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left","tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch With Me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Your Name'
              className=' py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium outlined-none bg-tertiary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              className=' py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium outlined-none bg-tertiary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="9"
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter Your Message'
              className=' py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium outlined-none bg-tertiary'
            />
          </label>
          <button
            type='submit'
            className='bg-teritary py-3 px-8 outline-none w-fit text-white-100 font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending....' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right","tween", 0.2, 1)}
        className='xl: flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")