#  In this we will setup a simple backend database and redis app.

# Logic -- If data is not available in redis cache then we will search that data in database else we will search in redis.

# Logic -- If data is not vailable in the redis then we will fetch data from db and also store it in redis for next time searching.