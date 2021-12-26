import FileList from "../../components/FileList";

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-mono font-bold text-xl m-3 p-2 border-b-2 text-gray-500'>
        Files you've uploaded recently...
      </h2>
      <FileList />
    </div>
  );
};

export default Home;
