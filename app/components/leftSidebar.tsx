import Link from 'next/Link'
import { TiHomeOutline } from "react-icons/ti";
import { Button } from '@/components/ui/button'
import { CiUser } from 'react-icons/ci'


const Logo = () => {
  return <Link href='/'>
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[40px] h-[40px] rounded cursor-pointer"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg> 
  </Link>
}

const Tabs = () => {
  const navigations = [
    {
      href: '/home',
      text: 'Home',
      icon: <TiHomeOutline />

    },
    {
      href: '/explore',
      text: 'Explore',
      icon: <TiHomeOutline />
    },
    {
      href: '/notifications',
      text: 'Notifications',
      icon: <TiHomeOutline />
    },
    {
      href: '/messages',
      text: 'Message',
      icon: <TiHomeOutline />
    },
    {
      href: '/bookmarks',
      text: 'Bookmarks',
      icon: <TiHomeOutline />
    },
  ]
  return <div className='pt-4'>
    {
      navigations.map((nav) => {
        return ( 
        <div className="flex flex-col py-1 space-y-1 text-[1.5em] text-extrabold" key={nav.href}>
          <Link href={nav.href} key={nav.href} className='flex leading-7 space-x-2 hover:rounded-full hover:bg-slate-300 p-4'>
            { nav.icon } <span>{nav.text}</span>
          </Link>
        </div>
      )
      })
    }
  </div>
}

const PostButton = () => {
  return <Button variant='post' size='post' className='rounded-full'>Post</Button>
}

const ProfileShortcut = () => {
  return <div className='flex leading-7 mt-auto mb-2'>

    <div className='text-2xl p-4 bg-slate-300 rounded-full mr-2'>
      <CiUser  className='text-black'/>
    </div>

    <div className='flex flex-col'>
      <div className='text-md text-bold'>no-one</div>
      <div className='text-sm text-gray-400'>@ibuilthecloud</div>
    </div>
    <div className='ml-auto'> ... </div>
  </div>;
}

export default function LeftSidebar() {
  return (
    <div className="flex flex-col min-h-screen border-slate-600 fixed top-0 w-[240px] px-4">
      <Logo />
      <Tabs />
      <PostButton />
      <ProfileShortcut />
    </div>
  )
}
