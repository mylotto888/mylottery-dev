import MintBox from "@/components/MintBox";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";

const Mint = () => {

    const BgStyle = {
        backgroundImage: 'url(/images/bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div style={BgStyle} className="bg-white h-screen">
            <NavBar />
            <div className="h-[82%] py-16">
                <MintBox />
            </div>
            <Footer />
        </div>
    )
}

export default Mint;