import Button from './Button';
import InputBox from './InputBox';

function SwapGroup(props: any) {
  return (
    <div className="sm:container sm:mx-auto sm:px-5 mt-16 my-11 box-border min-w-250px">
      <div className="mb-14 text-5xl text-black">Swap</div>
      <div className="box-border h-96 w-full">
        <InputBox
          id="intoken"
          name="inToken"
          Token={'SPC'}
          handleCurrentValueChange={props.handleCurrentValueChange}
          Balance={'10000'}
          onChange={props.handleInputSwapChange}
          isEmpty={props.isAssetEmpty}
          value={props.inputSwapAmount}
        />
        <InputBox
          id="outtoken"
          name="outToken"
          Token={'WETH'}
          Balance={'5000'}
          onChange={props.handleOutputSwapChange}
          isEmpty={false}
          value={props.outputSwapAmount}
        />
        <div className="flex flex-row px-7 pt-3 justify-center items-center">
          <Button text={'Swap'} buttonClicked={props.handleSwapClick} />
        </div>
      </div>
    </div>
  );
}

export default SwapGroup;
