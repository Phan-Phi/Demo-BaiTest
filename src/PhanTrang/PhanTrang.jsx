import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/phanTrang.style.scss";

export default function PhanTrang() {
  const [data, setData] = useState([]);
  const [showData, setshowData] = useState([
    {
      maPhim: 10147,
      tenPhim: "Doctor Strange 2019",
      biDanh: "doctor-strange-2019",
      trailer: "https://www.youtube.com/watch?v=kmXjPbN-rYU",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/doctor-strange-2019_gp01.jpg",
    },
    {
      maPhim: 10147,
      tenPhim: "Doctor Strange 2019",
      biDanh: "doctor-strange-2019",
      trailer: "https://www.youtube.com/watch?v=kmXjPbN-rYU",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/doctor-strange-2019_gp01.jpg",
    },
    {
      maPhim: 10147,
      tenPhim: "Doctor Strange 2019",
      biDanh: "doctor-strange-2019",
      trailer: "https://www.youtube.com/watch?v=kmXjPbN-rYU",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/doctor-strange-2019_gp01.jpg",
    },
    {
      maPhim: 10147,
      tenPhim: "Doctor Strange 2019",
      biDanh: "doctor-strange-2019",
      trailer: "https://www.youtube.com/watch?v=kmXjPbN-rYU",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/doctor-strange-2019_gp01.jpg",
    },
  ]);
  const soluong = 5;
  useEffect(() => {
    // taoDaySo(5);
  }, []);

  const taoDaySo = (so) => {
    let soArr = [];
    for (let i = 1; i <= so; i++) {
      soArr.push(i);
    }
    console.log("soArr", soArr);

    return soArr.map((item, index) => {
      return <button onClick={() => chuyenTrang(item)}>{item}</button>;
    });
  };
  const chuyenTrang = (number) => {
    console.log("number", number);
    let end = soluong * number;
    // let dataCut = [{ showData: data.slice(end - 5, end) }];
    setshowData(data.slice(end - 5, end));
    // renderData();
    // console.log("dataCut", dataCut);
    console.log("showData", showData);

    // setData({});
  };

  const layAPI = async () => {
    try {
      let dataApi = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });
      setData(dataApi.data);
      setshowData(dataApi.data.slice(0, 5));

      console.log("dataApi", dataApi);
      console.log("setData", data);
    } catch {
      console.log("erro ko xác định dc datta");
    }
  };

  //   const renderData = () => {
  //     console.log("render ra nè");
  //     return showData.map((item, index) => {
  //       return (
  //         <div key={index} className="text">
  //           <h2>{item.tenPhim}</h2>
  //           <p>{item.maPhim}</p>
  //         </div>
  //       );
  //     });
  //   };
  console.log("render lại");
  console.log("render lại", showData);
  return (
    <div>
      PhanTrang
      <button onClick={() => layAPI()}>Click</button>
      <div>{taoDaySo(5)}</div>
      <div className="data">
        {showData.map((item, index) => {
          return (
            <div key={index} className="text">
              <h2>{item.tenPhim}</h2>
              <p>{item.maPhim}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
