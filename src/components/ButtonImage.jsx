import React from 'react'

const ButtonImage = ({style, name, image}) => {
  return (
    <button type='button' className={`bg-dark-gradient py-3  text-white rounded-[6px] shadow ${style} text-nowrap flex items-center justify-center`}>
      <img src={image} alt="" width={35}/>
        {name}
    </button>
  )
}

export default ButtonImage