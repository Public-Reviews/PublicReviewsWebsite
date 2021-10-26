export function Search_Bar() {
    return (
<div class=" bg-gray-200">
    <div class="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div class="relative"> <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything...">
            <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            <button type="submit" class="absolute right-0 top-2.5 mt-3 mr-2">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                         xml:space="preserve"
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
        </div>
    </div>
</div>
    );
} 