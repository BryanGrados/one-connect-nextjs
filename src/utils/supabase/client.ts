import { createBrowserClient } from "@supabase/ssr";
import { supabaseAnonKey, supabaseUrl } from "../config";

/**
 * Creates a Supabase client instance using the Supabase URL and anonymous key.
 * @returns A Supabase client instance.
 */
export const createClient = () => createBrowserClient(supabaseUrl, supabaseAnonKey);
