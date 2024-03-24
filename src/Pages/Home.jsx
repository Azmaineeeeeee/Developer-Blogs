import { Link } from "react-router-dom";
import image from '../assets/wave.svg'


const Home = () => {
    return (
      
         <div className="hero min-h-[calc(100vh-120px)] relative">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold text-teal-700">Welcome to <span className="text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text  bg-300%  animate-gradient">TechTrendz</span></h1>
      <p className="py-6 text-sm">Welcome to TechTrendz, your go-to destination for insightful articles, engaging stories, and thought-provoking discussions. Whether you're a seasoned reader or just stumbled upon us, we're thrilled to have you here..</p>
     <div className="flex gap-3 justify-center">
     <Link to='/blogs'><a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-teal-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Read Blogs</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-teal-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></Link>
         <Link to='/bookmarks'><a class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-teal-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">BookMarks</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-teal-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></Link>
     </div>
    </div>

  </div>

  <img src = {image} className="absolute bottom-0 w-full"></img>
 
</div>

      


    );
};

export default Home;