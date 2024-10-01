import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

export async function groupCreate(newGroup: string) {
  try {
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroup);
    const storedGroups = await getAllGroups();

    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    return newGroup;
  } catch (error) {
    throw error;
  }
}
