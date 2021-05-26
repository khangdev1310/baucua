//Nếu muốn lấy ảnh cục bộ thì phải sử dụng REQUIRE

const initialState = {
  danhSachCuoc: [
    {
      ma: "bau",
      hinhAnh: require("../../img/bau.png"),
      diemCuoc: 0,
    },
    {
      ma: "cua",
      hinhAnh: require("../../img/cua.png"),
      diemCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: require("../../img/tom.png"),
      diemCuoc: 0,
    },
    {
      ma: "ca",
      hinhAnh: require("../../img/ca.png"),
      diemCuoc: 0,
    },
    {
      ma: "nai",
      hinhAnh: require("../../img/nai.png"),
      diemCuoc: 0,
    },
    {
      ma: "ga",
      hinhAnh: require("../../img/ga.png"),
      diemCuoc: 0,
    },
  ],
  tongDiem: 1000,
  mangXucXac: [
    {
      ma: "bau",
      hinhAnh: require("../../img/bau.png"),
    },
    {
      ma: "cua",
      hinhAnh: require("../../img/bau.png"),
    },
    {
      ma: "tom",
      hinhAnh: require("../../img/bau.png"),
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      console.log("Action: ", action);
      // Sẽ tăng hoặc giảm điểm tùy vào người chơi đặt loại nào
      const mangDanhSachCuoc = [...state.danhSachCuoc];
      const index = mangDanhSachCuoc.findIndex(
        (quanCuoc) => quanCuoc.ma === action.qc.ma
      );
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            mangDanhSachCuoc[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (mangDanhSachCuoc[index].diemCuoc > 0) {
            mangDanhSachCuoc[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = mangDanhSachCuoc;
      return { ...state };
    }
    case "Xoc": {
      //   console.log(action);
      const mangRandom = [];
      for (let i = 0; i < 3; i++) {
        const number = ~~(Math.random() * 6);
        const xucXacItem = state.danhSachCuoc[number];
        mangRandom.push(xucXacItem);
      }

      // Sử dụng 2 vòng lặp để kiếm tra trúng xí ngầu và hoàn tiền lại
      //   Xử lý tăng điểm thưởng
      mangRandom.forEach((item,index) => {
        const temp = state.danhSachCuoc.findIndex((qc => qc.ma === item.ma))
        if(index !== (-1)){
            state.tongDiem += state.danhSachCuoc[temp].diemCuoc
        }
      })

      state.mangXucXac = mangRandom;
      // Xử lý hoàn Tiền
      state.danhSachCuoc.forEach((item,index) => {
          let indexXX = mangRandom.findIndex(qc => qc.ma === item.ma)
          if(indexXX !== -1){
            state.tongDiem += item.diemCuoc;
          }
      })

      //Xử lý render lại số tiền đã đặt
      state.danhSachCuoc =  state.danhSachCuoc.map((item,index)=> {
          return {...item,diemCuoc: 0}
      })

      //   Cập nhật lại mảng xúc xắc
      return { ...state };
    }


    case "CHOI_LAI": {
        state.tongDiem = 1000;
        state.danhSachCuoc =  state.danhSachCuoc.map((item,index)=> {
            return {...item,diemCuoc: 0}
        })
        return {...state}
    }
    default:
      return state;
  }
};
