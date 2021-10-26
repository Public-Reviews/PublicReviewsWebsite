export function SignUp() {
    
    return (
        <div font-ariel className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto w-auto" src="https://www.decolore.net/wp-content/uploads/2019/10/undraw.png" alt="Checking Reviews"/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">Already registered? &nbsp;
                    <a href="#" className="font-bold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500">Sign in</a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-transparent py-8 px-6 shadow rounded sm:px-10">
                    <form className="mb-0 space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email"  placeholder=" email@example.com" className="rounded-lg w-full" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password"  placeholder=" xxx..xxx" className="rounded-lg  w-full" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input class="cursor-pointer"id="terms-and-privacy" name="terms-and-privacy" type="checkbox"/>
                            <label for="terms-and-privacy" className="ml-2 block text-sm text-gray-900">I agree to the 
                                <a href="#" class="text-blue-500 hover:text-blue-700"> Terms </a>
                                and 
                                <a href="#" class="text-blue-500 hover:text-blue-700"> Privacy Policy</a>.
                            </label>
                        </div>

                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                        </div>
                    </form>

                    <br></br>
                    <div className="relative p-4">
                        <div className="absolute-top-3 left-0 w-full text-center">
                            <span className="bg-gray-100 px-3 text-sm">or continue via</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-16">
                            <img className="w-8 cursor-pointer hover:contrast-200 transform hover:scale-125" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google"></img>
                            <img className="w-8 cursor-pointer hover:contrast-200 transform hover:scale-125" src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook"></img>
                    </div>



                </div>
            </div>
        </div>
    )
}
