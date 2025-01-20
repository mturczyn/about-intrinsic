@allowed(['prod', 'nonprod'])
param environmentType string = 'prod'
@secure()
param dockerImageFullUrl string

module webApp 'webAppWithPlan.bicep' = {
  name: 'deploy-web-application-with-service-plan'
  params: {
    environmentType: environmentType
    dockerImageFullUrl: dockerImageFullUrl
  }
}

output webAppName string = webApp.outputs.webAppName
