import CardFour from '../components/CardFour.tsx';
import CardFive from '../components/CardFive.tsx';
import CardOne from '../components/CardOne.tsx';
import CardThree from '../components/CardThree.tsx';
import CardTwo from '../components/CardTwo.tsx';
import ChartThree4 from '../components/ChartThree4.tsx';
import DepositWithdraw from './DepositWithdraw.tsx';

const Vault = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
      </div>
      
      <div className='border-t mt-4'>
        <h1 className='mt-4 font-bold'>Overview</h1>
        <div className="flex mt-4 grid-cols-3 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <ChartThree4 />
          <DepositWithdraw />
        </div>
      </div>
    </>
  );
};

export default Vault;
