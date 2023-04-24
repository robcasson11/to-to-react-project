import React from 'react'

const Footer = ({length}) => {

    const today = new Date();

  return (
    <footer>
            <h4>{length} list {length === 1 ? "item" : "items"}</h4>
            <p style={{fontSize:"0.5rem"}}>
                Copyright &copy; {today.getFullYear()}
            </p>
    </footer>
  )
}

export default Footer