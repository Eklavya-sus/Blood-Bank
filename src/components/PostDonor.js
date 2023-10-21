import React from 'react';

const NamesData = [
  {
    id: 1,
    name: 'Vera Carpenter',
    email: 'vera@123mail.com',
    bloodGroup: 'A+',
    contact: '9125534512',
  },
  {
    id: 2,
    name: 'eklavya',
    email: 'eklavavva@123mail.com',
    bloodGroup: 'O+',
    contact: '91390022112',
  },
  {
    id: 3,
    name: 'Laura mara',
    email: 'laura@78mail.com',
    bloodGroup: 'AB+',
    contact: '99882410029',
  },
  {
    id: 4,
    name: 'Anna soal',
    email: 'soul@yahoomail.com',
    bloodGroup: 'O-',
    contact: '3565199272',
  },
];

const config = {
  tableHeaders: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'bloodgroup', label: 'BloodGroup' },
    { key: 'contact', label: 'Contact' },
  ],
  selectOptions: [5, 10, 20],
  statusClasses: {
 
  },
};

const NameTable = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-3xl text-center mx-auto font-extrabold leading-tight text-[#02042b]">POST DONOR INFOMATION</h2>
          <div className="w-6 h-1 bg-[#d04742] mx-auto mt-4 mb-3 md:mb-6"></div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select
                className="appearance-none h-full rounded-l border block appearance-none w-full bg-[#02042b] border-[#02042b] text-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-[#02042b] focus:border-gray-500"
              >
                {config.selectOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#02042b]">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                ></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-[#02042b] border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-[#02042b] text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal boder-[#02042b]">
              <thead>
                <tr>
                  {config.tableHeaders.map((header) => (
                    <th
                      key={header.key}
                      className="px-5 py-3 border-b-2 border-[#02042b] bg-[#02042b] text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NamesData.map((Name) => (
                  <tr key={Name.id}>
                    <td className=" py-5 border-b border-[#02042b] bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                        </div>
                        <div>
                          <p className="text-gray-900 whitespace-no-wrap">{Name.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className=" py-5 border-b border-[#02042b] bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{Name.email}</p>
                    </td>
                    <td className="px-10 py-5 border-b border-[#02042b] bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{Name.bloodGroup}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-[#02042b] bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{Name.contact}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-b border-[#02042b] flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm bg-[#d04742] hover-bg-[#02042b] text-white font-bold py-2 px-4 rounded-l">
                  Prev
                </button>
                <button className="text-sm bg-[#d04742] hover-bg-[#02042b] text-white font-bold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameTable;
