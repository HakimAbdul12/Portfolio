"use client"
import React from 'react'

export default function Button({title}) {
  return (
    <div>
      <button className={` border px-8 py-2 text-slate-100 rounded-lg hover:animate-bounce duration-500 ease-linear`}>{title}</button>
    </div>
  )
}

