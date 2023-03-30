const Testimonials = () => { 

    return (
        <div className="flex flex-col justify-center items-center sm:max-w-screen-2xl w-full mb-32 mx-auto">
            <div className="p-4 m-8">
                <h2>Hear from others just like you!</h2>
            </div>
            <div className="w-full">
                <ul className="flex flex-wrap justify-evenly items-center">
                    <li className="flex flex-col shrink-0 p-8 m-8 justify-between h-[234px] w-fit sm:w-[416px] bg-[#1E788C] rounded-2xl hover:scale-110 transition ease-in-out shadow-sm hover:shadow-xl">
                        <p className="text-xl tracking-wider">Emma</p>
                        <p className="text-lg tracking-wider">@embda2</p>
                        <p className="text-xl tracking-wider leading-relaxed">Just checked my savings pot and rolling in that cash #OneUp</p>
                    </li>
                    <li className="flex flex-col shrink-0 p-8 m-8 justify-between h-[234px] w-fit sm:w-[416px] bg-[#1E788C] rounded-2xl hover:scale-110 transition ease-in-out shadow-sm hover:shadow-xl">
                        <p className="text-xl tracking-wider">Gary</p>
                        <p className="text-lg tracking-wider">@garymt901</p>
                        <p className="text-xl tracking-wider leading-relaxed">Might actually know how to keep my money now 😂 #OneUp</p>
                    </li>
                    <li className="flex flex-col shrink-0 p-8 m-8 justify-between h-[234px] w-fit sm:w-[416px] bg-[#1E788C] rounded-2xl hover:scale-110 transition ease-in-out shadow-sm hover:shadow-xl">
                        <p className="text-xl tracking-wider">Dave</p>
                        <p className="text-lg tracking-wider">@dve213</p>
                        <p className="text-xl tracking-wider leading-relaxed">Wonder how much money I'll have by the end of year #OneUp</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;