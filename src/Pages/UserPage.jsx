import React from 'react'
import User from "../Database/User"
import DataTable from '../Component/DataTable';
import { NavigationBar } from '../Component/NavigationBar';

export const UserPage = () => {
  const columns = [
    "USERNAME",
    "EMAIL",
    "ACTION"
  ];
  return (
    <div>
      <NavigationBar/>
      <h1>User Page</h1>
      <DataTable columns={columns} items={User} />
    </div>
  );
}

export default UserPage;
