import Image from "next/image";

const FAQ = () => { 

    return (
        <ul className="p-8 sm:max-w-screen-2xl mx-auto">
            <li className="hidden md:flex my-8 justify-center">
                <div className="flex flex-col p-8 w-[425px] bg-[#1E788C] rounded-l-2xl">
                    <h2>
                        How does a savings account work?
                    </h2>
                    <p className="mt-4 text-lg leading-loose">
                        A savings account is a place to keep money so that it earns interest. Here’s a brief guide on how savings accounts work!
                    </p>
                    <button className="px-6 py-2 w-fit mt-4 bg-rose-500 rounded-lg text-lg font-black text-white focus:ring ring-rose-500 ring-offset-4 ring-offset-[#061F37]">Read More</button>
                </div>
                <div className="relative w-[768px] overflow-hidden rounded-r-2xl">
                    <Image 
                        src="/phone-image.png" 
                        alt="Phone Image"
                        fill
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </li>
            <li className="flex flex-col md:hidden my-8 justify-center">
                <div className="relative h-[312px] overflow-hidden rounded-t-2xl">
                    <Image 
                        src="/phone-image.png" 
                        alt="Phone Image"
                        fill
                        style={{objectFit: 'cover'}}
                    />
                </div>
                <div className="flex flex-col p-8 bg-[#1E788C] rounded-b-2xl">
                    <h2>
                        How does a savings account work?
                    </h2>
                    <p className="mt-4 text-lg leading-loose">
                        A savings account is a place to keep money so that it earns interest. Here’s a brief guide on how savings accounts work!
                    </p>
                    <button className="px-6 py-2 w-fit mt-4 bg-rose-500 rounded-lg text-lg font-black text-white focus:ring ring-rose-500 ring-offset-4 ring-offset-[#061F37]">Read More</button>
                </div>
            </li>
        </ul>
    )
}

export default FAQ;