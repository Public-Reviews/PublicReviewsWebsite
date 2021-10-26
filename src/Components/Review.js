export function Review() {

    return (
        <div font-ariel className="grid grid-rows-1 justify-center">
            <div className="text-center text-lg font-bold p-12">
            <h3 className="text-2xl text-blue-600">Browse Reviews by Category</h3>
            </div>
            <div className="px-16 py-6 grid grid-cols-3 gap-20 section">
                <div className="business inline-block box-border rounded-lg border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/776/776443.png" title="Freepik" className="w-40"></img>
                    <p className="text-center font-bold">Restaurant</p>
                </div>
                <div className="business inline-block box-border rounded-lg  border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/897/897061.png" className="w-40"></img>
                    <p className="text-center font-bold">Hotel</p>
                </div>
                <div className="business inline-block box-border rounded-lg  border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/4230/4230680.png" className="w-40"></img>
                    <p className="text-center font-bold">Hospital</p>
                </div>
                <div className="business inline-block box-border rounded-lg  border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png" className="w-40"></img>
                    <p className="text-center font-bold">Shopping</p>
                </div>
                <div className="business inline-block box-border rounded-lg  border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/5888/5888379.png" className="w-40"></img>
                    <p className="text-center font-bold">Beauty and Spa</p>
                </div>
                <div className="business inline-block box-border rounded-lg  border-4 w-300 p-4 hover:bg-gray-500 hover:text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/2519/2519215.png" className="w-40"></img>
                    <p className="text-center font-bold">Gym</p>
                </div>
            </div>
            
        </div>
    );
}
