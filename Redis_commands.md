// Set a key
await client.set('myKey', 'myValue');

// Get a key
const value = await client.get('myKey');

// Delete a key
await client.del('myKey');

// Check if key exists
const exists = await client.exists('myKey');  // returns 0 or 1

// Set expiration (seconds)
await client.expire('myKey', 60);

// Get TTL
const ttl = await client.ttl('myKey');

// Get all keys 

const keys = await client.keys('*');

<!-- Set a key with TTL in seconds -->

await client.set('myKey', 'myValue', {
    EX: 60  // expires in 60 seconds
});

<!-- // delete all keys -->

<!-- FLUSHDB -->
Deletes all keys in the current database only.
Using FLUSHDB affects only the DB you are connected to.

await client.flushDb(); // only deletes keys in DB 0 by default

<!-- FLUSHALL -->

Deletes all keys in all databases.
Completely wipes out everything Redis is storing.

await client.flushAll(); // clears DB 0 to DB 15
 

await client.set('count', '1');
await client.incr('count');         // increment by 1
await client.incrBy('count', 5);   // increment by 5
await client.decr('count');         // decrement by 1
await client.append('key', 'more'); // append string