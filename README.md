Use node 16.20.2 

do npm install 
and run "npm run dev" for dev server to start

use the below request to import and run it in postman or httpie

POST Register device: 

curl --request POST \
  --url http://localhost:3000/register \
  --header 'Content-Type: application/json' \
  --data '{
    "userId": "cdsascdsddddddacads",
    "deviceType": "andriod",
    "deviceId": "dfgdgd"
}'

Get Userid:

curl --request GET \
  --url 'http://localhost:3000/device/list?userid=cdsascdsddddddacads' \
  --header 'Content-Type: application/json'


PUT Update Data:

curl --request PUT \
  --url http://localhost:3000/register \
  --header 'Content-Type: application/json' \
  --data '{
    "userId": "cdsascdsddddddddacads",
    "deviceType": "andriod",
    "deviceId": "dfgdgdss"
}'


  





