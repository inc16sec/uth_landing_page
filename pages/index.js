import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>UTHUPIA</title>
        <meta name="description" content="UTHUPIAS official website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="">
        <div className="min-h-screen bg-black flex flex-col justify-center relative">
            <h1 className=" text-7xl font-extrabold text-gray-300 text-center py-2 ">
              UTHUPIA
            </h1>


            <div className="relative py-3 sm:max-w-xl sm:mx-auto flex flex-col space-y-6">
              <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 text-center py-2">
                Coming Soon
              </h1>

              <p className="text-gray-50 text-center md:max-w-md font-light max-w-xs mx-auto ">
                We are working on a cool new project. If you're interested please
                leave your email below and we'll notify you.
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
