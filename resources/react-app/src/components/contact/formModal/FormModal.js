import React from 'react'
import { FiCheckSquare, FiAlertTriangle } from 'react-icons/fi'
function FormModal({ submitValue, setModal }) {
  return (
    <div className="absolute bottom-[30%] z-20 w-96 h-auto max-sm:w-72 max-sm:bottom-[15%] bg-white border-8 border-gray-300 rounded-md flex justify-center flex-col items-center shadow-2xl  shadow-gray-800">
      {submitValue ? (
        <>
          <div className="bg-green-500 rounded-full p-5 border-4 border-gray-300 m-4">
            <FiCheckSquare className="text-2xl text-white" />
          </div>
          <div className="flex justify-center items-center flex-col p-2">
            <p className="text-2xl font-semibold p-2">Thank you!</p>
            <p className="text-md p-2">Your submission has been sent.</p>
          </div>
          <button
            onClick={() => setModal(false)}
            className="w-2/6 h-12 bg-[#F2F1F1] rounded-4xl hover:bg-[#E9E9E9] hover:shadow-sm m-2"
          >
            Close
          </button>
        </>
      ) : (
        <>
          <div className="bg-red-500 rounded-full p-5 border-4 border-gray-300 m-4">
            <FiAlertTriangle className="text-2xl text-white" />
          </div>

          <div className="flex justify-center items-center flex-col p-2">
            <p className="text-2xl font-semibold p-2">Oops!</p>
            <p className="text-md p-2">
              An error occurred during your submission.
            </p>
          </div>
          <button
            onClick={() => setModal(false)}
            className="w-2/6 h-12 bg-[#F2F1F1] rounded-4xl hover:bg-[#E9E9E9] hover:shadow-sm m-2"
          >
            Close
          </button>
        </>
      )}
    </div>
  )
}

export default FormModal
