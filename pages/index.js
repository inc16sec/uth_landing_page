import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black bg-cover bg-phone-02">
      <main className="backdrop-filter backdrop-blur-lg">


        <div className="min-h-screen flex flex-col justify-center relative">

            <div className="flex flex-no-wrap flex-col md:flex-row items-center justify-between md:pt-32 pt-16 pb-16 pr-16 md:pr-32 pl-16 md:pl-32">

            <Image
                src={"https://firebasestorage.googleapis.com/v0/b/tubetest-886c6.appspot.com/o/landing_page%2Fbg_image_2.png?alt=media&token=1299e329-13e9-4cd1-9133-875da4f6616c"}
                alt="A second screenshot of the mobile app."
                // layout="fill"
                width={1029} //automatically provided
                height={1405} //automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />

              <div className="flex flex-no-wrap flex-col items-start space-y-8 md:pl-16 pt-16">
                <p className="font-bold md:leading-relaxed leading-relaxed md:text-5xl text-3xl text-white">
                    Explore and share your best creative work in a place where you'll feel understood.
                </p>
                <p className="font-lexend-tera text-gray-300 text-xs">
                    UTHUPIOS
                </p>
              </div>
              
            </div>

            <div className="flex flex-no-wrap flex-col md:flex-row items-center justify-between pt-16 pb-16 pr-16 md:pr-32 pl-32">

              <div className="flex flex-no-wrap flex-col items-start space-y-4">
                <p className="text-xl text-white pr-16">
                    ''I find social media today so hard to navigate. From Instagram attention seekers to the angry users of Twitter, but what is even worse is that the algorithms favours not talent and creativity, but loudness and money making.''
                </p>
                <p className="font-lexend-tera text-gray-300 text-xs">
                    UTHUPIOS
                </p>
              </div>

              
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


            <h1 className=" text-7xl font-extrabold text-gray-300 text-center py-2 ">
              UTHUPIA
            </h1>


            <div className="relative py-3 sm:max-w-xl sm:mx-auto flex flex-col space-y-6">
              <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 text-center py-2">
                Coming Soon
              </h1>

              <p className="text-gray-50 text-center md:max-w-md font-light max-w-xs mx-auto ">
               {"We are working on a cool new project. If you're interested please leave your email below and we'll notify you."}
              </p>
              <div className="flex justify-center pt-6">
                <div className=" flex md:space-x-3 bg-gray-800 rounded-md p-2 justify-between flex-col md:flex-row">
                  <input type="text" className="bg-transparent flex-1 focus:outline-none text-gray-50 text-center md:text-left pl-3 p-3 w-72"
                    placeholder="enter your email"
                  />
                  <input type="submit" className=" bg-white rounded p-2 px-6 font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-500 hover:text-white transform duration-200"
                    value="Notify Me"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Thank you for your interest.
              </p>
            </div>
            <div className=" pt-10 md:absolute md:bottom-6 md:right-10 text-gray-300 space-x-4 justify-center w-full md:w-auto flex">
              <a href="https://twitter.com/uthupia" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>
      </main>
    </div>
  )
}
