export function Footer() {
    
    return (
    
        <footer font-ariel>
            <div className="bg-gray-800 p-10 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            <div className="mb-5">
                                <h4 text-2xl pb-4>About</h4><br></br>
                                <ul className="text-gray-400">
                                    <li className="pb-4">Golflink, Shillong</li>
                                    <li className="pb-4"> Contact: 0364-2591571</li>
                                    <li className="pb-4">Accessibility Statement</li>
                                    <li className="pb-4">Terms of Service</li>
                                    <li className="pb-4">Privacy Policy</li>
                                    <li className="pb-4">Ad Choices</li>
                                </ul>
                            </div>
                            <div className="mb-5">
                            <h4 text-2xl pb-4>Discover</h4><br></br>
                                <ul className="text-gray-400">
                                    <li className="pb-4">Collections</li>
                                    <li className="pb-4">The local PRW</li>
                                    <li className="pb-4">PRW Blog</li>
                                    <li className="pb-4">Support</li>
                                    <li className="pb-4">PRW Mobile</li>
                                    <li className="pb-4">Developers</li> 
                                </ul>
                            </div>
                            <div className="mb-5">
                            <h4 text-2xl pb-4>PRW for Business and Review</h4><br></br>
                                <ul className="text-gray-400">
                                    <li className="pb-4">Claim your Business Page</li>
                                    <li className="pb-4">Advertise on PRW</li>
                                    <li className="pb-4">Business Success Stories</li>
                                    <li className="pb-4">Business Support</li>
                                    <li className="pb-4">PRW Blog for Business</li>
                                    <li className="pb-4">Project Cost Guides</li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h4 text-2xl pb-4>Join Our Newsletter</h4><br></br>
                                <p className="text-gray-400">
                                    Join 25,000+ others and never miss out on the best services around you
                                </p><br></br>
                                <form className="flex flex-row flex-wrap">
                                    <input type ="text" className="w-2/3 p-2 text-gray-400 focus:border-blue-500" placeholder="email@example.com"></input>
                                    <button className="p-2 w-1/3 bg-blue-500 hover:bg-white hover:text-blue-500">Subscribe</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full bg-gray-900 text-gray-400 text-sm px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                    <div>
                        Copyright <strong><span> &copy;</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
        );
    }
    