# MongoDB Query Error: Incorrect use of $in operator with ObjectId

This repository demonstrates a common error in MongoDB queries when using the `$in` operator with ObjectId values.  The error arises from providing ObjectId values as strings instead of proper ObjectId objects.

## Bug
The `bug.js` file shows how to incorrectly use the `$in` operator. This results in no results being returned, even if the ObjectIds exist in the database.

## Solution
The `bugSolution.js` file illustrates the correct way to perform the query using the `$in` operator with ObjectId objects, ensuring accurate retrieval of matching documents.

## How to Reproduce
1. Clone the repository
2. Run `bug.js` and observe the result.
3. Run `bugSolution.js` and observe the correct result.