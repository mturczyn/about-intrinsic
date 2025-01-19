@allowed(['prod', 'nonprod'])
param environmentType string = 'prod'

@secure()
@description('Client ID of agent calling this - needs to set role to ephemeral Azure Container Registry')
param clientIdForAzureContainerRegistry string

module containerRegistry 'containerRegistry.bicep' = {
  name: 'deploy-container-registry'
  params: {
    clientIdForAzureContainerRegistry: clientIdForAzureContainerRegistry
  }
}

module webApp 'webAppWithPlan.bicep' = {
  name: 'deploy-web-application-with-service-plan'
  params: {
    environmentType: environmentType
    acrLoginServer: containerRegistry.outputs.acrLoginServer
  }
}

output webAppName string = webApp.outputs.webAppName
output acrId string = containerRegistry.outputs.acrId
output acrLoginServer string = containerRegistry.outputs.acrLoginServer
output acrName string = containerRegistry.outputs.acrName
