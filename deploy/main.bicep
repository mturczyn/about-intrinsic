@allowed(['prod', 'nonprod'])
param environmentType string

module containerRegistry 'containerRegistry.bicep' = {
  name: 'deploy-container-registry'
}

module webApp 'webAppWithPlan.bicep' = {
  name: 'deploy-web-application-with-service-plan'
  params: {
    environmentType: environmentType
  }
}

output webAppName string = webApp.outputs.webAppName
