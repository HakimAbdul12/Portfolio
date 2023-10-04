import React from 'react'
import Image from 'next/image'

export default function LanguageImage({from, alttext}) {
  return (
    <div>
      <Image
            alt={`${alttext}`}
            height={208}
            width={208}
            src={from}
            className="object-cover"
            priority={true}
          />
    </div>
  )
}
