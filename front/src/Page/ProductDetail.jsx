import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="bg-slate-900">
      <h2 className="text-white py-10">ProductDetail: {slug}</h2>
    </div>
  );
}

export default ProductDetail;
