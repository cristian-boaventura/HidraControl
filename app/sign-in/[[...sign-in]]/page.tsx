'use client'

import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'
import background from '@/public/auth-bg.jpg'

export default function Signin() {
  return (
    <main className="h-screen flex align-middle justify-center">
      <div className="self-center">
        <SignIn />
      </div>
      <div className="w-full h-full self-center max-md:hidden">
        <Image
          src={background}
          alt="background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </main>
  )
}
