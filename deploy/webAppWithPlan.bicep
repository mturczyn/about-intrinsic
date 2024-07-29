param environmentType string

var location = resourceGroup().location
var tags = { env: environmentType }

var appServicePlanName = '${environmentType}-intrinsic-asp'
var webappName = environmentType == 'Prod' 
  ? 'intrinsic-michal-turczyn' 
  : 'intrinsic-michal-turczyn-${environmentType}'

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
