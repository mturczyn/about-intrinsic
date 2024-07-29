param environmentType string

var location = resourceGroup().location
var tags = { env: environmentType }

var appServicePlanName = 'intrinsic-${environmentType}-asp'
var webappName = environmentType == 'production' 
  ? 'intrinsic-michal-turczyn' 
  : 'intrinsic-michal-turczyn-${environmentType}-webapp'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: appServicePlanName
  location: location
  kind: 'linux'
  sku: {
    name: 'F1'
    capacity: 1
  }
  tags: tags
}

resource webApplication 'Microsoft.Web/sites@2023-12-01' = {
  name: webappName
  location: location
  kind: 'app,linux,container'
  properties: {
    serverFarmId: appServicePlan.id
  }
  tags: tags
}

output webAppName string = webApplication.name
