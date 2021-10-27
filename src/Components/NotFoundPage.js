export function NotFoundPage() {
    
    return (
        <section font-ariel className="text-gray-600 body-font px-16">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">404 error
                <br className="hidden lg:inline-block"/>Page Not Found.
                </h1>
                <p className="mb-8 leading-relaxed">You should either <a href="#" className="font-bold hover:underline">go home</a> or search for what you need below.</p>
                <div className="flex justify-between">
                <form className="inline-flex border-2 border-indigo-500 h-10 w-6/12 focus:outline-none rounded text-md"><input type ="text" className="w-full px-2" placeholder=" Search here"></input></form>
                <button className="inline-flex justify-center bg-indigo-500 border-0 h-10 w-1/12 focus:outline-none rounded"><img className="w-px-32 m-2" src="https://cdn-icons-png.flaticon.com/512/639/639375.png"/></button>
                <button className="w-4/12"></button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded w-full" alt="hero" src="https://blog.adobe.com/en/publish/2019/06/27/media_203235b65b8dd5d67efd08a091f6aa518cb9d052.jpg?"/>
            </div>
            </div>
        </section>     
    );
}
