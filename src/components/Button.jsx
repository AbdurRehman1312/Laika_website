import React from 'react'

const Button = ({style, name}) => {
  return (
    <button type='button' className={`bg-dark-gradient py-3 px-6 text-white rounded-[6px] shadow ${style}`}>
        {name}
    </button>
  )
}

export default Button