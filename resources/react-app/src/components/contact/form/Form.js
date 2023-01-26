import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import contactImage from '../../../assets/contact/contact-form-image.png'
function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2).required('Zorunlu alan'),
      surname: Yup.string().min(2).required('Zorunlu alan'),
      message: Yup.string().required('Zorunlu alan'),
    }),
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
              <div className="p-6">
                <div className="flex justify-start px-12">
                  <p className="py-5 mb-3 text-xl font-semibold">
                    Get In Touch
                  </p>
                </div>
                <div className="form-content">
                  <form
                    className="flex justify-center items-center flex-col relative"
                    onSubmit={formik.handleSubmit}
                  >
                    <input
                      className="bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name && (
                      <p className="absolute top-[-35px] right-0 p-2 rounded-form-error bg-slate-400">
                        {formik.errors.name}
                      </p>
                    )}
                    <input
                      className="bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="surname"
                      name="surname"
                      type="text"
                      placeholder="Surname"
                      onChange={formik.handleChange}
                      value={formik.values.surname}
                    />
                    {formik.errors.surname && (
                      <p className="absolute top-[40px] right-0 p-2 rounded-form-error bg-slate-400">
                        {formik.errors.surname}
                      </p>
                    )}

                    <textarea
                      className="bg-[#F2F1F1] w-10/12 h-60 rounded-4xl px-10  py-2 mb-3 outline-none"
                      id="message"
                      name="message"
                      type="message"
                      placeholder="Type Your Message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                    {formik.errors.message && (
                      <p className="absolute top-[120px] right-0 p-2 rounded-form-error bg-slate-400">
                        {formik.errors.message}
                      </p>
                    )}
                    <div className="flex justify-end w-full px-10">
                      <button
                        className="w-2/6 h-12 bg-[#F2F1F1] rounded-4xl hover:bg-[#E9E9E9] hover:shadow-sm"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
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
