import { FaDiscord, FaFacebook, FaTwitter } from  "react-icons/fa"

const Footer = () => {

    return (
        <div className="w-full bg-white">
            <hr class="h-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />

            <div className="flex justify-center gap-8 py-3">
                <FaDiscord className="text-3xl text-gray-500 hover:text-indigo-500 transform duration-200"/>
                <FaTwitter className="text-3xl text-gray-500 hover:text-sky-500 transform duration-200"/>
                <FaFacebook className="text-3xl text-gray-500 hover:text-blue-700 transform duration-200"/>
            </div>
        </div>
    )
}

export default Footer;