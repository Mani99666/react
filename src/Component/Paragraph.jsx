import React from 'react'

const Paragraph = ({title,para,btntext}) => {
  return (
    <>
      <div className='homepara'>
        <h1>{title}</h1>
        <p>{para}</p>
        <button>{btntext}</button>
      </div>
    </>
  )
}

export default Paragraph
