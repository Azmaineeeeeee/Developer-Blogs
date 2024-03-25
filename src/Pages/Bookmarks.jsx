import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Utility";
import Blog from "../Components/Blog";
import { Link } from "react-router-dom";



const Bookmarks = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handleDeleteBlogs = (id) => {
        deleteBlogs(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if(blogs.length < 1) {
        return (
            <div className="flex flex-col justify-center items-center h-screen space-y-5">
                <h1 className="text-2xl">Nothing Added to BookMarks.</h1>
                <Link to='/blogs'><a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-teal-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Read Blogs</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-teal-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a></Link>
            </div>
        )
    }
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-around grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {
                blogs.map((blog) => <Blog deletable = {true} handleDeleteBlogs={handleDeleteBlogs} key={blog.id} blog={blog}></Blog>)
               } 
            </div>
    );
};

export default Bookmarks;