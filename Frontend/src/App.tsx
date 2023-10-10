import svg from './assets/react.svg';

function App() {
  return (
    <div className="my-8 flex flex-col items-center gap-3 bg-orange-200 py-24">
      <img src={svg} alt="" />
      <h1 className="text-3xl font-bold text-black">
        Welcome to Nexascale-Frontend-Mentor
      </h1>
      <hr className="h-1 w-5/6 max-w-md bg-black" />
    </div>
  );
}

export default App;
