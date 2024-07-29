var location = resourceGroup().location

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  sku: {
    name: 'Standard'
  }
  properties: {
    #disable-next-line BCP037
    anonymousPullEnabled: false
    adminUserEnabled: true
    dataEndpointEnabled:  false
    encryption: {
      status: 'disabled'
    }
    policies: {
      #disable-next-line BCP037
      azureADAuthenticationAsArmPolicy: {
        status: 'enabled'
      }
      retentionPolicy: { 
        days: 7 
        status: 'disabled'
      }
      #disable-next-line BCP037
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
