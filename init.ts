import "text-encoding-polyfill";
import { AsgardeoAuthClient, Store } from "@asgardeo/auth-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
class ReactStore implements Store {
    public async setData(key: string, value: string): Promise<void> {
        await AsyncStorage.setItem(key, value);
    }

    public async getData(key: string): Promise<string> {
        return AsyncStorage.getItem(key).then((resp: string | null) => {
            return resp ?? "";
        });
    }

    public async removeData(key: string): Promise<void> {
        await AsyncStorage.removeItem(key);
    }
}

const store = new ReactStore();

export const auth = new AsgardeoAuthClient<{}>(store);
