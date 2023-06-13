function CardSection( {content ,subject, icon}) {
  return (
    <div>
      <div className="bg-slate-900 border border-violet-500 text-center mx-auto p-9 rounded-2xl w-80">
        <img  src={icon} className="rounded-full w-20 h-20 mx-auto mb-3 "/>
        <h3 className="text-violet-500 text-2xl font-bold text-center ">{subject}</h3>
        <p className="max-w-3xl capitalize  mx-auto text-slate-300 text-sxl font-medium text-center py-3">
           {content}
          </p>
      </div>
    </div>
  );
}

export default CardSection;
