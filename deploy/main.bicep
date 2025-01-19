@allowed(['prod', 'nonprod'])
param environmentType string = 'prod'

module webApp 'webAppWithPlan.bicep' = {
  name: 'deploy-web-application-with-service-plan'
  params: {
    environmentType: environmentType
  }
}

output webAppName string = webApp.outputs.webAppName
