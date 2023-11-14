import { ChangeEvent, useState } from 'react';
import { MdImportExport } from 'react-icons/md';
import Button from './Button';
import TimerComp from './TimerComp';
import Modal from 'react-modal';

function ClaimTimerGroup(props: any) {
  const [showClaimButton, setShowClaimButton] = useState(true);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.id === 'bordered-radio-2') {
      setShowClaimButton(false);
      alert('hello 2')
    } 
    if(event.target.id === 'bordered-radio-1') {
      setShowClaimButton(true);
      alert('hello 1');
    }
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleChange = (event: any) => {
    setIsModalOpen(event.target.checked);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="sm:container sm:mx-auto sm:px-5 my-10 box-border">
      {/* <div className="mb-10 text-3xl text-black">Automatic Claim ( Once per 7 days )</div> */}
      <div className="h-96 w-full">
        {/* <label className="text-3xl">Once per 7 days</label> */}
        <div><TimerComp /></div>
        <div className='flex space-x-3.5 justify-center mt-10 border-t border-b'>
          <div className="flex items-center mt-5 mb-5 w-50 pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-1" onChange={handleRadioChange} type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">User</label>
          </div>
          <div className="flex items-center mt-5 mb-5 w-50 pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-2" onChange={handleRadioChange} type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vault</label>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" onChange={handleToggleChange}/>
          <div className="w-11 h-6 bg-gray border rounded-full peer peer-focus:ring-4 peer-focus:ring-gray dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
        </label>
        {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg shadow p-6">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-900"
              onClick={closeModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L5.707 4.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-700 text-center">Are you sure you want to change into auto Claim?</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-danger text-white rounded-lg mr-2"
                onClick={closeModal}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
        <div className="flex flex-row px-7 pt-3 mt-5 justify-center items-center">
          {showClaimButton && <Button text={'Claim'} />}
        </div>
      </div>
    </div>
  );
}

export default ClaimTimerGroup;