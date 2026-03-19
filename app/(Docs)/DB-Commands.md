Day 2
MangoDB Docs:


What is MongoDB?
MongoDB is a NoSQL document-oriented database. It stores data in JSON-like
documents (actually BSON, a binary form of JSON).



Key Components:
mongod – the main MongoDB server daemon. It handles connections,
database storage, and queries. You must run this before using MongoDB
locally.

mongosh – the MongoDB Shell. It’s the command-line interface for
interacting with MongoDB. You use it to run commands, queries, and scripts.

MongoDB Compass – a GUI tool for visualizing data, running queries, and
analyzing performance. Perfect for beginners who prefer a graphical view.



db.products.find()
db.products.find().pretty()
show dbs
use school
db.createCollection("students")
db.students.drop()