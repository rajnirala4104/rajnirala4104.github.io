import React, { useContext } from 'react'
import { CloseBtnIcon } from '../icon'
import { ContactPopupContext } from '../contexts/indext'
import { Icons } from './sub-components'

export const ContactPopup = () => {

  const { contactPopup, setContactPopup } = useContext(ContactPopupContext)
  return (
    <React.Fragment>
      <section className='fixed z-20 top-0 w-full h-screen bg-[rgba(0,0,0,0.65)] flex justify-center items-center'>
        <div className='w-[75%] h-[50%] relative bg-white rounded-md flex justify-center items-center p-2'>
          <CloseBtnIcon eventHandler={() => setContactPopup(!contactPopup)} classes={'cursor-pointer text-3xl absolute top-3 left-[85%] lg:left-[95%] text-gray-700'} />
          <div className='flex flex-col space-y-3 justify-center items-center'>
            <h3 className='text-gray-800 text-center'>
              🤔 Thinking... the design, till then use these icons
            </h3>
            <Icons color="white" classes="text-3xl " />
          </div>
        </div>
      </section>
    </React.Fragment >
  )
}
