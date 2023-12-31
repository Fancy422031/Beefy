import React, { useEffect, useState } from "react";
import { FaEthereum, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface TableRow {
  id: number;
  network: string;
  name: string;
  wallet: number;
  deposited: number;
  apy: string;
  tvl: string;
}

interface TableProps {
  rows: TableRow[];
  onRowClick: (row: TableRow) => void;
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EarnTable: React.FC<TableProps> = ({ rows, onRowClick, searchQuery, handleSearchChange }) => {
  const sortedRows = [...rows].sort((a, b) => a.id - b.id);
  const handleRowClick = (row: TableRow) => {
    onRowClick(row);
  }
  return (
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 cursor-pointer">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="p-4 w-2">
                    Network
                  </th>
                  <th scope="col" className="px-6 py-3 w-10">
                    <div className="relative">
                      <input
                        type="text"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={searchQuery} 
                        onChange={handleSearchChange}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                      WALLET
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                      DEPOSITED
                  </th> 
                  <th scope="col" className="px-6 py-3 text-center">
                      APY
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                      TVL
                  </th>
              </tr>
          </thead>
          <tbody>
            {sortedRows.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-2 p-4">{row.network === 'eth' && <FaEthereum className="w-6 h-6 mr-2" />}{row.network === 'polygon' && <img src="polygon.png" className="w-6 h-6 mr-2" />}{row.network === 'bnb' && <img src="bnb.png" className="w-6 h-6 mr-2" />}{row.network === 'fantom' && <img src="fantom.png" className="w-6 h-6 mr-2" />}{row.network === 'arbitrum' && <img src="arbitrum.png" className="w-6 h-6 mr-2" />}{row.network === 'cronos' && <img src="cronos.png" className="w-6 h-6 mr-2" />}</td>
                <th className="text-base font-semibold text-center">{row.name}</th>
                <td className="w-8 p-4 text-center">{row.wallet}</td>
                <td className="w-8 p-4 text-center">{row.deposited}</td>
                <td className="w-8 p-4 text-center">{row.apy}</td>
                <td className="w-8 p-4 text-center">{row.tvl}</td>
              </tr>
            ))}
          </tbody>
      </table>
  )
}

const Earn = () => {
  const [rows, setRows] = useState<TableRow[]>([]);
  const navigate = useNavigate();
  const [isAllSelected, setIsAllSelected] = useState(true);
  
  const handleRowClick = (row: TableRow) => {
    navigate('/vault');
  }
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }
  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [buttonClicked, setButtonClicked] = useState<{ [key: string]: boolean }>({
    etherBtn: false,
    polygonBtn: false,
    bnbBtn: false,
    fantomBtn: false,
    arbitrumBtn: false,
    cronosBtn: false
  });

  const handleButtonClick = (buttonId: string, buttonRows: TableRow[]) => {

    if (buttonId === "clearBtn") {
      setIsAllSelected(true)
      setButtonClicked((prevState: { [key: string]: boolean }) => {
        const updatedState: { [key: string]: boolean } = {};
        Object.keys(prevState).forEach((key) => {
          updatedState[key] = false;
        });
        return updatedState;
      });
      setRows(buttonRows); 
      return;
    }

    setButtonClicked((prevState: { [key: string]: boolean }) => {
      if (isAllSelected) {
        const updatedState: { [key: string]: boolean } = {};
        Object.keys(prevState).forEach((key) => {
          if (key === buttonId) {
            updatedState[key] = prevState[key];
          } else {
            updatedState[key] = true;
          }
        });
        return updatedState;
      } else {
        return {
          ...prevState,
          [buttonId]: !prevState[buttonId]
        };
      }
    });

    setRows((prevRows) => {
      if(isAllSelected){
        return buttonRows;
      } else {
        const isDisplayed = buttonRows.every((row) =>
          prevRows.some((prevRows) => prevRows.id === row.id)
        );

        if(isDisplayed){
          return prevRows.filter(
            (prevRows) => !buttonRows.some((row) => row.id === prevRows.id)
          );
        }
        return [...prevRows, ...buttonRows];
      }
    });
    setIsAllSelected(false);
  };
  
  const rowMap: { [key: number]: TableRow } = {
    1: { id: 1, network: 'eth', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M' },
    2: { id: 2, network: 'eth', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M' },
    3: { id: 3, network: 'polygon', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M' },
    4: { id: 4, network: 'polygon', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M' },
    5: {id:5, network: 'bnb', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    6: {id:6, network: 'bnb', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    7: {id:7, network: 'fantom', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    8: {id:8, network: 'fantom', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    9: {id:9, network: 'arbitrum', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    10: {id:10, network: 'arbitrum', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    11: {id:11, network: 'cronos', name: 'USDC-USDR sLP - 1', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'},
    12: {id:12, network: 'cronos', name: 'USDC-USDR sLP - 2', wallet: 0, deposited: 0, apy: '41.65%', tvl: '$7.54M'}
  };
  
  const buttons = [
    { id: 'etherBtn', label: <FaEthereum className="w-12 h-6" />, data: [rowMap[1], rowMap[2]]},
    { id: 'polygonBtn', label: <img src="polygon.png" className="w-6 h-6 mr-3 ml-3" />, data: [rowMap[3], rowMap[4]]},
    { id: 'bnbBtn', label: <img src="bnb.png" className="w-6 h-6 mr-3 ml-3" />, data: [rowMap[5], rowMap[6]]},
    { id: 'fantomBtn', label: <img src="fantom.png" className="w-6 h-6 mr-3 ml-3" />, data: [rowMap[7], rowMap[8]]},
    { id: 'arbitrumBtn', label: <img src="arbitrum.png" className="w-6 h-6 mr-3 ml-3" />, data: [rowMap[9], rowMap[10]]},
    { id: 'cronosBtn', label: <img src="cronos.png" className="w-6 h-6 mr-3 ml-3" />, data: [rowMap[11], rowMap[12]]}
  ];


  useEffect(() => {
    const initialRows: TableRow[] = Object.values(rowMap);
    setRows(initialRows);
  }, []);

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <div>
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`border border-blue-700 hover:bg-blue-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ml-auto bg-secondary${
                buttonClicked[button.id] ? 'bg-secondary' : ''
              }`}
              onClick={() => handleButtonClick(button.id, button.data)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <button
          id="clearBtn"
          type="button" 
          onClick={() => 
            handleButtonClick('clearBtn', Object.values(rowMap))
          }  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ml-auto">
          Clear All
        </button>

      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-t">
        <EarnTable rows={filteredRows} onRowClick={handleRowClick} searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      </div>
    </>
  );
};

export default Earn;