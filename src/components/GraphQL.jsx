import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client/react'
import addUser from '../graphql/mutations/addUser';
import getAllUsers from '../graphql/queries/getAllUsers';
import updateUser from '../graphql/mutations/updateUser';

function GraphQL() {
  const [count, setCount] = useState(0)
  const {data,loading}= useQuery(getAllUsers);
  const [addUserFunc,{data:isUsersData,loading:isLoading}] = useMutation(addUser,{
    refetchQueries:[getAllUsers]
  })
  const [updateUserFunc] = useMutation(updateUser,{
    refetchQueries:[getAllUsers]
  })

  console.log("data",data);
  console.log("loading",loading);
  
  const handleAddMutation=async()=>{
    try {
      const resp = await addUserFunc({variables:{name:"Usha",age:12,designation:"python"}});
      console.log("resp",resp);
      
    } catch (error) {
      console.log("error",error);
    }
  }

  const handleUpdateMutation=async()=>{
    try {
      const resp = await updateUserFunc({variables:{updateUserId:2,name:"Usha",age:12,designation:"python"}});
      console.log("resp",resp);
      
    } catch (error) {
      console.log("error",error);
    }
  }

  return (
    <>
      <button onClick={handleAddMutation} >Add Data</button>
      <button onClick={handleUpdateMutation} >Update Data</button>
      <button>Delete Data</button>
    </>
  )
}

export default GraphQL
