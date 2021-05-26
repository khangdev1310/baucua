import React from "react";
import QuanCuoc from "./QuanCuoc";
import { useDispatch, useSelector } from "react-redux";

export default function DanhSachCuoc(props) {
  const danhSachCuoc = useSelector(state => state.baucua.danhSachCuoc);
  // console.log(danhSachCuoc);

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc qc={item} />
        </div>
      );
    });
  };

  return (
    <div className="row mt-5">
        {renderDanhSachCuoc()}
    </div>
  );
}
