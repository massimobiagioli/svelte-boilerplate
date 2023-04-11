create table
  public.device (
    id bigint generated by default as identity not null,
    name character varying not null,
    address character varying not null,
    description text null,
    created_at timestamp with time zone null default now(),
    is_active boolean not null default false,
    owner uuid null,
    constraint device_pkey primary key (id),
    constraint device_address_key unique (address),
    constraint device_name_key unique (name),
    constraint device_owner_fkey foreign key (owner) references auth.users (id)
  ) tablespace pg_default;