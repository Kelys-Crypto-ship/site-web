import React from "react";

export default function Home() {
  const bg = "https://blush-random-panther-926.mypinata.cloud/ipfs/bafybeifgen5panmynhyjebsfbvoywsii5rhi325eh6vnvxu7zhealqfy44";

  return (
    <section style={{ 
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Indispensable pour voir l'image
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white' // Pour que le texte soit lisible sur le fond
    }}>
      <div className="text-box" style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px' }}>
        <h1>Bienvenue sur KELYS</h1>
        <p>
          Découvrez l'univers crypto doré de KELYS.  
          Rejoignez la communauté et explorez nos projets.
        </p>
      </div>
    </section>
  );
}
