# xteamClient

Simple React, Redux, and React Router client!

# Start

```bash
	$ npm install
	$ npm run build
	$ npm run start
	$ npm run all
```

# Standalone Docker

```bash
  $ sudo docker build - < Dockerfile
  $ sudo docker run [image_name] 
```

# Security

The client side app will execute a POST request supplying only an `email` address and `username`.

An email is then dispatched, WebFlux-side, from whence a link with a token valid for 15 minutes is generated.

The link specifies a path captured in a React Route (`/secured`) where token and username and stored in an `encapsulated state store` for limited caching (and not using `localStorage` to do so). The token and username are appended or injected into every request made on on a protected resource.

***Please note that this is NOT production-worthy as is. This is a proof of concept.***

Per the comment above, here are some steps that *would* make the system presented *more* production-worthy:

1.	SSL to assist with encrypting requests.
2.	Nonce, padded, token encryption in WebFlux so that any token being handled client-side exists in perfect secrecy and is truly valid for 15 minutes only.
3.	MongoDB and Redis encryption. Redis is used to handle tokens volitely. Tokens are never stored in MongoDB.

# Shout Outs

1. <a href="https://snazzymaps.com/style/1371/purple">**nathandell**</a> on <a href="https://snazzymaps.com/style/1371/purple">**Snazzy Maps**</a>

2. <a href="https://uigradients.com/#SublimeLight">**uiGradients**</a>

3. <a href="https://unsplash.com/photos/OrwkD-iWgqg">**Meiying Ng**</a> by way of <a href="https://unsplash.com">**Unsplash**</a>

4. <a href="https://unsplash.com/photos/RPI-SpV7PL8">**Carles Rabada**</a>