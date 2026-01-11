# Module 4: SAP HANA Cloud

## Overview

This module covers SAP HANA Cloud, the cloud-native database and application development platform.

## Learning Objectives

By the end of this module, you will be able to:
- Understand SAP HANA Cloud architecture
- Create and manage HANA Cloud instances
- Perform basic database operations
- Connect applications to HANA Cloud

## Topics Covered

### 4.1 SAP HANA Cloud Introduction
- HANA Cloud vs. HANA on-premise
- Database services
- Data lake integration

### 4.2 Instance Management
- Creating HANA Cloud instances
- Configuration options
- Monitoring and maintenance

### 4.3 Database Operations
- Creating schemas and tables
- Basic SQL operations
- Data modeling

### 4.4 Integration
- Connecting from CAP applications
- Using HANA Cloud from Cloud Foundry
- Security and authentication

## Hands-on Exercise

1. Provision a HANA Cloud trial instance
2. Connect using SAP HANA Database Explorer
3. Create a simple schema and table
4. Execute SQL queries
5. Connect your application to HANA Cloud

## Sample SQL

```sql
-- Create a sample table
CREATE TABLE PRODUCTS (
    PRODUCT_ID INTEGER PRIMARY KEY,
    PRODUCT_NAME NVARCHAR(100),
    PRICE DECIMAL(10,2),
    CATEGORY NVARCHAR(50)
);

-- Insert sample data
INSERT INTO PRODUCTS VALUES (1, 'Laptop', 999.99, 'Electronics');
INSERT INTO PRODUCTS VALUES (2, 'Mouse', 29.99, 'Electronics');

-- Query data
SELECT * FROM PRODUCTS WHERE CATEGORY = 'Electronics';
```

## Resources

- [SAP HANA Cloud Documentation](https://help.sap.com/docs/hana-cloud)
- [HANA Cloud Central](https://help.sap.com/docs/hana-cloud/sap-hana-cloud-administration-guide/sap-hana-cloud-central)

## Next Steps

Proceed to [Module 5: SAP Business Application Studio](../module-5-business-application-studio/README.md).
