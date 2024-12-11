```javascript
// Incorrect use of $in operator with an array of ObjectId

db.collection('users').find({ _id: { $in: ["651a7d2c6904787f247f756a", "651a7d2c6904787f247f756b"] }})
```