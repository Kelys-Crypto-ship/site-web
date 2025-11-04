import { useState } from "react";
import { ethers } from "ethers";
import { config } from "../config";
import KelysICOAbi from "../abis/KelysICO.json";

export default function BuyKelys() {
  const [amount, setAmount] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [signer, setSigner] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const prov = new ethers.BrowserProvider(window.ethereum);
      await prov.send("eth_requestAccounts", []);
      setSigner(await prov.getSigner());
      setWalletConnected(true);
    } else alert("Installez MetaMask !");
  };

  const buyTokens = async () => {
    if (!walletConnected) return alert("Connectez votre wallet d'abord !");
    const contract = new ethers.Contract(config.icoAddress, KelysICOAbi, signer);
    const value = ethers.parseEther(amount); // montant en MATIC
    const tx = await contract.buyTokens({ value });
    await tx.wait();
    alert("Kelys achetés avec succès !");
  };

  return (
    <div className="mt-4">
      {!walletConnected && (
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      <div className="mt-2">
        <input
          type="text"
          placeholder="Montant en MATIC"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={buyTokens}>
          Acheter KLS
        </button>
      </div>
    </div>
  );
}
