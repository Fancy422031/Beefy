import Button from '../components/Button';
import InputBoxLabel from '../components/InputBoxLabel';

function DepositGroup(props: any) {
  return (
    <div className="sm:container sm:mx-auto sm:px-5 my-10 box-border">
      <div className="box-border h-full w-full">
        <InputBoxLabel
          Token={'SPC'}
          Balance={'5000'}
          onChange={props.handleSpcChange}
          isEmpty={!props.isAssetEmpty}
        />
        <InputBoxLabel
          Token={'WETH'}
          Balance={'1000'}
          onChange={props.handleWethChange}
          isEmpty={!props.isAssetEmpty}
        />
        <div className="flex flex-row px-7 pt-3 justify-center items-center">
          <Button text={'Deposit'} buttonClicked={props.handleDepositClick} />
        </div>
      </div>
    </div>
  );
}

export default DepositGroup;
