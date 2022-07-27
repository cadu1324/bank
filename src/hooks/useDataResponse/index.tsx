import axios from "axios";
import { useEffect, useReducer, useState } from "react";

const useDataResponse = () => {
    
    // const reducer = (state, action) => {
    //     switch (action.type){
    //         case 
    //     }
    // };

    // const [state, dispatch] = useReducer(reducer, { name: ''});

    
    // const [name, setName] = useState("");
    // const [bank, setBank] = useState("");
    // const [agency, setAgency] = useState("");
    // const [account, setAccount] = useState("");
    // const [document, setDocument] = useState("");
    // const [show, setShow] = useState(false);

    // const getData = async () => {
    //     const token = localStorage.getItem("token");
    //     const headers = {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     };
    //     const response = await axios.get(
    //       `https://api-q2-test.herokuapp.com/data?id=${event.target.value}`,
    //       { headers }
    //     );
    //     response.data.result.map((option) => {
    //       setName(option.name);
    //       setBank(option.bank.bankName);
    //       setAgency(option.bank.agency);
    //       setAccount(option.bank.account);
    //       setDocument(option.document);
    //     });
    //     setShow(true);
    //   };
    
    //   useEffect(() => {
    //     getData();
    //   }, [event]);
}

export default useDataResponse;