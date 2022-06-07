import Image from 'next/image'

//BACKGROUND IMAGE SOURCE "https://unsplash.com/photos/iLHDO19h0ng"
export default function Contact() {
    function validateFormWithJS(value) {
        // Stop the form from submitting and refreshing the page.
         event.preventDefault()

        const name = value.target.name.value
        const email = value.target.email.value
        const message = value.target.message.value

        console.log(name)

        if (!name) {
        alert('Please enter your name.')
        console.log(email + message)
        return false
        }
    }
    return (
        <div>
            <main className="flex flex-row items-center justify-center w-full flex-1 text-center bg-contact-bg bg-cover py-32 px-16">
                <div className="basis-1/2">
                    <Image
                        src={"https://firebasestorage.googleapis.com/v0/b/tubetest-886c6.appspot.com/o/landing_page%2Fbg_image_1.png?alt=media&token=487c7d47-8930-45c9-a395-ff590f9885aa"}
                        alt="A screenshot of the mobile app."
                        // layout="fill"
                        width={1175} //automatically provided
                        height={1448} //automatically provided
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                </div>

                <div
                    className="bg-black basis-1/2 py-16 px-16" 
                >
                    <h1 className="font-lexend-tera text-2xl font-bold text-white basis-1/2 pb-16">
                        CONTACT US
                    </h1>
                    <form 
                        className="space-y-16" 
                        method="post" 
                        onSubmit={validateFormWithJS}
                    >
                        <input 
                            className="appearance-none bg-transparent border-b border-gray-500 w-full font-lexend-tera text-white mr-3 py-2 leading-tight focus:outline-none"
                            type="text" 
                            id="name" 
                            name="name"
                            placeholder="Your name"
                            aria-label="Full name"
                        />
                        <input 
                            className="appearance-none bg-transparent border-b border-gray-500 w-full font-lexend-tera text-white mr-3 py-2 leading-tight focus:outline-none"
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your email"
                            aria-label="Email"
                        />
                        <textarea 
                            className="appearance-none bg-transparent border-b border-gray-500 w-full md:leading-relaxed leading-relaxed text-xs md:text-xs font-lexend-tera text-white mr-3 py-2 focus:outline-none"
                            type="text" 
                            rows="3"
                            id="message" 
                            name="message" 
                            placeholder="Your message"
                            aria-label="Message"
                        />
                        <button
                        className="bg-white hover:bg-gray-300 font-lexend-tera text-black font-bold py-2 px-8" 
                        type="submit"
                        >Send Message</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
