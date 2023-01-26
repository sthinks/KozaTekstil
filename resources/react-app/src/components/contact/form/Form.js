import React from 'react'
import { useFormik } from 'formik'
import contactImage from '../../../assets/contact/contact-form-image.png'
function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className="flex justify-center mt-24 mb-24">
      <div className="container">
        <div className="relative">
          <img className="absolute left-[30%]" src={contactImage} alt="" />
        </div>
        <div className=" flex justify-around relative items-center mt-6">
          <div className="card shadow shadow-slate-100">
            <p className="text-[#191919] text-4xl font-bold">Contact Us</p>
            <div className="bg-[#F2F1F1] w-[360px] h-[360px] flex justify-center items-center ">
              <div className="leading-10 font-medium">
                +90 224 243 12 93 <br /> support@kozatekstil.com <br /> Subject
              </div>
            </div>
          </div>
          <div className="form">
            <div className="w-[576px] h-[576px] bg-[#FFFFFF] shadow shadow-slate-300 rounded-4xl">
              <div className="">
                <p className="px-10  py-2 mb-3 ">Get In Touch</p>
                <div className="form-content">
                  <form
                    className="flex justify-center items-center flex-col"
                    onSubmit={formik.handleSubmit}
                  >
                    <input
                      className="bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />

                    <input
                      className="bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Surname"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />

                    <textarea
                      className="bg-[#F2F1F1] w-10/12 h-60 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Type Your Message"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <button
                      className="w-1/4 h-12 bg-[#F2F1F1] rounded-4xl"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
