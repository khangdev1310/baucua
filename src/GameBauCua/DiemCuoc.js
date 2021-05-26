import React from "react";
import {useSelector,useDispatch} from 'react-redux';

export default function DiemCuoc(props) {

  const tongDiem = useSelector(state => state.baucua.tongDiem);
  const dispatch = useDispatch();

  const handleAgain = () => {
    dispatch({
      type: 'CHOI_LAI'
    })
  }

  return (
    <div>
      <h3 className="text-center display-4" style={{ color: "#00FF00" }}>
        Game Bầu Cua Thử Nghiệm
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: "20px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          Tiền thưởng: <span className="text-warning">{tongDiem.toLocaleString()}$</span>
        </span>
      </div>

      <div className="text-center mt-5">
        <button
          style={{ fontSize: "15px", border: "none", cursor: "pointer"}}
          className="p-2 text-white bg-danger" onClick={handleAgain}
        >Chơi lại</button>
      </div>
    </div>
  );
}
