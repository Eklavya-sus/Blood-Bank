import React from 'react';

export default function MyDonorInfo() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center">
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5  sm:rounded-lg sm:px-10">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          <span className="text-blue-600">Donor Info</span>
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
        <button className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <>
      <p className="text-lg text-gray-500">
        {label}: {value}
      </p>
    </>
  );
}
