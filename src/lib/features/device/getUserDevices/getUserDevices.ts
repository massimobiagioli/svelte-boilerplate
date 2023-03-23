import type {SupabaseClient} from "@supabase/supabase-js";
import type {Database} from "../../../supabase/database.types";

const GetUserDevices = (supabase: SupabaseClient<Database>) =>
    async (owner: string) => {
        const {data, error} = await supabase
            .from('device')
            .select()
            .eq('owner', owner);

        if (error) {
            console.error(error);
        }

        return data;
    }

export default GetUserDevices;