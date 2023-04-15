import { LogoSquare, headerBgStyle } from "@/styles/const";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    return (
        <div style={headerBgStyle} className="bg-red-600 w-screen h-screen flex justify-center items-center text-center">
            <div className="card bg-white text-gray-700 lg:w-1/2">
                <figure className="pt-5"> 
                    <img src={LogoSquare} className="w-20"/>
                </figure>
                <div className="card-body lg:w-1/2 self-center">
                    <text className="text-3xl uppercase tracking-wider">Register</text>
                    <div className="flex flex-col gap-3 justify-center uppercase mt-3 tracking-wide">
                        <button className="btn btn-block bg-gray-300 hover:bg-gray-500 text-gray-900 border-none">Referal Code</button>
                        <button className="btn btn-block bg-red-500 hover:bg-red-600 border-none">Connect Wallet</button>
                        <button className="btn btn-block flex gap-3">
                            <FaGoogle />
                            Sign up with google
                        </button>
                        <div className="divider">
                            OR
                        </div>
                        <div className="flex flex-col gap-5">
                            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-block bg-red-500 hover:bg-red-600 border-none">Register</button>
                            <span className="normal-case text-gray-700">Already Register? <Link href={"/auth/login"} className="underline hover:text-red-700">Sign In</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;