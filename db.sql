-- CREATE

create extension "uuid-ossp";

create table users(
	user_id uuid not null default uuid_generate_v4() primary key,
	user_username character varying(32)
);

create unique index users_idx on users (lower(user_username));

create table history(
	history_id serial primary key,
	history_action int,
	history_old_state character varying(72),
	history_new_state character varying(72)
);

-- INSERT

insert into users (user_username) values ('akbarjondev'), ('ali'), ('vali');

-- FUNCTION
-- delete - 2, update - 1

create function write_history() returns trigger language PLPGSQL as $$ begin
	
	-- if new.history_new_state <> old.history_new_state then
		insert into history (history_action, history_old_state, history_new_state) values (1, old.user_username, new.user_username);
	-- end if;

	return new;
end;
$$;

create trigger write_history_on_update
before update on users
for each row
execute procedure write_history();

