import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartThree1 from '../../components/ChartThree1.tsx';
import ChartThree2 from '../../components/ChartThree2.tsx';
import ChartThree3 from '../../components/ChartThree3.tsx';
import Earn from '../Earn.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <div className='border-t mt-4'>
      <h1 className='mt-4 font-bold'>Overview</h1>
      <div className="grid mt-4 grid-cols-3 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <ChartThree1 />
        <ChartThree2 />
        <ChartThree3 />
      </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <Earn />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
