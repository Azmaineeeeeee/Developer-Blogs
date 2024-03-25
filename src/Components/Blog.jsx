import { Link } from "react-router-dom";
import backupImage from '../assets/404 (1).jpg'
import { RiDeleteBin5Line } from "react-icons/ri";


const Blog = ({ blog, deletable,handleDeleteBlogs }) => {
    const { title, description, cover_image, published_at, id } = blog;

    return (
        <div className="relative">
            {deletable && (
                <span className="absolute lg:-top-3 lg:right-7 -top-2 -right-2">
                    <RiDeleteBin5Line onClick={() => handleDeleteBlogs(id)} className="bg-red-500 rounded-full p-2 text-4xl text-white"/>
                </span>
            )}
            <Link to={`/blog/${id}`} className="block overflow-hidden border-2 border-gray-200 rounded-lg shadow-xl hover:border-teal-900 transition-all duration-300 ease-in-out max-w-sm mx-auto group hover:no-underline focus:no-underline p-4  hover:scale-105 h-full">
                <img role="presentation" className="object-cover w-full h-44 bg-gray-500" src={cover_image || backupImage} alt="Cover Image" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p className="mt-2 text-sm">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;