import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
  console.log('1'.repeat(100))
  console.log(NextResponse.redirect)

  //console.log(request)
  //console.log(request.form)
  //console.log(request.url)
  //console.log(request.headers)
  //console.log(request.method)
  console.log(request.body)
  //console.log(request.json())

  return NextResponse.redirect(new URL('/', request.url))
}

export async function POST(request: NextRequest, response: NextResponse) {
  console.log(await request.formData())
  return NextResponse.json({})
}
