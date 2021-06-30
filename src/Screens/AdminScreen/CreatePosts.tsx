import axios from "axios";
import React, { useState } from "react";
import Api from "../../Global/Axios/Api";
function CreatePosts() {
  const [msg, setMsg] = useState("");
  const [Auth, setAuth] = useState({});
  const [photoUrl, setPhotoUrl] = useState("");
  const [formData, setFormData] = useState({
    title: null,
    image: null,
    description: null,
  });
  const onchangeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const onChangeHandler = (event: any) => {
    const image = event.target.files[0];
    console.log(image);
    const imageData = new FormData();
    imageData.set("key", "292e93baf139ef4fb8b9f89680c2dc9a");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        // setPhotoUrl(response.data.data.display_url);
        setFormData({ ...formData, image: response.data.data.display_url });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async () => {
    if (
      formData.title === null ||
      formData.image === null ||
      formData.description === null
    ) {
      return setMsg("Fill all the fields");
    }
    const User = await Api.post(`/product`, formData);
    setAuth(User.data);
    setMsg("");
  };

  console.log(Auth);
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="col-md-8 offext-md-2 shadow mt-5 p-3 m-auto">
        <h1 className="text-white bg-primary mt-5 mb-5">Create A Post</h1>
        {msg && <div>{msg}</div>}

        <form method="post">
          <input
            className="form-control mb-3"
            placeholder="title"
            type="text"
            name="title"
            id=""
            onChange={onchangeHandler}
          />
          <input
            className="form-control mb-3"
            type="file"
            name="image"
            id=""
            onChange={onChangeHandler}
          />

          <textarea
            className="form-control mb-3"
            name="description"
            placeholder="Description....."
            id=""
            onChange={onchangeHandler}
          />

          <input
            className="form-control btn btn-primary"
            type="button"
            value="Create Post"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default CreatePosts;
