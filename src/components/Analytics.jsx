import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const Analytics = ({ selectedPatient }) => {
  const yearMonthOfDiagnosisHistory = selectedPatient?.diagnosis_history
    ?.map((item) => `${item.month} ${item.year}`)
    .reverse();

  const diastolicDiagnosisHistory = selectedPatient?.diagnosis_history
    ?.map((item) => item?.blood_pressure?.diastolic?.value)
    .reverse();

  const systolicDiagnosisHistory = selectedPatient?.diagnosis_history
    ?.map((item) => item?.blood_pressure?.systolic?.value)
    .reverse();

  const data = {
    labels: yearMonthOfDiagnosisHistory,
    datasets: [
      {
        label: "Systolic",
        data: systolicDiagnosisHistory,
        borderColor: "#E66FD2 ",
        backgroundColor: "#C26EB4",
      },
      {
        label: "Diastolic",
        data: diastolicDiagnosisHistory,
        borderColor: "#8C6FE6",
        backgroundColor: "#7E6CAB",
      },
    ],
  };

  return (
    <div className="w-2/4 h-full flex flex-col gap-6">
      <div className="bg-white rounded-xl py-4 px-3 ">
        <h6 className=" md:text-[24px] text-[18px] font-semibold pb-8">
          Diagnosis History
        </h6>
        <div className="flex gap-3 w-full flex-col">
          <div className="w-full bg-[#F4F0FE] h-[298px] rounded-xl flex p-3 gap-4">
            <div className="w-2/3  h-full min-h-full">
              <h6 className=" md:text-[18px] text-[16px] font-semibold pb-3">
                Blood Pressure
              </h6>
              <Line options={options} data={data} />
            </div>
            <div className="w-1/3 flex flex-col">
              <div className=" flex flex-col gap-2 border-b-[1px] border-gray-300 pb-3">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 rounded-full bg-[#E66FD2]"></div>
                  <p className="text-[14px]">Systolic</p>
                </div>
                <h1 className="text-[22px] font-bold">160</h1>
                <div className="flex gap-2 items-center">
                  <img src="/assets/icons/ArrowUp.svg" alt="arrow" />
                  <p className="text-[14px] text-[#072635]">
                    Higher than Average
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-2 pt-3">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 rounded-full bg-[#8C6FE6]"></div>
                  <p className="text-[14px]">Diastolic</p>
                </div>
                <h1 className="text-[22px] font-bold">78</h1>
                <div className="flex gap-2 items-center">
                  <img src="/assets/icons/ArrowDown.svg" alt="arrow" />
                  <p className="text-[14px] text-[#072635]">
                    Lower than Average
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="bg-[#E0F3FA] p-3 rounded-xl flex flex-col gap-2 justify-between w-1/3">
              <div className="flex flex-col gap-2">
                <img
                  src="/public/assets/icons/respiratory.png"
                  alt="icon"
                  className="w-[96px] h-[96px]"
                />
                <p className="text-[16px] font-medium m-0 p-0">
                  Respiratory rate
                </p>
                <h5 className="text-[30px] font-extrabold m-0 p-0">20 bpm</h5>
              </div>
              <p className="text-[14px] m-0 p-0">Normal</p>
            </div>
            <div className="bg-[#FFE6E9] p-3 rounded-xl flex flex-col gap-2 justify-between w-1/3">
              <div className="flex flex-col gap-2">
                <img
                  src="/public/assets/icons/temperature.png"
                  alt="icon"
                  className="w-[96px] h-[96px]"
                />
                <p className="text-[16px] font-medium m-0 p-0">Temperature</p>
                <h5 className="text-[30px] font-extrabold m-0 p-0">96.8 F </h5>
              </div>
              <p className="text-[14px] m-0 p-0">Normal</p>
            </div>
            <div className="bg-[#FFE6F1] p-3 rounded-xl flex flex-col gap-2 justify-between w-1/3">
              <div className="flex flex-col gap-2">
                <img
                  src="/public/assets/icons/HeartBPM.png"
                  alt="icon"
                  className="w-[96px] h-[96px]"
                />
                <p className="text-[16px] font-medium m-0 p-0">
                  Respiratory rate
                </p>
                <h5 className="text-[30px] font-extrabold m-0 p-0">78 bpm</h5>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/ArrowDown.svg" alt="arrow" />
                <p className="text-[14px] text-[#072635]">Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl py-4 px-3  w-full  ">
        <h6 className=" md:text-[24px] text-[18px] font-semibold pb-8">
          Diagnostic List
        </h6>

        <div className="overflow-y-auto w-full max-h-[200px]">
          <div className="w-full overflow-x-auto">
            <table className=" w-full">
              <thead className="text-[#072635] text-[14px] text-semibold rounded-full ">
                <tr className="">
                  <th
                    scope="col "
                    className="text-left py-2 px-3 bg-[#F6F7F8] rounded-s-full mb-3"
                  >
                    Problem/Diagnosis
                  </th>
                  <th
                    scope="col"
                    className="text-left py-2 px-3 bg-[#F6F7F8] mb-3"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-left py-2 px-3 bg-[#F6F7F8] rounded-e-full mb-3"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="w-full text-[14px]">
                {selectedPatient?.diagnostic_list?.map((list, index) => (
                  <tr className=" cursor-pointer w-full " key={index}>
                    <td className="whitespace-nowrap text-left py-4 px-3">
                      {list?.name}
                    </td>
                    <td className="whitespace-nowrap text-left py-4 px-3">
                      {list?.description}
                    </td>
                    <td className="text-left py-4 px-3">{list?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
