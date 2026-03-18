Day 1
MangoDB Docs:

🧠 What is MongoDB?
MongoDB is a NoSQL database used to store data in a flexible, JSON-like format.

JSON: 
{
  "name": "Rahul",
  "age": 20
}   


1. Database
A container of collections 
Like a folder

2. Collection
Group of documents
Like a table in SQL

3. Document
A single record (JSON-like)



{
  "name": "Aman",
  "age": 18,
  "skills": ["JavaScript", "MongoDB"]
}



🧱 Core Concepts:

Database
A structured container that holds collections in MongoDB.

Collection
A grouping of MongoDB documents, similar to a table in relational databases but without a fixed schema.

Document
A single record stored in BSON (Binary JSON) format, consisting of key-value pairs.

Field
A key-value pair within a document.





🔑 Data Structure:

BSON (Binary JSON)
The binary-encoded format MongoDB uses to store documents, supporting more data types than JSON.

_id Field
A unique identifier automatically assigned to each document to ensure uniqueness.

Embedded Document
A document nested inside another document to represent related data.

Array
A field that can store multiple values in a list format.





⚙️ Operations (CRUD):

Insert
The operation of adding new documents to a collection.

Query (Read)
The process of retrieving documents from a collection based on conditions.

Update
The modification of existing documents in a collection.

Delete
The removal of documents from a collection.





🔍 Query & Operators:

Query
A request to retrieve specific data from a database.

Operator
Special keywords (like $gt, $set) used to define conditions or modify data in queries.