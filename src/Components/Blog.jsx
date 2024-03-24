import { Link } from "react-router-dom";
import backupImage from '../assets/404 (1).jpg'

const Blog = ({blog}) => {
    const {title,description,cover_image,published_at,id} = blog
    return (
        <Link to = {`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2  shadow-xl p-4 rounded-lg hover:scale-105 hover:border-teal-900 transition-all duration-300 ease-in-out">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || backupImage} alt="Cover Image" />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
    );
};

export default Blog;