import {Text , Box,VStack,Heading,FlatList } from 'native-base'
import { useContext,useEffect } from 'react'
import { UsersContext } from '../Context/context'
import User from "./theUsers";
import {getUsers} from  '../Actions/actions'

export default Home=(props)=>{
    // const theValueOfContext = useContext(UsersContext)
    const { state, dispatch } = useContext(UsersContext);
    console.log(state);
    useEffect(() => {
      const resolveAction = async () => {
        dispatch(await getUsers());
      };
      resolveAction();
    }, []);
    return   <VStack>
    <Heading fontSize="xl" p="4" pb="3">
      UsersList
    </Heading>
    <FlatList data={state.list} renderItem={
        ({item})=><User item={item} {...props}/>
    } 
    ItemSeparatorComponent={()=><Box style={{margin:5,borderBottomWidth:2,borderBottomColor:'grey'}}></Box> }/>
  </VStack>
}