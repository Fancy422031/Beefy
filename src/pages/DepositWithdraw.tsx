import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';
import Deposit from './Deposit';
import WithDraw from './Withdraw';
import { Tab, initTE } from 'tw-elements';
import ClaimTimerGroup from '../components/ClaimTimerGroup';
initTE({ Tab });

const DepositWithdraw = (props: any) => {
  const [isTab1Visible, setIsTab1Visible] = useState(true);
  const [isTab2Visible, setIsTab2Visible] = useState(false);
  const [isTab3Visible, setIsTab3Visible] = useState(false);
  const handleTab1Page = () => {
    setIsTab1Visible(true);
    setIsTab2Visible(false);
    setIsTab3Visible(false);
  };
  const handleTab2Page = () => {
    setIsTab2Visible(true);
    setIsTab1Visible(false);
    setIsTab3Visible(false);
  };
  const handleTab3Page = () => {
    setIsTab3Visible(true);
    setIsTab1Visible(false);
    setIsTab2Visible(false);
  };

  return (
    <>
      <div className='w-full bg-white flex block m-auto h-[60vh] flex-row flex-wrap border-2 rounded-[12px] pl-0'>
        <ul
          className="w-full mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation" className="flex-auto mb-0 h-1/20 text-center">
            <button
            className="bg-gray  text-black border-r rounded-tl-[12px] border-t-0 w-[100%] h-15 text-4xl leading-tight hover:isolate hover:border-b-2 focus:isolate focus:border-b-2 focus:border-black data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
            onClick={handleTab1Page}
            >Deposit</button>
          </li>
          <li role="presentation" className="flex-auto mb-0 text-center">
            <button
            className="bg-gray text-black border-t-0 w-[100%] h-15 text-4xl leading-tight hover:isolate hover:border-b-2 focus:isolate focus:border-b-2 focus:border-black data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
            onClick={handleTab2Page}
            >Withdraw</button>
          </li>
          <li role="presentation" className="flex-auto mb-0 text-center">
            <button
            className="bg-gray text-black border-l rounded-tr-[12px] border-t-0 w-[100%] h-15 text-4xl leading-tight hover:isolate hover:border-b-2 focus:isolate focus:border-b-2 focus:border-black data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
            onClick={handleTab3Page}
            >Claim</button>
          </li>
        </ul>

        <div className="mx-auto justify-center items-center">
          {isTab1Visible &&
            <Deposit
              handleSpcChange={props.handleSpcChange}
              handleWethChange={props.handleWethChange}
              handleDepositClick={props.handleDepositClick}
              setIsAssetEmpty={props.setIsAssetEmpty}
              isAssetEmpty={props.isAssetEmpty}
            />
          }
          {isTab2Visible &&
            <WithDraw
              handleShareChange={props.handleShareChange}
              handleShareWithdrawClick={props.handleShareWithdrawClick}
              handleClaimClick={props.handleClaimClick}
              setIsAssetEmpty={props.setIsAssetEmpty}
              isAssetEmpty={props.isShareEmpty}
            />
          }
          {isTab3Visible &&
            <ClaimTimerGroup
              handleInputChange={props.handleInputChange}
              handleDepositClick={props.handleDepositClick}
              setIsAssetEmpty={props.setIsAssetEmpty}
              isAssetEmpty={props.isAssetEmpty}
            />
          }
        </div>
      </div>
    </>
  );
};

export default DepositWithdraw;
