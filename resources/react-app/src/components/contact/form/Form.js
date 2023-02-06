import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import contactImage from '../../../assets/contact/contact-form-image.png'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import allService from '../../../service/services'
import useService from '../../../service/useService'
import FormModal from '../formModal/FormModal'

function Form() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [submitValue, setSubmitValue] = useState(true)

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Zorunlu alan'),
      surname: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Zorunlu alan'),
      message: Yup.string(5, 'Name must be at least 5 characters').required(
        'Zorunlu alan',
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const value = JSON.stringify(values, null, 2)
      const result = await allService.contactPost(value)
      if (result?.data.message === 'Success') {
        setSubmitValue(true)
        resetForm()
        setModal(true)
        setLoading(false)
      } else {
        setSubmitValue(false)
        resetForm()
        setModal(true)
        setLoading(false)
      }
    },
  })
  return (
    <div className="flex justify-center mt-24 mb-24 relative">
      {modal && <FormModal setModal={setModal} submitValue={submitValue} />}

      <div className="container">
        <div className="relative">
          <img
            className="absolute left-[30%] max-lg:left-[5%] max-lg:top-[165px] max-lg:w-[700px] max-md:left-0 max-sm:w-full max-sm:top-[300px]"
            src={contactImage}
            alt=""
          />
        </div>
        <div className="flex justify-around relative items-center mt-6 max-lg:flex-col">
          <div className="card">
            <p className="text-[#191919] text-4xl font-bold mb-7">Contact Us</p>
            <div className="bg-[#F2F1F1] w-[360px] h-[360px] flex justify-center items-center max-lg:mb-36 max-sm:w-[300px] max-sm:h-[300px]">
              <div className="leading-8 font-medium">
                <div className="flex items-center">
                  <GiRotaryPhone className="mr-2 text-2xl" /> +90 224 243 12 93
                </div>
                <br />
                <div className="flex  items-center">
                  <MdEmail className="mr-2 text-2xl" /> support@kozatekstil.com
                </div>
                <br />
                <div className="flex  items-center">
                  <ImBooks className="mr-2 text-2xl" /> Subject
                </div>
              </div>
            </div>
          </div>
          <div className="form max-sm:w-[85%]">
            <div className="w-[576px] h-[576px] bg-[#FFFFFF] shadow shadow-slate-300 rounded-4xl max-sm:w-[100%] max-sm:rounded-3xl max-sm:h-auto">
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
                      className={
                        formik.touched.name && formik.errors.name
                          ? 'bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full border-2 border-red-400'
                          : 'bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full'
                      }
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />

                    <input
                      className={
                        formik.touched.surname && formik.errors.surname
                          ? 'bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full border-2 border-red-400'
                          : 'bg-[#F2F1F1] w-10/12 h-12 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full'
                      }
                      id="surname"
                      name="surname"
                      type="text"
                      placeholder="Surname"
                      onChange={formik.handleChange}
                      value={formik.values.surname}
                    />

                    <textarea
                      className={
                        formik.touched.surname && formik.errors.surname
                          ? 'resize-none pt-12 bg-[#F2F1F1] w-10/12 h-60 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full border-2 border-red-400'
                          : 'resize-none pt-12 bg-[#F2F1F1] w-10/12 h-60 rounded-4xl px-10  py-2 mb-3 outline-none max-sm:w-full'
                      }
                      id="message"
                      name="message"
                      type="message"
                      placeholder="Type Your Message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />

                    <div className="flex justify-end w-full px-10 max-sm:px-1">
                      <button
                        className="w-2/6 h-12 bg-[#F2F1F1] rounded-4xl hover:bg-[#E9E9E9] hover:shadow-sm flex justify-center items-center"
                        type="submit"
                      >
                        {loading ? (
                          <svg
                            aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        ) : (
                          <p>Send</p>
                        )}
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
