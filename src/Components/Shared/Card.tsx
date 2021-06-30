import Api from "../../Global/Axios/Api";

function Card(props: any) {
  const { data, setLoading } = props;

  const deleteBlog = async () => {
    const response = await Api.delete(`/product/delete/${data._id}`);
    console.log(response);
    setLoading(true);
  };

  return (
    <div className="m-5">
      <div className="d-flex">
        <h6 className="w-50">{data.title}</h6>
        <div className="w-25">
          <img width="60px" src={data.image} alt="" />
           
        </div>
        <button className="  btn btn-danger" onClick={deleteBlog} type="submit">
            Delete
          </button>
      </div>
    </div>
  );
}

export default Card;
