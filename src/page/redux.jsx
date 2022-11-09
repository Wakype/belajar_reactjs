import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../component";
import { decrement, increment } from "../redux/action/countAction";

const ReduxPage = () => {
  let navigate = useNavigate();
  const value = useSelector((state) => state.count.value);
  const status = useSelector((state) => state.count.status);

  const store = useSelector((state) => state);
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const author = useSelector((state) => state.auth);

  let dispatch = useDispatch();
  console.log("store =>", store);
  console.log("count =>", count);

  return (
    <section className="flex justify-center items-center flex-col py-5 px-[20px]">
      <div className="flex justify-between border border-green-500 rounded w-full text-center my-3 py-3 px-5">
        <h1>{author?.name}</h1>
        <h1>{author?.email}</h1>
      </div>
      <div className="border border-green-500 rounded px-[100px] text-center my-3">
        <div>
          <h1>Redux Test</h1>
        </div>
        <div>
          <p>{value}</p>
          <p>{status}</p>
        </div>
      </div>

      <div className="space-x-3">
        <Button
          edit="h-[40px] my-5 py-1 border-green-500 hover:border-green-500 hover:bg-green-500 hover:shadow-green-400"
          title={"Tambah"}
          onClick={() => {
            dispatch(increment());
          }}
        />
        <Button
          edit="h-[40px] my-5 py-1 border-red-500 hover:border-red-500 hover:bg-red-500 hover:shadow-red-400"
          title={"Kurang"}
          onClick={() => {
            dispatch(decrement());
          }}
        />
      </div>

      <div className="flex flex-col space-x-5 border border-green-500 rounded px-[100px] text-center my-2 py-1">
        <div>
          <p>Hex Code : {color.color}</p>
        </div>
        <div>
          <div
            style={{ backgroundColor: color.color }}
            className={` w-[200px] h-[30px] my-2`}
          ></div>
        </div>
      </div>

      <div className="space-x-3">
        <Button
          edit="h-[40px] my-5 py-1 border-green-500 hover:border-green-500 hover:bg-green-500 hover:shadow-green-400"
          title={"Green"}
          onClick={() => {
            dispatch({
              type: "changeColor",
              color: "#A8E890",
            });
          }}
        />
        <Button
          edit="h-[40px] my-5 py-1 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-yellow-400"
          title={"Yellow"}
          onClick={() => {
            dispatch({
              type: "changeColor",
              color: "#FCE700",
            });
          }}
        />
        <Button
          edit="h-[40px] my-5 py-1 border-red-500 hover:border-red-500 hover:bg-red-500 hover:shadow-red-400"
          title={"Default"}
          onClick={() => {
            dispatch({
              type: "returnColor",
            });
          }}
        />
      </div>
      <div>
        <Button
          edit="h-[40px] my-5 py-1 border-red-500 hover:border-red-500 hover:bg-red-500 hover:shadow-red-400"
          title={"Go Back"}
          onClick={() => {
            navigate("/artikel", {replace: true})
          }}
        />
      </div>
    </section>
  );
};

export default ReduxPage;
