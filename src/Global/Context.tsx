import React, { useEffect, useState } from "react";
import Api from "./Axios/Api";
interface NavbarContextValue {
  data: any;
  setData: any;
  Auth: any;
  setAuth: any;
  loading: any;
  setLoading: any;
  Modal:any;
  setModal:any;
  ModalData:any;
  setModalData:any;
}

export const NavbarContext = React.createContext<NavbarContextValue>({
  data: String,
  setData: () => {},
  Auth: String,
  setAuth: () => {},
  loading: String,
  setLoading: () => {},
  Modal:Boolean, 
  setModal:()=>{},
  ModalData:Object, 
  setModalData:()=>{}
});

const Context = (props: any) => {
  const [data, setData] = useState([]);
  const [Auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [Modal, setModal] = useState(false)
  const [ModalData, setModalData] = useState([])
  useEffect(() => {
    LoadData();
    setLoading(false);
  }, [loading]);

  const LoadData = async () => {
    const allData = await Api.get("/product");
    setData(allData.data);
  };
  return (
    <NavbarContext.Provider
      value={{ data, setData, Auth, setAuth, loading, setLoading,Modal, setModal,ModalData, setModalData }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default Context;
