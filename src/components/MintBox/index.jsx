const MintBox = () => {

    return (
        <div className="text-gray-900 h-4/5 w-full flex justify-center">
            <div className="card w-96 rounded-md bg-gray-700">
                <figure className="flex items-center justify-center h-full py-10 border-2 border-red-500 bg-white">
                    <img src="/logo192.png" className="boarder border-red-500 w-3/5" alt="MyLotte" />
                </figure>
                <div className="card-body">
                    <div>
                        <div>
                            <span>Remaining</span>
                            <span>568</span>
                        </div>
                        <div>
                            <span>Price</span>
                            <span>🍀 0.01</span>
                        </div>
                        <div>
                            <button>live</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintBox;