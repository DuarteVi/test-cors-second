"use client"
import { useEffect, useState } from "react";


// export const getServerSideProps = async () => {
//   const res = await fetch('http://3000/api/hello'); // Remplacez cette URL par celle de votre API
//   const data = await res.json();
//   console.log("respons = " + res);

//   return {
//     props: {
//       name: data.pseudo, // Assurez-vous que la réponse de votre API contient un champ `firstName`
//     },
//   };
// };

export default function Home() {
  const [pseudo, setFirstName] = useState<string>('');

  useEffect(() => {
    const fetchFirstName = async () => {
      const res = await fetch('https://test-cors-drab.vercel.app/api/hello');
      console.log("respons = " + res);
      const data = await res.json();
      setFirstName(data.pseudo);
    };

    fetchFirstName();
  }, []);
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Mon site</h1>

      <div style={{textAlign: 'center'}}>
          <p> Je suis : {pseudo}</p>
      </div>

      <div style={{textAlign: 'center'}}>
        <h4>Nouveau message :</h4>
        <p> Message de Charlie : <a href="http://localhost:6660/">Va voir cet autre site sur les CORS !! Aller clique il est top !!!</a></p>
      </div>
    </main>
  );
}

