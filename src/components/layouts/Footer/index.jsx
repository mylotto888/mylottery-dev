import { FaDiscord, FaFacebook, FaTwitter } from  "react-icons/fa"

const Footer = () => {

    return (
        <div className="fixed bottom-0 w-full">
            <div className="flex justify-center gap-8 py-3">
                <FaDiscord className="text-3xl text-gray-500 hover:text-indigo-500 transform duration-200"/>
                <FaTwitter className="text-3xl text-gray-500 hover:text-sky-500 transform duration-200"/>
                <FaFacebook className="text-3xl text-gray-500 hover:text-blue-700 transform duration-200"/>
            </div>
        </div>
    )
}

export default Footer;