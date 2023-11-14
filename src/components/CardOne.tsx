import { FaMoneyCheckAlt } from "react-icons/fa";
const CardOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex item-center">
        <FaMoneyCheckAlt style={{ fontSize: '4em' }}/>
        <h1 className="text-xl font-bold mt-auto mb-auto ml-4">YOUR DEPOSITS</h1>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            $1.11
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
