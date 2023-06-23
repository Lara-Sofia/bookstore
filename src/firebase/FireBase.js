import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import BookItem from "../components/BookItem/BookItems";

const FireBase = () => {
  const [data, setData] = useState({});
  const { detalleID } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'books', 'ZN2QQJ3GB1Eq93rfi2NG');
    getDoc(queryDoc)
      .then((res) => {
        setData(res.data());
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return <BookItem data={data} />;
};

export default FireBase;
