# Chatbot documentation

![Illustration](https://i.imgur.com/sNaPmFv.png)

## Back-end
To access the chatbot dashboard, you will first need to run a back-end so that authentication can take place.

For that, clone this repository :

```
git clone https://github.com/bzh2610/GAC-nodejs-backend-architecture-typescript 
```


Configure the application:

``` 
cd ./GAC-nodejs-backend-architecture-typescript
cp .env.example .env
cp ./keys/private.pem.example ./keys/private.pem
cp ./keys/public.pem.example ./keys/public.pem
cp ./tests/.env.test.example ./tests/.env.test
``` 

Run  `npm install`  to install the dependencies.

### Run with Docker
* Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
    * Execute `docker-compose up -d` in terminal from the repo directory.
    * You will be able to access the api from http://localhost:3000

### Run without Docker
    * Install MongoDB on your local.
    * Do steps 1 to 5 as listed for **Install using Docker Compose**.
    * Create users in MongoDB and seed the data taking reference from the **addons/init-mongo.js**
    * Change the `DB_HOST` to `localhost` in **.env** and **tests/.env.test** files.
    * Execute `npm start` and You will be able to access the API from http://localhost:3000
    * To run the tests execute `npm test`.


## Front-end dashboard
First, clone the repository of the Chatbot 🤖

``` 
git clone https://github.com/bzh2610/GAC-nodejs-backend-architecture-typescript
``` 


Install the required dependencies :

``` 
cd ./GAC-nodejs-backend-architecture-typescript
npm install
``` 


Run the server using `npm run start` 
You will be prompted if you wish to switch port, type `Y` to accept. The front-end should run on port 3001.
You can access the dashboard at : http://localhost:3001

---

# Pursuing our work

#### Dashboard :

To connect the dashboard, the back-end and the chatbot, the following steps seems like to appropriate ones to take :

✅ Store the products in the back-end.
`The data structure used to define the products is very similar to the one used by Stripe Checkout, documentation can be found here : [Checkout overview | Stripe Checkout](https://stripe.com/docs/payments/checkout) `

✅ Store the comparison criteria in the back-end
`The front-end is built for this part, what's needed is to store the comparison criterias inside of the MongoDB database. This should be easy to do by having it stored as JSON. `

✅ Build the comparison feature
`This part sounds like a piece of work but for a MVP it's really fast to build. Most of the path the user will take while using the chatbot is defined by a JSON file. The user will be guided up to the point at which he chooses which kind of products he wants more informations about. This sole part requires calls to the API to provide answers.`

✅ Integrate payments within the Chatbot
`Stripe looks like the easiest way to start accepting payments. The documentation online is really clear towards accepting payments. As indicated before, the products structure is really similar to the Stripe checkout data structure. Products could be stored there and the user redirected to Stripe's website for payments.`

`The more complex solution would be to process payments directly on the website using Stripe or any third party payment application (Braintree, MangoPay, PayPal). But this requires some additional tinkering to build the system and keep it secure.`

✅ Store sales
`Once a payment is processed through Stripe checkout, a callback page can be called with the payment status and the order can be registered this way. (With Stripe Hooks).`



### Sources 

[Argon Dashboard React](https://github.com/creativetimofficial/argon-dashboard-react)  ![license](https://img.shields.io/badge/license-MIT-blue.svg)

[Chat Bubble](https://github.com/dmitrizzle/chat-bubble) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

[NodeJS backend architecture](https://github.com/afteracademy/nodejs-backend-architecture-typescript) ![Apache / Afteracademy ](https://camo.githubusercontent.com/27d919e465a181df3971cd231dd4ff643fc0bbd9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416674657241636164656d792d6f70656e736f757263652d626c75652e737667)