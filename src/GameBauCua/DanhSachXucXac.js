import React from "react";
import XucXac from "./XucXac";
import {useSelector,useDispatch} from 'react-redux';


export default function DanhSachXucXac(props) {

  const mangXucXac = useSelector(state=>state.baucua.mangXucXac);
  const dispatch = useDispatch();

  const handleXoc = () => {
    dispatch({
      type: 'Xoc'
    })
  }

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{
          borderRadius: "150px",
          width: "300px",
          height: "300px",
          paddingLeft: 10
        }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{marginLeft: 80}}>
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>

        <div className="row" style={{marginTop: -20}}>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[1]}/>
          </div>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[2]}/>
          </div>
        </div>
      </div>
      <div style={{marginLeft: '20%', marginTop: '20px'}}>
        <button className="btn btn-success p2" style={{fontSize: '25px'}} onClick={handleXoc}>Xốc</button>
      </div>
    </div>
  );
}
