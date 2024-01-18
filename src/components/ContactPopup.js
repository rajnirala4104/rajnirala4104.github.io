import React, { useContext } from 'react'
import { CloseBtnIcon } from '../icon'
import { ContactPopupContext } from '../page/Home'



export const ContactPopup = () => {

  const { contactPopup, setContactPopup } = useContext(ContactPopupContext)
  return (
    <React.Fragment>
      <section className='fixed z-20 top-0 w-full h-screen bg-[rgba(0,0,0,0.65)] flex justify-center items-center'>

        <div className='w-[70%] h-[50%] relative bg-white rounded-md flex justify-center items-center'>
          <h1>Contact popup</h1>
          <CloseBtnIcon eventHandler={() => setContactPopup(!contactPopup)} classes={'cursor-pointer text-3xl absolute top-3 left-[14rem] text-gray-700'} />
        </div>
      </section>
    </React.Fragment >
  )
}
