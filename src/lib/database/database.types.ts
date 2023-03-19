export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			device: {
				Row: {
					address: string;
					created_at: string | null;
					description: string | null;
					id: number;
					is_active: boolean;
					name: string;
					owner: string | null;
				};
				Insert: {
					address: string;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					is_active?: boolean;
					name: string;
					owner?: string | null;
				};
				Update: {
					address?: string;
					created_at?: string | null;
					description?: string | null;
					id?: number;
					is_active?: boolean;
					name?: string;
					owner?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
