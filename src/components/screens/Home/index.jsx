import React from "react";
import { Link } from "react-router-dom";

const Home = ({ list, HandleEdit, HandleDelete }) => {
  console.log(list, "home page list");
  return (
    <div>
      <Link to="/add">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add new product
        </button>
      </Link>
      <div>
        {list.map(({ id, name, secondName, email, image }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between p-2 my-2 border border-indigo-500"
            >
              <div className="flex flex-col">
                <p>name:{name}</p>
                <p>secondname:{secondName}</p>
                <p>email: {email}</p>
                <div>
                  <img src={image.url} alt={name} />
                </div>
              </div>
              <div className="flex justify-end gap-6">
                <Link to={`/edit/${id}`}>
                  <button
                    type="button"
                    className="px-2 py-1 text-xl font-bold text-white bg-indigo-500 "
                    onClick={() =>
                      HandleEdit(id, name, secondName, email, image)
                    }
                  >
                    edit
                  </button>
                </Link>
                <Link to={`/delete/${id}`}>
                  <button
                    type="button"
                    className="px-2 py-1 text-xl font-bold text-indigo-500 border border-indigo-500 "
                    onClick={() => HandleDelete(id)}
                  >
                    delete
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
