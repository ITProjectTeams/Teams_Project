import React from 'react'
import "./hr.scss"

export default function Hr({className = ""}) {
  return (<hr className={`Hr ${className}`} />);
}
