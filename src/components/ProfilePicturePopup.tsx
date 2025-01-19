import React, { useContext } from 'react'
import { ALL_IMAGES } from '../assets'
import { ProfilePicturePopupContext } from '../contexts'
import { CloseIcon } from '../icons'

const ProfilePicturePopup: React.FC = () => {

  const { setProfilePicturePopupOnOff, profilePicturePopupOnOff } = useContext(ProfilePicturePopupContext)

  return (
    <div className='z-50 w-[100%] h-[100vh] absolute top-0 flex justify-center items-center backdrop-blur-sm bg-gradient-to-t from-black to-transparent'>
      <div className='bg-white border-black rounded-full relative'>
        <span
          onClick={() => setProfilePicturePopupOnOff(!profilePicturePopupOnOff)}
          className='absolute top-2 right-1 text-3xl cursor-pointer hover:text-gray-700'>
          <CloseIcon />
        </span>
        <img src={ALL_IMAGES.rajniralaProfilePic} alt="rajnirala" className='border-4 border-transparent rounded-full' />
      </div>
    </div>
  )
}

export default ProfilePicturePopup