function MobileSidebar() {
  return (
    <div className="fixed flex h-screen w-3/4 flex-col border border-gray-100 bg-white sm:w-1/2 md:hidden">
      <h2 className="mt-8 self-center text-xl">Vespa</h2>
      <ul className="mt-16">
        <li className="ml-2 bg-[#97BF0F] py-2 pl-3 font-bold text-white">
          MODELS
        </li>
        <li className="ml-2 py-2 pl-3 font-bold text-slate-700">LIFESTYLE</li>
        <li className="ml-2 py-2 pl-3 font-bold text-slate-700">SHOP</li>
        <li className="ml-2 py-2 pl-3 font-bold text-slate-700">TEST DRIVE</li>
      </ul>
      <ul className="mt-auto flex">
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  );
}

export default MobileSidebar;