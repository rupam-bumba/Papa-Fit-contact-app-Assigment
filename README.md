
# Assigment Papa Fit contact app on the lines of google contacts

  
  
  

## Task

  

Create a contact app on the lines of https://contacts.google.com/ - CRUD operations API - Restful routes.

The backend needs to be built over ExpressJs written in node.js.

Use any database - MySQL, NoSQL or Firebase to connect.

Share the collection over Postman & upload your code to Github / Bitbucket - link be shared here.

  
  

***

  

# API Routes

  

## http://localhost:9002/api/create
	- funtion : Create a contact 
	- input   : {"name": "","email": "","number": ""} 
  

## http://localhost:9002/api/read?qu=[value]
	-funtion : Reads records 
	-input	 : qu=<value>
			   number	: for contact number,
			   stings   : for name and email,
			   blank 	: for all
  

## http://localhost:9002/api/update
	-funtion : Update records
	-input : 	{"_id": "<id of the record >", "name": "","email": "","number": ""} 
  

## http://localhost:9002/api/remove
	-funtion : delete a record
	-input : {"_id": "<id of the record >"}
  
  ***
# Postman Collection Link
 
 https://www.getpostman.com/collections/eddd625a13f3639aa81f