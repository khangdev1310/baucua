import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DiemCuoc from './DiemCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import '../Styles/BaiTapGameBauCua.css';    


export default function BaiTapGameBauCua(props) {
    return (
        <div id="BaiTapGameBauCua" className="container-fluid" >
            <DiemCuoc/>
            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc/>
                </div>
                <div className="col-4">
                    <DanhSachXucXac/>
                </div>
            </div>
        </div>
    )
}
