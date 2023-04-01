import type { Database } from '$lib/shared/supabase/database.types';

export type DeviceRaw = Database['public']['Tables']['device']['Row'];
