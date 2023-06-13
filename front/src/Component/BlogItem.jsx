function BlogItem({ picture, description, id }) {
  return (
    <div>
      <div className="border-indigo-600 border rounded-2xl  ">
        <img src={picture} alt={id}  className="w-full  rounded-t-2xl"/>
        <p className="text-lg font-medium text-slate-100 p-8  text-left capitalize">{description}</p>
      
      </div>
    </div>
  );
}

export default BlogItem;
