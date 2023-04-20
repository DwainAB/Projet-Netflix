import React, {useEffect, useState} from 'react';

function CallApi(){
    const url = "https://api.themoviedb.org/3/movie/550?api_key=3c55b27b9e2cf84477c1a7e17da7a0bf"
    const [userData, setUserData] = useState('')
    const getData = async (url) =>{
        const rowData = await fetch(url)
        const jsonData = await rowData.json()
        setUserData(jsonData)
      }

      useEffect(() =>{
        getData(url)
      }, [])

      console.log(userData);
}

export default CallApi