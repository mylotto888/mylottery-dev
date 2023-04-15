import moment from "moment";
import HeaderText from "./components/HeaderText";
import CountDown from "./components/countdown";

// const BG = require('/images/background.png')/

const headerBgStyle = {
    backgroundImage: 'url(/images/bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

const Header = () => {

    return (
        <div id="header" style={headerBgStyle} className="text-gray-800">
            <HeaderText />
            <CountDown 
                date={moment('2023-04-21T10:00:00').toDate()}
            />
            <hr class="h-1 my-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />
        </div>
    )
}

export default Header;