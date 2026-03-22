import React from "react";

export default function Home() {
  const bg = "https://blush-random-panther-926.mypinata.cloud/ipfs/bafybeifgen5panmynhyjebsfbvoywsii5rhi325eh6vnvxu7zhealqfy44";

  return (
    <section style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-box">
        <h1>Bienvenue sur KELYS</h1>
        <p>
          Découvrez l'univers crypto doré de KELYS.  
          Rejoignez la communauté et explorez nos projets.
        </p>
      </div>
    </section>
  );
}
