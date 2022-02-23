import {Text , Box } from 'native-base'
import { useContext, useEffect } from 'react';
import { getUserDetails,clearDetails } from '../Actions/actions';
import { UsersContext } from '../Context/context';
export default Details=()=>{
    const {state,dispatch} = useContext(UsersContext)
    console.log(state)
    useEffect(()=>{
        const resolveAction = async () => {
            dispatch(await getUserDetails(route.params.id));
          };
          resolveAction();
        return ()=>{
            dispatch(clearDetails())
        }
    },[])
    if(state.details.id)
    return <VStack style={{margin:10}}>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Name:
            </Text>
            <Text>
              { state.details.name }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Email:
            </Text>
            <Text>
              { state.details.email }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Phone:
            </Text>
            <Text>
              { state.details.phone }
            </Text>
        </HStack>
        <HStack style={{
            borderBottomWidth:2,
            borderBottomColor:'black',
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Website:
            </Text>
            <Text>
              { state.details.website }
            </Text>
        </HStack>
        <HStack 
        style={{
            margin:5
        }}>
            <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                Bio:
            </Text>
            <Text>
             Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
             Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
            </Text>
        </HStack>
    </VStack>
    return <Text>Loading...</Text>
}