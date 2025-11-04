import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { config } from "../config";
import KelysVotingAbi from "../abis/KelysVoting.json";

export default function Voting() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const [projects, setProjects] = useState([]);

  const connectWallet = async () => {
    if (window.ethereum) {
      const prov = new ethers.BrowserProvider(window.ethereum);
      await prov.send("eth_requestAccounts", []);
      setSigner(await prov.getSigner());
      setWalletConnected(true);
    } else alert("Installez MetaMask !");
  };

  const loadProjects = async () => {
    if (!signer) return;
    const contract = new ethers.Contract(config.votingAddress, KelysVotingAbi, signer);
    const list = [];
    for (let i = 1; i <= 10; i++) { // max 10 projets pour l'exemple
      try {
        const p = await contract.getProject(i);
        list.push({ id: p[0], name: p[1], description: p[2], votes: p[3] });
      } catch { break; }
    }
    setProjects(list);
  };

  const voteProject = async (id) => {
    if (!walletConnected) return alert("Connectez votre wallet !");
    const contract = new ethers.Contract(config.votingAddress, KelysVotingAbi, signer);
    const tx = await contract.vote(id);
    await tx.wait();
    alert("Vote enregistré !");
    loadProjects();
  };

  useEffect(() => {
    if (signer) loadProjects();
  }, [signer]);

  return (
    <div className="mt-4">
      {!walletConnected && (
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      <div className="mt-2 space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
            <p>Votes: {p.votes}</p>
            <button className="bg-green-600 text-white px-4 py-1 rounded mt-2" onClick={() => voteProject(p.id)}>
              Voter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
