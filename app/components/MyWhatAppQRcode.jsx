"use client"
import React from 'react'
import QRCode from 'qrcode.react'

export default function MyWhatAppQRcode() {
    const phoneNumber = `+233593821578`
    const message = "Hello Hakim!"
    const whatsAppLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
  return (
    <div>
      <QRCode value={whatsAppLink}/>
      <p className={`md:text-blue-700 sm:text-green-800 text-red-800`}>Hello</p>
    </div>
  )
}
