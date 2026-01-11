# Module 5: SAP Business Application Studio

## Overview

This module introduces SAP Business Application Studio (BAS), the cloud-based IDE for developing SAP applications.

## Learning Objectives

By the end of this module, you will be able to:
- Set up and navigate SAP Business Application Studio
- Create CAP (Cloud Application Programming) applications
- Develop SAP Fiori applications
- Deploy applications from BAS

## Topics Covered

### 5.1 Business Application Studio Basics
- Creating dev spaces
- Understanding dev space types
- IDE features and extensions

### 5.2 CAP Development
- Introduction to Cloud Application Programming Model
- Creating CAP projects
- Defining CDS models
- Implementing services

### 5.3 SAP Fiori Development
- Fiori Elements
- Creating Fiori applications
- UI5 development basics

### 5.4 Deployment
- Building applications
- Deploying to Cloud Foundry
- Testing and debugging

## Hands-on Exercise

1. Create a dev space in Business Application Studio
2. Generate a CAP project
3. Define a simple data model
4. Create a service
5. Deploy to Cloud Foundry

## Sample CDS Model

```cds
// schema.cds
namespace training;

entity Products {
    key ID : Integer;
    name : String(100);
    description : String(500);
    price : Decimal(10,2);
    stock : Integer;
}

entity Orders {
    key ID : Integer;
    customer : String(100);
    orderDate : Date;
    totalAmount : Decimal(10,2);
    items : Association to many OrderItems on items.order = $self;
}

entity OrderItems {
    key ID : Integer;
    order : Association to Orders;
    product : Association to Products;
    quantity : Integer;
    price : Decimal(10,2);
}
```

## Resources

- [SAP Business Application Studio](https://help.sap.com/docs/bas)
- [CAP Documentation](https://cap.cloud.sap/)
- [SAPUI5 Documentation](https://sapui5.hana.ondemand.com/)

## Next Steps

Proceed to [Module 6: Integration Suite](../module-6-integration-suite/README.md).
