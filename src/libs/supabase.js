import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://xzldxcovqfsalqxtiypq.supabase.co";

const supabaseAnonKey =
  "sb_publishable_Luhhcj2kD7-lkKeYOvSm8Q_1I7F02n_";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    }
  );