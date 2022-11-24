import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useList() {
  const [alquran, setAlquran] = useState([]);
  const getAlquran = async () => {
    try {
      const response = await axios.get(`http://api.alquran.cloud/v1/quran/en.asad`);

      console.log('response useList =>', response);
      setAlquran(response.data?.data?.surahs);
    } catch (err) {
      console.log('error =>', err);
    }
  };
// 
  useEffect(() => {
    getAlquran();
  }, []);

  return { alquran };
}

export default useList;
