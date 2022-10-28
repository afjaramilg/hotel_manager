# hotel_manager
A hotel management thingy.

## Running locally 
### Back-end
1. Make sure you have a properly-configured MongoDB server.
2. `cd` into `./hm-backend` 
2. Set up the appropriate values for the variables in `.env`. 
3. `npm install` 
4. Run the back-end: `npm run start` (or `npm run start:dev` for development)

## Running in Docker
`docker-compose.yml` provides a simple deployment configuration for local development or testing purposes.
1. `docker compose up -d` (not `docker stack deploy...`)

