import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useJuz(id = 1) {
  const [alquran, setAlquran] = useState([]);
  const [juz, setJuz] = useState(id);
  const getAlquran = async (juz) => {
    try {
      const response = await axios.get(
        `http://api.alquran.cloud/v1/juz/${juz}/en.asad`
      );

      console.log('response useJuz =>', response.data?.data?.surahs);
      setAlquran(response.data?.data?.surahs);
    } catch (err) {
      console.log('error =>', err);
    }
  };
  //
  useEffect(() => {
    getAlquran(juz);
  }, [juz]);

  return { alquran, juz, setJuz };
}

export default useJuz;
