var location = resourceGroup().location

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  sku: {
    name: 'Standard'
  }
  properties: {
    anonymousPullEnabled: false
    adminUserEnabled: true
    dataEndpointEnabled:  false
    encryption: {
      status: 'disabled'
    }
    policies: {
      azureADAuthenticationAsArmPolicy: {
        status: 'enabled'
      }
      retentionPolicy: { 
        days: 7 
        status: 'disabled'
      }
      softDeletePolicy: {
        retentionDays: 7
        status: 'disabled'
      }
    }
  }
  location: location
  name: 'intrinsicweb'
}

output containerRegistryName string = containerRegistry.name
