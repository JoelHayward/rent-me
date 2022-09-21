import React from 'react'
import home from './Contact.module.css'

export default function Contact() {
  return (
   
    <div className={home.contact}>
    <span className={home.callUs}>
      Still can’t find what you’re looking for? Give us a call on
      <span className={home.phoneNumber}>+64 9 391 4642</span>
    </span>
    <span className={home.weSpeak}>
      We speak: English, Hungarian, Chinese, Japanese, Persian, Korean, Kiwi
    </span>
  </div>
  )
}
