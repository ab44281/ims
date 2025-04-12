import React from 'react'

const HeaderBox = ({type='title', title, subtext, user, children}:HeaderBoxProps) => {
  return (
    <>
      <div className="card">
        <h1 className="card-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
        </h1>
        <p className="card-subtext">{subtext}</p>
      </div>
      {/* <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtext">{subtext}</p>
        <div className="card-content">{children}</div>
      </div> */}
    </>
  )
}

export default HeaderBox