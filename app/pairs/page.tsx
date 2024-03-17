'use client'

import { useParams } from "next/navigation"
import { notFound } from 'next/navigation'

export default function NewYork() {
  const params = useParams()
  console.log('1'.repeat(100))
  
  console.log(params)

  return notFound()

}
