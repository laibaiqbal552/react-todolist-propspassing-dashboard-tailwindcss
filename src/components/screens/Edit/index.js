import React from "react";

const Edit = ({
  handleSubmit,
  InputTargetValues,
  data,
  list,
  handleUpdate,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type here..."
          className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
          name="name"
          value={data.name}
          onChange={InputTargetValues}
        />
        <input
          type="text"
          placeholder="type here..."
          className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
          name="secondName"
          value={data.secondName}
          onChange={InputTargetValues}
        />
        <input
          type="email"
          placeholder="type here..."
          className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
          name="email"
          value={data.email}
          onChange={InputTargetValues}
        />

        <div className="flex justify-center gap-6">
          {/* <button
            type="submit"
            className="px-2 py-1 text-xl font-bold text-white bg-indigo-500 "
          >
            Add value
          </button> */}

          <button
            type="button"
            onClick={handleUpdate}
            className="px-2 py-1 text-xl font-bold text-white bg-indigo-500 "
          >
            update value
          </button>
        </div>
      </form>
      <div>
        {list.map(({ id, name, secondName, email }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between p-2 my-2 border border-indigo-500"
            >
              <div className="flex flex-col">
                <p>name:{name}</p>
                <p>secondname:{secondName}</p>
                <p>email: {email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Edit;
