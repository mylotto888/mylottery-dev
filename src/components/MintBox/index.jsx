const MintBox = () => {

    return (
        <div className="text-gray-900 mt-12 w-full flex justify-center">
            <div className="card w-96 rounded-md bg-white shadow-lg">
                <figure className="flex items-center justify-center h-full py-10 border-2 border-red-500 bg-white">
                    <img src="/logo192.png" className="boarder border-red-500 w-3/5" alt="MyLotte" />
                </figure>
                <div className="card-body flex justify-center gap-8">
                    <div className="flex px-5 gap-10">
                        <div className="flex flex-col tracking-wider gap-1">
                            <span className="text-gray-400">Remaining</span>
                            <span className="">568</span>
                        </div>
                        <div className="flex flex-col tracking-wider gap-1">
                            <span className="text-gray-400">Price</span>
                            <span>🍀 0.01</span>
                        </div>
                        <div className="py-2 flex item-center">
                            <button className="btn btn-sm text-red-500 bg-gray-300 border-none hover:text-red-600 hover:bg-gray-300">live</button>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="btn btn-block bg-red-500 hover:bg-red-600 border-none">mint</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintBox;