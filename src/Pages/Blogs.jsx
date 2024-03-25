import { useLoaderData,useNavigation } from "react-router-dom";
import Blog from "../Components/Blog";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const Blogs = () => {
    const navigation = useNavigation()
    const blogs = useLoaderData()
    if(navigation.state === 'loading') return <Loader></Loader>
    return (
        <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <Link to = {`/blog/${blogs[0].id}`}  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                    <span className="text-xs text-gray-400">{new Date (blogs[0].published_at).toLocaleDateString()}</span>
                    <p>{blogs[0].description}</p>
                </div>
            </Link>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {
                blogs.slice(1,blogs.length).map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
               } 
            </div>
            
        </div>
    </section>
    );
};

export default Blogs;