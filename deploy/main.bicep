param environmentType string

module containerRegistry 'containerRegistry.bicep' = {
  name: 'Deploy Container Registry'
}

module webApp 'webAppWithPlan.bicep' = {
  name: 'Deploy Web Application with Service Plan'
  params: {
    environmentType: environmentType
  }
}

output containerRegistryName string = containerRegistry.outputs.containerRegistryName
output webAppName string = webApp.outputs.webAppName
