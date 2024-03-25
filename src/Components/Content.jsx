import { useLoaderData } from "react-router-dom";
import backupImage from "../assets/404 (1).jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, tags,body_html } = blog;
  
  return (
    <div className="border-teal-800 border p-2">
      <img 
        role="presentation"
        className="object-cover w-full rounded h-52 bg-gray-500"
        src={cover_image || backupImage}
        alt="Cover Image"
      />
      <div className="flex flex-wrap py-6 gap-2">
      {tags && tags.length > 0 ? (
    tags.map((tag, index) => (
        <a
            key={index}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-teal-700 text-white"
        >
            #{tag}
        </a>
    ))
) : (
    <p className="px-3 gap-2 py-1 rounded-sm hover:underline bg-teal-700 text-white">
        #tech #AI #technology
    </p>
)}

      </div>
      <div className="space-y-2">
        <h3 className="text-3xl font-semibold group-hover:underline underline">
          {title}
        </h3>
        <div className="overflow-hidden">
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>



      </div>
    </div>
  );
};

export default Content;



