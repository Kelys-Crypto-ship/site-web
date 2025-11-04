export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Kelys</div>
      <div className="space-x-4">
        <a href="#home" className="hover:underline">Accueil</a>
        <a href="#ico" className="hover:underline">ICO</a>
        <a href="#voting" className="hover:underline">Vote</a>
        <a href="#whitepaper" className="hover:underline">Whitepaper</a>
        <a href="#faq" className="hover:underline">FAQ</a>
      </div>
    </nav>
  );
}
