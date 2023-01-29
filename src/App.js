function App() {
  return (
    <>
      <div className="container w-1/4 rounded mt-[80px] mx-auto shadow-md">
          <div className="relative rounded-tl rounded-tr bg-blue-600 text-white py-10 font-bold text-right">
              <p className="text-[14px] absolute top-2 right-4">Prev operation</p>
              <p className="text-[28px] absolute bottom-1 right-4">0</p>
          </div>
          <div className="grid grid-cols-4">
              <button className="col-span-2 bg-slate-400 text-white">AC</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">DEL</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">+</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">7</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">8</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">9</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">*</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">4</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">5</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">6</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">+</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">1</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">2</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">3</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">-</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">.</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">0</button>
              <button className="col-span-2 bg-slate-400 text-white text-[28px]">=</button>
          </div>
      </div>
    </>
  );
}

export default App;
