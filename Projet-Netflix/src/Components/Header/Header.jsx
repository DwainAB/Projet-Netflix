import React, {useEffect} from 'react';
import CallApi from '../CallApi/CallApi.jsx';

function DisplayData() {
    useEffect(() => {
        console.log(CallApi.userData);
      }, []);
    
      return (
        <div>
          <h1>Données récupérées depuis l'API :</h1>
          <p>{CallApi.userData ? JSON.stringify(CallApi.userData) : 'En attente de données...'}</p>
        </div>
      );
}

export default DisplayData;