import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/screens/Home";
import Add from "./components/screens/Add";
import Edit from "./components/screens/Edit";
import Delete from "./components/screens/Delete";
import Layout from "./components/Layout";

function App() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    secondName: "",
    email: "",
    image: "",
  });
  const [list, setList] = useState(proList);
  const [enterId, setEntryId] = useState();
  const imageRef = useRef(null);

  const InputTargetValues = (e) => {
    if (e.target.type === "file") {
      setData({
        ...data,
        [e.target.name]: {
          url: createImgUrl(e.target.files[0]),
          file: e.target.files[0],
        },
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const InputValue = {
      id: list.length + 1,
      name: data.name,
      secondName: data.secondName,
      email: data.email,
      image: data.image,
    };
    setList([...list, InputValue]);
    setData({
      name: "",
      secondName: "",
      email: "",
      image: "",
    });

    navigate("/");
  };
  const HandleDelete = (id) => {
    const newList = list.filter((i) => i.id !== id);
    setList(newList);
  };
  const HandleEdit = (id, name, secondName, email) => {
    setData({ name, secondName, email });
    setEntryId(id);
  };
  const handleUpdate = () => {
    const newListUpdate = [...list];
    const InputValue2 = {
      id: enterId,
      name: data.name,
      secondName: data.secondName,
      email: data.email,
      image: data.image,
    };
    const inputIndex = newListUpdate.findIndex((i) => i.id === enterId);
    newListUpdate[inputIndex] = InputValue2;
    setList(newListUpdate);
    setData({
      name: "",
      secondName: "",
      email: "",
      image: "",
    });
    navigate("/");
  };
  // const Handleclear = () => {
  //   setList([]);
  // };
  useEffect(() => {
    console.log(list, "@list data");
  }, [list]);
  return (
    <>
      <Layout>
        <Routes>
          <Route
            index
            element={
              <Home
                list={list}
                HandleEdit={HandleEdit}
                HandleDelete={HandleDelete}
              />
            }
          />
          <Route
            path="/add"
            element={
              <Add
                handleSubmit={handleSubmit}
                InputTargetValues={InputTargetValues}
                data={data}
                list={list}
                imageRef={imageRef}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Edit
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                InputTargetValues={InputTargetValues}
                data={data}
                list={list}
                imageRef={imageRef}
              />
            }
          />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
export const createImgUrl = (img) => {
  return URL.createObjectURL(img);
};
const proList = [
  {
    id: "name_1",
    name: "name",
    secondName: "second1",
    email: "email@gmail.com",
    image: "",
  },
  {
    id: "name2_2",
    name: "name2",
    secondName: "second1",
    email: "email@gmail.com",
    image: "",
  },
  {
    id: "name3_3",
    name: "name3",
    secondName: "second1",
    email: "email@gmail.com",
    image: "",
  },
  {
    id: "name4_4",
    name: "name4",
    secondName: "second1",
    email: "email@gmail.com",
    image: "",
  },
];
