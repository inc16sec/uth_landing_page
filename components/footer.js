import Link from 'next/link'


export default function Footer() {
    return (
        <footer className="space-y-4 sm:space-y-0 flex flex-col sm:flex-row flex-nowrap items-center justify-between w-full border-t border-gray-700 bg-black pb-6 pt-6 pl-8 pr-8">
        <p className=" text-white">
          © <a className="font-lexend-tera text-white text-sm">UTHUPIA</a>. All rights reserved.
        </p>

        <div className="flex flex-row items-center justify-center space-x-4"> 
          <Link href="/contact">
            <a className="text-gray-300 text-sm">Contact</a>
          </Link>
           
          <Link href="/privacy">
          <a className="text-gray-300 text-sm">Privacy Policy</a>
          </Link>

          <Link href="/terms">
          <a className="text-gray-300 text-sm">Terms of Use</a>
          </Link>

          <Link href="/legal">
          <a className="text-gray-300 text-sm">Legal</a>
          </Link>
        </div>
        
      </footer>
    )
}