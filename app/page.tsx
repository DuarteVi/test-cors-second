"use client"
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {

  /*

  {
    withCredentials: true,
    headers: {
      Cookie: 'MonSuperCookie',
      Authorization: 'Bearer your-token-here'
    }


  http://localhost:3000

  https://test-cors-drab.vercel.app/api/hello

  https://test-cors-second.vercel.app/api/hello
  */

  const routeCallAuto = 'https://test-cors-drab.vercel.app/api/hello';
  const routeGetAlice = 'https://test-cors-drab.vercel.app/api/hello';
  const headerGetALice = {
    withCredentials: true
  };
  const routeDeleteBob = 'https://test-cors-drab.vercel.app/api/hello';
  const headerDeleteBob = {
    withCredentials: true //,
    // headers: {
    //   Authorization: 'Bearer your-token-here'
    // }
  }

  const routeCookie = 'https://test-cors-second.vercel.app/api/cookie';
  const headerGetCookie = {
    withCredentials: true
  }


  const [pseudoGetAlice, setFirstName] = useState<string>('');

  useEffect(() => {
    const fetchFirstName = async () => {
      const res = await fetch(routeCallAuto);
      console.log("respons = " + res);
      const data = await res.json();
      setFirstName(data.pseudo);
    };

    fetchFirstName();
  }, []);

  const [dataAlice, setDataAlice] = useState<string | null>(null);
  const [loadingAlice, setLoadingAlice] = useState<boolean>(false);
  const [errorAlice, setErrorAlice] = useState<string | null>(null);
  const handleClickAlice = async () => {
    setLoadingAlice(true);
    setErrorAlice(null);
    try {
      const response = await axios.get(routeGetAlice, headerGetALice); // Remplacez '/api/data' par votre URL de l'API
      setDataAlice(response.data.pseudo);
    } catch (error) {
      setErrorAlice('Erreur lors de la récupération des données');
    } finally {
      setLoadingAlice(false);
    }
  };

  const [dataBob, setDataBob] = useState<string | null>(null);
  const [loadingBob, setLoadingBob] = useState<boolean>(false);
  const [errorBob, setErrorBob] = useState<string | null>(null);
  const handleClickBob = async () => {
    setLoadingBob(true);
    setErrorBob(null);
    try {
      const response = await axios.delete(routeDeleteBob, headerDeleteBob);
      setDataBob(response.data.pseudo);
    } catch (error) {
      setErrorBob('Erreur lors de la récupération des données');
    } finally {
      setLoadingBob(false);
    }
  };

  const setMyCookie = async () => {
    await axios.post(routeCookie,headerGetCookie);
  };

  const deleteMyCookie = async () => {
    await axios.delete(routeCookie);
  };

  const [dataCookie, setDataCookie] = useState<string | null>(null);
  const [loadingCookie, setLoadingCookie] = useState<boolean>(false);
  const [errorCookie, setErrorCookie] = useState<string | null>(null);
  const getMyCookie = async () => {
    setLoadingCookie(true);
    setErrorCookie(null);
    try {
      const response = await axios.get(routeCookie);
      setDataCookie(response.data);
    } catch (error) {
      setErrorCookie('Erreur lors de la récupération des données');
    } finally {
      setLoadingCookie(false);
    }
  };
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Mon site</h1>

      <h3 style={{ color: 'brown', textAlign: 'center' }}>Boutons :</h3>
      <div style={{textAlign: 'center'}}>
          <p> Call auto : {pseudoGetAlice}</p>
      </div>

      <div style={{textAlign: 'center'}}>
      <h3>Alice :</h3>
      <button onClick={handleClickAlice}>GET</button>
      {loadingAlice && <p>Chargement...</p>}
      {errorAlice && <p>{errorAlice}</p>}
      {dataAlice && <p>Données: {dataAlice}</p>}
      </div>

      <div style={{textAlign: 'center'}}>
      <h3>Bob :</h3>
      <button onClick={handleClickBob}>DELETE</button>
      {loadingBob&& <p>Chargement...</p>}
      {errorBob && <p>{errorBob}</p>}
      {dataBob && <p>Données: {dataBob}</p>}
      </div>

      <div style={{textAlign: 'center'}}>
      <h3>Cookie :</h3>
      <button onClick={setMyCookie}>Set</button>
      <button onClick={deleteMyCookie}>Delete</button>
      <button onClick={getMyCookie}>Get</button>
      {loadingCookie&& <p>Chargement...</p>}
      {errorCookie && <p>{errorCookie}</p>}
      {dataCookie && <p>Données: {dataCookie}</p>}
      </div>

      <h3 style={{ color: 'purple', textAlign: 'center' }}>site online 1 :</h3>
      <div style={{textAlign: 'center'}}>
      <a href='https://test-cors-drab.vercel.app/' target="_blank">https://test-cors-drab.vercel.app/</a>
      </div>

      <h3 style={{ color: 'purple', textAlign: 'center' }}>site online 2 :</h3>
      <div style={{textAlign: 'center'}}>
      <a href='https://test-cors-second.vercel.app/' target="_blank">https://test-cors-second.vercel.app/</a>
      </div>

      <h3 style={{ color: 'purple', textAlign: 'center' }}>Online dashboard :</h3>
      <div style={{textAlign: 'center'}}>
      <a href='https://vercel.com/vincent-duartes-projects' target="_blank">https://vercel.com/vincent-duartes-projects</a>
      </div>

    </main>
  );
}

