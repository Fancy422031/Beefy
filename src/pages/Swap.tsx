import { Tab, initTE } from 'tw-elements';
import SwapGroup from '../components/SwapGroup';

initTE({ Tab });

function Swap(props: any) {
  return (
    <>
      <div className="m-auto mt-20 basis-1/4 h-[70vh] w-[30vw] min-w-[290px] flex list-none flex-row border-2 border-blue-400 rounded-[60px] pl-0">
        <div className="m-auto justify-center items-center">
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home01"
            role="tabpanel"
            aria-labelledby="tabs-home-tab01"
            data-te-tab-active
          >
            <SwapGroup
              handleCurrentValueChange={props.handleCurrentValueChange}
              handleInputSwapChange={props.handleInputSwapChange}
              handleOutputSwapChange={props.handleOutputSwapChange}
              handleSwapClick={props.handleSwapClick}
              inputSwapAmount={props.inputSwapAmount}
              outputSwapAmount={props.outputSwapAmount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Swap;