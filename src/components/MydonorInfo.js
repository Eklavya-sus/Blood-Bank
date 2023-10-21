import React from "react";

export default function MyDonorInfo() {
  // Sample donor history data
  const donorHistory = [
    { date: "2021-05-20", location: "City Hospital" },
    { date: "2020-12-15", location: "Community Center" },
    { date: "2019-09-10", location: "Red Cross Clinic" },
  ];

  const handleSection1Click = () => {};

  const handleSection2Click = () => {};

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center">
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5  sm:rounded-lg sm:px-10">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          <button className="text-blue-600">Donor Info</button>
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <InfoItem label="Name" value="John Doe" />
            <InfoItem label="Age" value="27" />
            <InfoItem label="Blood Type" value="A+" />
          </div>
          <div className="flex flex-col">
            <InfoItem label="Mobile" value="123-456-7890" />
            <InfoItem label="Email" value="john.doe@example.com" />
            <InfoItem label="Last Donation Date" value="2021-05-20" />
          </div>
        </div>
        <button
          className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSection1Click}
        >
          Edit Profile
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Donor Info</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSection1Click}
          >
            Donor
          </button>
        </div>
        <div className="mx-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Hospital Info</h2>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSection2Click}
          >
            Hospital
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex justify-between">
      <p className="text-lg font-semibold text-gray-600">{label}:</p>
      <p className="text-lg text-gray-800">{value}</p>
    </div>
  );
}

// function DonationHistoryItem({ date, location }) {
//   return (
//     <li>
//       <p className="text-lg font-semibold text-gray-600">Donation Date:</p>
//       <p className="text-lg text-gray-800">{date}</p>
//       <p className="text-lg font-semibold text-gray-600">Donation Location:</p>
//       <p className="text-lg text-gray-800">{location}</p>
//     </li>
//   );
// }
{
  /* <hr className="my-6 border-t border-gray-300" />
<h2 className="text-xl font-bold text-blue-600 mb-4">Donor History</h2>
<ul className="space-y-4">
  {donorHistory.map((entry, index) => (
    <DonationHistoryItem
      key={index}
      date={entry.date}
      location={entry.location}
    />
  ))}
</ul> */
}
