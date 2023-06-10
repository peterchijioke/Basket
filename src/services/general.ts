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

const _retrieveUser = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
     return JSON.parse(value)
    }
  } catch (error:any) {
   console.log(error.message)
  }
};

export {_retrieveUser,_storeUser}
