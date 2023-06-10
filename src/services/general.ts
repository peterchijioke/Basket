import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInterface } from "../types";

const _storeUser = async (user:UserInterface) => {
  try {
    await AsyncStorage.setItem(
      'token',
      JSON.stringify(user),
    );
  } catch (error:any) {
    console.error(error.message)
  }
};

const _retrieveUser = async ():Promise<UserInterface|null> => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      const data:UserInterface=JSON.parse(value)
     return data
    }
    return null
  } catch (error:any) {
   console.log(error.message)
   return null
  }
};

export {_retrieveUser,_storeUser}
