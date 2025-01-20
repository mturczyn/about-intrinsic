# Setting up CI/CD

For this project CI/CD has been set up.

Firstly it was just autogenerated assets (GItHub Actions, Azure identities to authenticate github deployments, etc.). It was done in simple wizard in Azure portal in web applicaiton resource view.

The first workflow is left, as it is still useful - it deploys code without infrastructure and only to prod environment, which is much faster.

The new workflow creation was described below and is there to:
- also define infrastructure as a code (bicep files were created and used in a GitHub Action),
- define multiple environments (prod and nonprod),
- to showcase how it can be done manually.

## Setting manually CI/CD workflow

Later on, I set up CI/CD on my own by writing GitHub Action workflow from scratch. There were bunch of problems, as first solution used "shortcuts" - hardcoded names of Azure resources, publish profile for web app. In order to improve that, I have scripted all infrastructure in bicep and included in GitHub Action - this way we gained access to all Azure resources needed for the app deployment.

During the process of creating GitHub Action, there were challenges:
- we had to set app service plan to Linux by defining `reserved: true` (without it even `kind: 'linux'` did not work)
- when using publish profile, we had an error
  > Deployment Failed, Error: Failed to get app runtime OS

  We had to click "re-run failed jobs" and check "enable debug logging" checkbox to see there were soe authorization problem (we had HTTP status code 401 along the way).

[This StackOverflow post](https://stackoverflow.com/questions/67974780/unable-to-deploy-to-azure-container-using-github-actions-deployment-failed-wit) talks about this issue. It has suggestion:

> For me, this was resolved by removing Access Restrictions from app.scm.azurewebsites.net

That might fix this issue. But this issue also occured, when testing first pipeline (using publish profile). I managed to solve it by updating publish profile (this is set in GitHub sercrets, so just copy from Azure web app and update the secret value).

Anyway - we don't want to use publish profile for new pipeline anyway, so this is just information. Below is solution without using publish profile.

Finally, resolution was to execute Azure CLI command to define docker server URL, which sets up depoyed web app resource correctly.

Additional resources searched in order to resolve the issue:
- [`az webapp config container` at Microsoft](https://learn.microsoft.com/en-us/cli/azure/webapp/config/container?view=azure-cli-latest#az-webapp-config-container-show) - here we can see how to manage container settings for webapp. Most notable is setting configuration:
    ```
    az webapp config container set --docker-custom-image-name MyDockerCustomImage --docker-registry-server-password StrongPassword --docker-registry-server-url https://{azure-container-registry-name}.azurecr.io --docker-registry-server-user DockerUserId --name MyWebApp --resource-group MyResourceGroup
    ```
### 

[In this commit in file `.github/workflows/master_intrinsic-michal-turczyn.yml`](https://github.com/mturczyn/about-intrinsic/blob/dcb988f0a15a63bf15e515d771265d1eb1e38b1c/.github/workflows/master_intrinsic-michal-turczyn.yml) we can see final version of deployment of docker image to webapp from pipeline:
```
deploy:
  runs-on: ubuntu-latest
  needs: build
  environment:
    name: 'production'
    url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}
  
  steps:
  - name: Deploy to Azure Web App
    id: deploy-to-webapp
    uses: azure/webapps-deploy@v2
    with:
      app-name: 'intrinsic-michal-turczyn'
      slot-name: 'production'
      publish-profile: ${{ secrets.AzureAppService_PublishProfile_74f8e300dad240ab93104d5863e0758e }}
      images: 'intrinsicweb.azurecr.io/${{ secrets.AzureAppService_ContainerUsername_b39ad9b085d94d62a5cac8feedfcc353 }}/about-intrinsic:${{ github.sha }}'
```
After the commit, this approach was changed in [this PR](https://github.com/mturczyn/about-intrinsic/pull/11/files), in favor of approach in this file [.github/workflows/deploy-infra-and-website-to-env.yml](https://github.com/mturczyn/about-intrinsic/blob/master/.github/workflows/deploy-infra-and-website-to-env.yml)

# Dockerizing application

How to dockerize React app can be found online and also was partially describwd in the page itself.

However, here's recap of some important things:
- in order to build docker image, we need to either run `docker image build` command or `docker build` in directory with Dockerfile
- in order to run image, we need to run `docker run`.

In this repo we have Dockerfile, so roughly the process of building and running docker container is:
- build docker image with tag `about-intrinsic` from current directory
    ```
    docker build -t about-intrinsic .
    ```
- run docker image from previous step by providing tag fro previous step to the `run` command:
    ```
    docker run -p 3000:80 about-intrinsic
    ```
Important bit is to provide parameters (for `-p` or `-t`) before "main" parameter. There were problems with, for example, such command:
```
docker run about-intrinsic -p 3000:80
```

## Tips on running containers

Having built docker image, when we try to run the container based on image, each time new container will be created (old one will be forgotten and needs to be cleaned up). In order to improve, following command should be used to run the container from image:
```
docker run --name about-me-fe -p 3000:80 about-me-fe
```
By providing `--name about-me-fe` we assign name to the container for better tracking. Then we can use following command
```
docker container start about-me-fe
```
To start the container and not bloat docker with random cotntainers.

# PWA and service worker

Enabling webpage as PWA (progressive web application) requires only specifying manifest file (`manifest.json`) correctly.

Bigger challenge was to add **service worker**.

Firstly, I tried to add it as usual, by creating some JS and registering it in index file, but it did not work (service worker file could not use imports, as it was totally outside build system).

After some digging, I found out that there is `cra-template-pwa` template (`cra-template-pwa-typescript` for TypeScript). It includes ready implementation and registration code for service workers. So I have created an application using this template and just copied the code here.

But, there is a pitfall - it does not work, when running it on localhost. As discussed in [this StackOverflow post](https://stackoverflow.com/questions/66997788/create-react-app-pwa-typescript-template-cant-detect-service-worker), service workers work in production mode only.

Digging further, there is [Making a Progressive Web App documentation](https://create-react-app.dev/docs/making-a-progressive-web-app/), where it's speicified (which shines more light on the issue):

> The service worker is only enabled in the production environment, e.g. the output of `npm run build`. It's recommended that you do not enable an offline-first service worker in a development environment, as it can lead to frustration when previously cached assets are used and do not include the latest changes you've made locally.
