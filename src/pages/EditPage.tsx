import React from "react";
import { ProductPage } from "../components/ProductPage/ProductPage";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/productsApi";
import { useNavigate } from "react-router-dom";

export const EditPage = () => {
  const navigate = useNavigate();

  const params = useParams().id as string;  
  const { data, isLoading, isError } = useGetProductByIdQuery(params);
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    navigate("/")
    console.log("Ошибка")
  }
  return <ProductPage type="edit" content={data} />;
};
