import React from "react";

import bau from "../img/bau.png";
import { useDispatch } from "react-redux";
import { useSpring, animated, useTrail } from "react-spring";

export default function QuanCuoc(props) {
  const { qc } = props;
  const dispatch = useDispatch();
  const [propsUseSpring, set, stop] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true,
    };
  });

  const handleChangeIncrease = () => {
    set({ scale: 1 });
    set({ scale: 1.25 });

    dispatch({
      type: "DAT_CUOC_BAU_CUA",
      qc,
      tangGiam: true,
    });
  };

  const handleChangeDecrease = () => {
    set({ scale: 1 });
    set({ scale: 1.25 });
    dispatch({
      type: "DAT_CUOC_BAU_CUA",
      qc,
      tangGiam: false,
    });
  };

  return (
    <div className="mt-3">
      <img src={qc.hinhAnh} alt="Ảnh tạm thời" style={{ width: "60%" }} />

      <div
        className="bg-success my-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: "60% " }}
      >
        <animated.button
          className="btn btn-danger mr-3"
          style={{
            transform: propsUseSpring.scale.to(scale => `scale(${scale})`),
          }}
          onClick={handleChangeIncrease}
        >
          <i className="fa fa-plus"></i>{" "}
        </animated.button>
        <span className="mt-2 text-white" style={{ fontSize: 25 }}>
          {qc.diemCuoc}
        </span>
        <animated.button className="btn btn-danger ml-3" onClick={handleChangeDecrease} style={{
            transform: propsUseSpring.scale.to((scale) => `scale(${scale})`),
          }}>
          <i className="fa fa-minus"></i>{" "}
        </animated.button>
      </div>
    </div>
  );
}
