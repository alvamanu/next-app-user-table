"use client";
import * as React from "react";
import axios from "axios";
import { UserRow } from "../types/userType";
import UserTable from "../components/table";

const Customers = () => {
  const [rows, setRows] = React.useState([]);
  const [data, setData] = React.useState<UserRow[]>([]);
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  React.useEffect(() => {
    if (isOnline) {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        setData(res.data.results);
        let tableData = res.data.results.map((row: UserRow) => {
          return {
            cell: row.cell,
            avatar: row.picture.thumbnail,
            name: `${row.name.title} ${row.name.first} ${row.name.last}`,
            age: row.dob.age,
            city: row.location.city,
          };
        });
        setRows(tableData);
      });
    } else {
      const storedDataJSON = localStorage.getItem("users");
      const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : null;
      setData(storedData);
      let tableData = storedData.map((row: UserRow) => {
        return {
          cell: row.cell,
          avatar: row.picture.thumbnail,
          name: `${row.name.title} ${row.name.first} ${row.name.last}`,
          age: row.dob.age,
          city: row.location.city,
        };
      });
      setRows(tableData);
    }
  }, []);
  return <UserTable data={data} rows={rows} />;
};

export default Customers;
