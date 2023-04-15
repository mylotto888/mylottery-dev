const Mint = () => {
    return  (
        <div className="flex flex-col text-center py-4 gap-14 text-gray-800 tracking-wider">
            <p>
            <a href="#" className="text-red-500 hover:text-red-600">7 $SOL</a> will be the GRAND PRICE for this Round. <br/>
            Grab Your Lucky Number By Minting NFT-Lottery Before Too Late.
            </p>
            <div>
                <button className="btn bg-red-500 hover:bg-red-600 border-none">Mint Now</button>
            </div>
            <p className="">
            Winning Number will be the last 3 Digits of BTC Closing Price Data of COINMARKETCAP <br/>
            at 6:30 AM (MMT) every MONDAY.
            </p>

            <hr class="h-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />
            
        </div>
    )
}

export default Mint;