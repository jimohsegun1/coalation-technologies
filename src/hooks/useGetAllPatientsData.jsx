import { useState, useEffect } from "react";

import axios from "axios";

export const useGetAllPatientsData = () => {
  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);
  const [patientss, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
          },
        }
      );

      setPatients(data?.data);
      setSelectedPatient(data?.data[3]);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return {
    patientss,
    selectedPatient,
    setSelectedPatient,
    loading,
  };
};
