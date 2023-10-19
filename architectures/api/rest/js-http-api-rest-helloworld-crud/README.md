USAGE COMMANDS
--------------

> Please be aware that following tools should be installed in advance on your computer: **node.js**. 

> Please **clone/download** project, open **project's main folder** in your favorite **command line tool** and then **proceed with steps below**. 

Usage steps:
1. In a command line tool start application with `node app.js`
1. In a http client (e.g. Postman) use **POST** method and visit `http://localhost:3000`
   * Choose **Body -> raw -> JSON** and add following JSON:
   ```
   {
    "id": 1,
    "text": "Hello World 1"
   }
   ```
   * Expected message **New Message was added**
1. In a http client (e.g. Postman) use **GET** method and visit `http://localhost:3000/`
   * Expected following JSON:
   ```
   [
      {
      "id": 1,
      "text": "Hello World 1"
      }
   ]
   ```
1. In a http client (e.g. Postman) use **PUT** method and visit `http://localhost:3000`
   * Choose **Body -> raw -> JSON** and add following JSON:
   ```
   {
    "id": 1,
    "text": "Hello World 1 Updated"
   }
   ```
   * Expected message **Message was updated**
1. In a http client (e.g. Postman) use **GET** method and visit `http://localhost:3000/`
   * Expected following JSON:
   ```
   [
      {
      "id": 1,
      "text": "Hello World 1 Updated"
      }
   ]
   ```
1. In a http client (e.g. Postman) use **DELETE** method and visit `http://localhost:3000/1`
   * Expected message **Message was deleted**
1. In a http client (e.g. Postman) use **GET** method and visit `http://localhost:3000/`
   * Expected message **There is no message yet**
1. Clean up environment 
     * In a command line tool stop application with `ctrl + C`


USAGE IMAGES
------------

Start application:

![My Image](images/image-01.png)

Display result:

![My Image](images/image-02.png)

![My Image](images/image-03.png)

![My Image](images/image-04.png)

![My Image](images/image-05.png)

![My Image](images/image-06.png)

![My Image](images/image-07.png)


DESCRIPTION
-----------

##### Goal
The goal of this project is to present how to implement **CRUD** (Create, Read, Update, Delete) operations in an application type **API REST** in **JavaScript** programming language with usage **http** library. This application enables adding, reading, updating and deleting messages.

##### Terminology
Terminology explanation:
* **JavaScript**: is a scripting or programming language that allows you to implement complex features on web pages or to implement web applications.
* **API REST**: an architectural style for an application program interface (API) that uses HTTP requests to access and use data
* **http library**: is JavaScript library which enables to start web server

##### Flow
The following flow takes place in this project:
1. User via any http client sends request to application with specific CRUD action: Create, Read, Update or Delete.
1. Application performs specific CRUD action.
1. Application sends back response to user via http client with message. This message is different and depends on specific CRUD action.

##### Launch
To launch this application please make sure that the **Preconditions** are met and then follow instructions from **Usage** section.

##### Technologies
This project uses following technologies:
* **JavaScript**: `https://docs.google.com/document/d/1wtk8TTIDLsHSvtyUp7uCk-pOKTpmNwMANRGmBNaoBpc/edit?usp=sharing`
* **Node** (section 'Node'): `https://docs.google.com/document/d/1wtk8TTIDLsHSvtyUp7uCk-pOKTpmNwMANRGmBNaoBpc/edit?usp=sharing`


PRECONDITIONS
-------------

##### Preconditions - Tools
* Installed **Operating System** (tested on Windows 11)
* Installed **Node** (tested on version 18.18.1)

##### Preconditions - Actions
* Download **Source Code** (using Git or in any other way) 
* Open any **Command Line** tool (for instance "Windonw PowerShell" on Windows OS) on downloaded **project's main folder**