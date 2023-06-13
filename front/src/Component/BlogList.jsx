import BlogItem from "./BlogItem";
import BlogData from "../BlogData";
function BlogList() {
  return (
    <div className="bg-slate-800 max-w-6xl  mx-auto">
      <h1 className="text-xl font-extrabold py-12">Blog</h1>


      <div className="grid  grid-cols-1 md:grid-cols-3 md:gap-8 px-4">
          {
            BlogData.Blog.map((post)=>
            <BlogItem key={post.id}  description={post.description} picture={post.image} alt={post.id}/> )
          }
        </div>
     
    </div>
  );
}

export default BlogList;
