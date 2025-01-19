@minLength(5)
@maxLength(50)
@description('Provide a globally unique name of your Azure Container Registry')
param acrName string = '${uniqueString(resourceGroup().id)}testacr'

@description('Provide a location for the registry.')
param location string = resourceGroup().location

@description('Provide a tier of your Azure Container Registry.')
param acrSku string = 'Basic'

@secure()
@description('Client ID of agent calling this - needs to set role to ephemeral Azure Container Registry')
param clientIdForAzureContainerRegistry string

resource acrResource 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
  name: acrName
  location: location
  sku: {
    name: acrSku
  }
  properties: {
    adminUserEnabled: true
  }
}

resource roleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(subscription().id, clientIdForAzureContainerRegistry, acrName, 'AcrPush')
  scope: acrResource
  properties: {
    // AcrPush Role ID
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '7f951dda-4ed3-4680-a7ca-43fe172d538d')
    principalId: clientIdForAzureContainerRegistry
    principalType: 'ServicePrincipal'
  }
}

@description('ACR identifier')
output acrId string = acrResource.id

@description('Login erver property')
output acrLoginServer string = acrResource.properties.loginServer

@description('ACR name property')
output acrName string = acrResource.name
