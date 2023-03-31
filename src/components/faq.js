import Image from "next/image";

const FAQ = () => { 

    return (
        <ul className="p-8 sm:max-w-screen-2xl mx-auto">
            <li className="flex p-8 bg-[#1E788C]">
                <div className="flex flex-col w-[416px]">
                    <h2>
                        How does a savings account work?
                    </h2>
                    <p>
                        A savings account is a place to keep money so that it earns interest. Here’s a brief guide on how savings accounts work!
                    </p>
                </div>
                <div className="relative">
                    <Image src="/phone-image.png" alt="/" width={500} height={200} className="object-cover" />
                </div>
            </li>
        </ul>
    )
}

export default FAQ;