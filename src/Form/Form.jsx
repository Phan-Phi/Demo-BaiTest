import { Axios } from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

export default function Form() {
  const [vale, setVale] = useState("");
  const formik = useFormik({
    initialValues: {
      ten: "",
      email: "",
      diaChi: "",
      SDT: "",
    },

    validationSchema: Yup.object({
      ten: Yup.string()
        .min(5, "Tên quá ngắn")
        .required("không được bỏ trống ký tự"),
      email: Yup.string()
        .email("Email không đúng")
        .required("không được bỏ trống ký tự"),
      diaChi: Yup.string().required("không được bỏ trống ký tự"),
      SDT: Yup.string().required("không được bỏ trống ký tự"),
    }),

    onSubmit: (value) => {
      console.log("objectvalue", value);
      setVale(value);
      console.log("vale", vale);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Tên:
        <input
          type="text"
          name="ten"
          value={formik.values.ten}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.ten && formik.touched.ten && <p>{formik.errors.ten}</p>}

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.email && formik.touched.email && (
        <p>{formik.errors.email}</p>
      )}

      <label>
        Địa Chỉ:
        <input
          type="text"
          name="diaChi"
          value={formik.values.diaChi}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.diaChi && formik.touched.diaChi && (
        <p>{formik.errors.diaChi}</p>
      )}

      <label>
        SDT:
        <input
          type="text"
          name="SDT"
          value={formik.values.SDT}
          onChange={formik.handleChange}
        />
      </label>
      {formik.errors.SDT && formik.touched.SDT && <p>{formik.errors.SDT}</p>}

      <input type="submit" value="ádasdasd" />
    </form>
  );
}
