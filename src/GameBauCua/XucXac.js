import React, { Fragment, useState } from "react";
import { useSpring, animated, to } from "react-spring";

export default function XucXac(props) {
  let { xucXacItem } = props;

  const {xyz} = useSpring({
    from: {
      xyz: [0, 0, 0],
    },
    xyz: [0, 360, 360],
    config: { duration: 500 },
    reset: true,
  });
  
  // Thẻ Fragment sẽ như div nhưng không hiển thị ra giao diện.
  return (
    <Fragment>
      <div className="scene ml-5">
        <animated.div
          className="cube"
          style={{
            transform: xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img
              style={{ width: "100%" }}
              src={xucXacItem.hinhAnh}
              alt="Ảnh thay thế"
            />
          </div>
          <div className="cube__face back">
            <img
              style={{ width: "100%" }}
              src={require("../img/bau.png")}
              alt="Ảnh thay thế"
            />
          </div>
          <div className="cube__face left">
            <img
              style={{ width: "100%" }}
              src={require("../img/cua.png")}
              alt="Ảnh thay thế"
            />
          </div>
          <div className="cube__face right">
            <img
              style={{ width: "100%" }}
              src={require("../img/tom.png")}
              alt="Ảnh thay thế"
            />
          </div>
          <div className="cube__face top">
            <img
              style={{ width: "100%" }}
              src={require("../img/ca.png")}
              alt="Ảnh thay thế"
            />
          </div>
          <div className="cube__face bottom">
            <img
              style={{ width: "100%" }}
              src={require("../img/ga.png")}
              alt="Ảnh thay thế"
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}
