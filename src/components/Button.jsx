import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  const fontSizes = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
    xlarge: 'text-xl',
    "2xlarge": 'text-2xl'
  }

  return (
    <button type='button' className={`${fontSizes[size]} p-3 hover:drop-shadow-xl`} style={{ borderRadius, backgroundColor: bgColor, color }}>
      {text}
    </button>
  )
}

export default Button