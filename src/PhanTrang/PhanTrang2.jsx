import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

export default function PhanTrang2(props) {
  let mm = 5.4;
  let n = mm.toFixed(1);
  console.log("nnnnnnnnnn", n);
  const soLuong = 5;
  const [data, setData] = useState([]);
  const [showData, setshowData] = useState([]);
  let tong = data.length / 6;

  useEffect(() => {
    layAPI();
  }, []);

  const layAPI = async () => {
    try {
      const API = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });
      const a = JSON.stringify(API);

      setData(API.data);

      console.log("API", API.data.length);
      setshowData(API.data.slice(0, 5));
    } catch {
      console.log("lỗi không lấy được API");
    }
  };

  const renderAPI = () => {
    return (
      showData &&
      showData.length > 0 &&
      showData.map((item, index) => {
        return (
          <div>
            <h1>{item.maPhim}</h1>
            <p>{item.tenPhim}</p>
          </div>
        );
      })
    );
  };

  const Nut = (so) => {
    let arrNut = [];
    for (let i = 1; i <= so; i++) {
      arrNut.push(i);
    }
    console.log("arrNut", arrNut);
    return (
      arrNut.length > 0 &&
      arrNut.map((nut, index) => {
        return <button onClick={() => chuyenTrang(nut)}>{nut}</button>;
      })
    );
  };
  const chuyenTrang = (nut) => {
    let end = nut * soLuong;
    setshowData(data.slice(end - 5, end));
    // console.log("nut", end);
  };
  const handleChange = (e) => {
    let b = e.target.value;
    console.log("object", data);
    const femaleStudents = data.filter((element, index) => {
      return element.tenPhim.toLowerCase().includes(b.toLowerCase());
    });
    console.log("femaleStudents", femaleStudents);
    setshowData(femaleStudents);
    renderAPI();
  };

  return (
    <div>
      PhanTrang2
      <div className="nut">{Nut(tong.toFixed())}</div>
      <div className="sreach">
        <input type="text" onChange={handleChange} />
      </div>
      {renderAPI()}
    </div>
  );
}
