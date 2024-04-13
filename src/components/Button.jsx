import React from 'react'

const Button = ({style, name}) => {
  return (
    <button type='button' className={`bg-dark-gradient3 py-3  text-white rounded-[6px] shadow ${style} text-nowrap `}>
        {name}
    </button>
  )
}

export default Button