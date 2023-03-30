import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai"
import { useState } from "react"

const NavBar = () => { 
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl">
            <div className="flex justify-between items-center h-full w-full px-8">
                <div>
                    <h1>Heading</h1>
                </div>
                <div>
                    <ul className="hidden sm:flex">
                        <Link href='/'>
                            <li className="uppercase hover:underline underline-offset-8">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-4 uppercase hover:underline underline-offset-8">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-4 uppercase hover:underline underline-offset-8">Product</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-4 uppercase hover:underline underline-offset-8">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleOpen} className="sm:hidden">
                    <AiOutlineMenu size={30} />
                </div>
            </div>
            <div className={
                isOpen 
                ? "fixed top-0 left-0 w-full h-screen md:hidden bg-slate-100 ease-in duration-500"
                : "fixed top-0 left-[100%] w-full h-screen md:hidden bg-slate-100 ease-out duration-500"
            }>
                <div className="flex items-center h-24 justify-end p-8">
                    <div onClick={handleOpen}>
                        <AiOutlineClose size={30} />
                    </div>
                </div>
                <div>
                    <ul className="flex-col m-8">
                        <Link href='/'>
                            <li onClick={() => setIsOpen(false)} className="mb-4 py-4 text-center uppercase hover:underline underline-offset-8">Home</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setIsOpen(false)} className="mb-4 py-4 text-center uppercase hover:underline underline-offset-8">About</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setIsOpen(false)} className="mb-4 py-4 text-center uppercase hover:underline underline-offset-8">Product</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setIsOpen(false)} className="py-4 text-center uppercase hover:underline underline-offset-8">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex m-10 p-10 justify-around">
                    <AiOutlineInstagram size={30} className="cursor cursor-pointer" />
                    <AiOutlineFacebook size={30} className="cursor cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor cursor-pointer" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;