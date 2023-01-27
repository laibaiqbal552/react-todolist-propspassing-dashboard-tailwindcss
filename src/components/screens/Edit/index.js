import React from "react";
import { PlusIcon as PlusIconOutline } from "@heroicons/react/24/outline";
const Edit = ({
  handleSubmit,
  InputTargetValues,
  data,
  list,
  handleUpdate,
  imageRef,
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
        <input
          type="file"
          placeholder="type here..."
          className="hidden w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
          name="image"
          ref={imageRef}
          onChange={InputTargetValues}
        />

        <div className="relative w-14 h-14">
          <button
            type="button"
            onClick={() => imageRef && imageRef.current.click()}
            className={`${
              data.image.file
                ? "bg-transparent"
                : "bg-indigo-600 focus:ring-indigo-500 focus:outline-none focus:ring-2  focus:ring-offset-2"
            }  inline-flex items-center p-3 mx-auto w-full text-black font-bold  border border-transparent rounded-full shadow-sm  `}
          >
            <PlusIconOutline className="w-8 h-8 m-auto" aria-hidden="true" />
          </button>
          <img
            src={data.image.url}
            alt=""
            className={`${
              data.image.file
                ? "absolute top-0 left-0 right-0 -z-[1]"
                : "hidden"
            } rounded-full w-14 h-14 `}
          />
        </div>

        <div className="flex justify-center gap-6">
          <button
            type="button"
            onClick={handleUpdate}
            className="px-2 py-1 text-xl font-bold text-white bg-indigo-500 "
          >
            update value
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
