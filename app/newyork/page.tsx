'use client'

import { useSearchParams } from "next/navigation"

export default function NewYork() {
  const search = useSearchParams()
  console.log('1'.repeat(100))
  

  return <h1>London
    { Object.keys(search).join("/") }
</h1>

}
