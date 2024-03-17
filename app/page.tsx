import Image from "next/image";
import Nav from './components/nav'
import LeftSidebar from './components/leftSidebar'
import { type NavLinkProps } from './components/nav'

const links: NavLinkProps[] = [
  {
    href: '/',
    text: 'Home',
    icon: <Image src="/home.svg" alt="Home" width={24} height={24} />,
  },
  {
    href: '/about',
    text: 'About',
    icon: <Image src="/about.svg" alt="About" width={24} height={24} />,
  },
  {
    href: '/contact',
    text: 'Contact',
    icon: <Image src="/contact.svg" alt="Contact" width={24} height={24} />,
  },
]

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex min-h-screen items-center justify-between bg-white">
      <LeftSidebar />
      <div className='border-2 min-h-[2300px] text-4xl pl-[280px] pt-20'> 
        <video width="820" height="240" controls preload="none">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
    </main>
  );
}
