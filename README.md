# Starter skeleton for reactjs apps

## Using this starter
Starting a new wemanity project using koa as your backend? Follow these steps: 
- Fork this project into your personal repos
- Got to ``settings > general > advanced``
- Rename the project and path
- Remove fork relationship (so you don't accidentally push to this repo)
- Transfer ownership of the repo back to ``wecraftbe``
- #profit


## Development
Independetly of which environment you decide to use for development, you'll need to:

##### Install depedencies 
``npm i``

#### Update app name
Update your app name in 
- public/index.html > title tag
- public/manifest.json > name and shortname

#### Service worker
If your app won't have a service worker, delete `src/serviceWorker.ts` and all references to it on `src/index.tsx`

#### Building a backofffice 
If you're building a back office, be sure to update robots.txt file to deny web crawlers access to it so it's not indexed on search engines. (Check the [docs](https://www.robotstxt.org/robotstxt.html) if needed) 

### Run locally

##### Start app
``npm start``

##### Run tests in watch mode 
``npm test``


### Run on docker

##### Setup 
Update container and image name on docker-compose.yml to one specific to your app

##### Starts container
``npm run docker``

##### Changes to docker image
``npm run docker:build``

##### Run tests
Access the container bash by using ``npm run docker:bash``.
Run tests by running ``npm test``

##### Stopping container
``npm run docker:stop``

##### Access container terminal 
``npm run docker:bash``

##### View container logs
``npm run docker:logs``


## Deployment

##### Regular
Finish the deploy stage script in ``gitlab-ci.yml`` to your needs and that should be it

##### Docker
*Section to be updated once this has been tried*
Never tried it, but test and fix if needed (prolly will be) the production docker image, found in `docker/prod.dockerfile`