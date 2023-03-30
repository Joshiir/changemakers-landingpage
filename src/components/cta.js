import Image from 'next/image';

const CTA = () => { 

    return (
        <div className="flex flex-col justify-center sm:max-w-screen-2xl w-full h-screen mx-auto">
            <div className='pl-8'>
                <Image
                    src="/monzo.png"
                    alt="Changemakers Hero Image"
                    width={75}
                    height={75}
                />
            </div>
            <header className="p-8">
                <h1>Saving Is Hard<br></br>So We Made It Simpler</h1>
                <p className="mt-8">Spend, save and manage your money, all in one place. Open a full<br></br> UK bank account from your phone, for free.</p>
            </header>
            <div className='p-8 sm:mb-16'>
                <form>
                    <input className="px-4 py-2 text-lg rounded-lg w-full sm:w-[420px] outline-0 focus:ring ring-white ring-offset-4 ring-offset-[#061F37]" type="text" placeholder="Enter Email Address"/>
                    <button className="px-6 py-2 mt-4 sm:mt-0 sm:ml-4 bg-rose-500 rounded-lg text-lg font-black text-white focus:ring ring-rose-500 ring-offset-4 ring-offset-[#061F37]">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default CTA;