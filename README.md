# HomeFileServer 💻
A simple HomeFileServer 👍
## Usage
- In Your Spare Laptop
- For Storage Purposes

## Based On?
1. NodeJS 

## Setup 🚀
**Follow Step by step**
- Clone this repository on your local machine

- Execute npm install
- Add .env file in src/
- Add PORT , CLOUDINARY_CLOUD_NAME , CLOUDINARY_API_KEY , CLOUDINARY_API_SECRET , MONGODB_URI

add values according to :
- Cloudinary Cloud name
add your cloudinary cloud name
- Cloudinary Cloud Api Key
add your cloudinary api key
- Cloudinary Api Secret
add your cloudinary api secret
- Port 
add Port in which you want to run the app
- MONGODB_URI
add you mongo db uri

### Starting the app
```
npm start
```

## About this project 🗒️
this is backend for a HomeFileServer
it has login register functionality it will store users in database
user can add files , then this server will check the username , password from the request if the user with correct password exists it will store the filename in database and then upload it to cloudinary , then the user can download files from it , and delete it , they can sync their files to A Cloud hosted server on Vercel so that if they are out of the reach of their pc they can talk to cloud hosted server on Vercel to upload or take their files and delete them