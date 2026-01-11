# Module 3: Cloud Foundry Environment

## Overview

This module introduces Cloud Foundry on SAP BTP, teaching you how to deploy and manage applications in this environment.

## Learning Objectives

By the end of this module, you will be able to:
- Understand Cloud Foundry concepts
- Deploy applications to Cloud Foundry
- Manage services and bindings
- Scale and monitor applications

## Topics Covered

### 3.1 Cloud Foundry Basics
- Organizations and spaces
- Buildpacks
- Routes and domains

### 3.2 Application Deployment
- Using CF CLI
- Manifest files
- Deployment strategies

### 3.3 Service Management
- Creating service instances
- Binding services to applications
- Service keys and credentials

### 3.4 Application Lifecycle
- Starting, stopping, and restarting apps
- Scaling applications
- Application logs and monitoring

## Hands-on Exercise

1. Install and configure CF CLI
2. Deploy a sample Node.js application
3. Create and bind a service instance
4. Scale your application
5. View application logs

## Sample Application

```javascript
// server.js - Simple Node.js application
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from SAP BTP Cloud Foundry!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
```

## Resources

- [Cloud Foundry on SAP BTP](https://help.sap.com/docs/btp/sap-business-technology-platform/cloud-foundry-environment)
- [CF CLI Documentation](https://docs.cloudfoundry.org/cf-cli/)

## Next Steps

Proceed to [Module 4: SAP HANA Cloud](../module-4-hana-cloud/README.md).
