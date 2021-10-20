//This is an example component

//You must export components like this. The name must be in CamelCase and it should self describe the component.
export function Dummy() {
    return (
    <div id="container">
        {/*Under the className attribute use appropriate TailWindCSS as demonstrated below for styling*/}
        <div className="cursor-pointer flex flex-row justify-center w-screen h-screen place-items-center">
            <div className="bg-indigo-300 p-8 rounded-lg hover:bg-indigo-600 hover:text-white hover:shadow-2xl transition duration-300">
                <div className="text-2xl">Hello Universe!</div>
            </div>
        </div>
    </div>
    );
} 
        
