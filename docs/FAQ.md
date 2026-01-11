# Frequently Asked Questions (FAQ)

## General Questions

### What is SAP BTP?
SAP Business Technology Platform (SAP BTP) is an integrated offering comprised of four technology portfolios: database and data management, application development and integration, analytics, and intelligent technologies. It provides a unified environment for building, extending, and integrating applications in the cloud.

### Do I need a paid SAP BTP account?
No, you can get started with a free trial account. The trial account provides access to most services with some limitations on usage and duration.

### How long is the trial account valid?
SAP BTP trial accounts are typically valid for 90 days and can be extended based on availability.

## Technical Questions

### What programming languages can I use on SAP BTP?
SAP BTP supports multiple programming languages including:
- JavaScript/Node.js
- Java
- Python
- ABAP
- Go

### Can I use my own IDE instead of SAP Business Application Studio?
Yes, you can use any IDE (VS Code, IntelliJ, Eclipse, etc.) for local development. However, SAP Business Application Studio is optimized for SAP development and includes pre-configured tools and extensions.

### How do I deploy my application?
You can deploy applications using:
- Cloud Foundry CLI (`cf push`)
- SAP Business Application Studio
- CI/CD pipelines (Jenkins, GitHub Actions, etc.)
- MTA (Multi-Target Application) deployment

## Account and Access

### I can't log in to the SAP BTP Cockpit. What should I do?
1. Verify your credentials
2. Clear browser cache and cookies
3. Try a different browser
4. Check if you're using the correct login URL
5. Reset your password if necessary

### How do I add users to my subaccount?
1. Navigate to Security > Users in your subaccount
2. Click "Create" or "Import"
3. Enter user email address
4. Assign appropriate role collections

### What are role collections?
Role collections are sets of roles that define what users can do in SAP BTP. They group related permissions together for easier assignment.

## Development Questions

### What is CAP (Cloud Application Programming Model)?
CAP is an open and opinionated framework of languages, libraries, and tools for building enterprise-grade services and applications. It guides developers through proven best practices and provides a great deal of out-of-the-box solutions.

### What is the difference between SAP Fiori and SAPUI5?
SAPUI5 is a JavaScript framework for building responsive web applications. SAP Fiori is a design language and user experience approach. Fiori applications are typically built using SAPUI5.

### How do I connect to on-premise systems?
Use the SAP Cloud Connector to establish a secure tunnel between your on-premise systems and SAP BTP. This allows your cloud applications to access on-premise resources.

## Services and Features

### What is HANA Cloud?
SAP HANA Cloud is a fully managed cloud database service that provides in-memory processing, multi-model data management, and advanced analytics capabilities.

### How do I create service instances?
1. Navigate to Service Marketplace in your subaccount
2. Select the service you want to use
3. Click "Create Instance"
4. Configure the service plan and parameters
5. Bind the service to your application

### What are entitlements?
Entitlements define which services and service plans you can use in your subaccount. They are allocated from your global account to subaccounts.

## Costs and Billing

### Is the trial account really free?
Yes, the trial account is completely free. However, it comes with usage limitations and time restrictions.

### What happens after my trial expires?
You'll need to either:
- Request a trial extension
- Upgrade to a paid account
- Create a new trial account (subject to SAP policies)

### How can I monitor my usage?
Navigate to the Overview section in your subaccount to view usage metrics and consumption details.

## Troubleshooting

### My application deployment failed. What should I check?
1. Review deployment logs: `cf logs <app-name> --recent`
2. Check manifest.yml for errors
3. Verify service bindings
4. Ensure sufficient memory quota
5. Check buildpack compatibility

### How do I view application logs?
```bash
# View recent logs
cf logs <app-name> --recent

# Stream logs in real-time
cf logs <app-name>
```

### My dev space in BAS is not starting
1. Check your memory quota
2. Stop unused dev spaces
3. Verify subaccount entitlements
4. Try creating a new dev space
5. Contact SAP support if the issue persists

## Learning and Certification

### Are there official SAP BTP certifications?
Yes, SAP offers several certifications for BTP, including:
- SAP Certified Development Associate - SAP BTP
- SAP Certified Technology Associate - SAP BTP

### Where can I find more learning resources?
- [SAP Learning Hub](https://learning.sap.com/)
- [SAP Tutorials](https://developers.sap.com/tutorial-navigator.html)
- [SAP Community](https://community.sap.com/)
- [openSAP](https://open.sap.com/)

### How long does it take to complete this training?
The training is self-paced. Depending on your prior experience and time commitment, it typically takes 2-4 weeks to complete all modules.

## Support

### Where can I get help?
1. Check this FAQ
2. Review module-specific documentation
3. Search the [SAP Community](https://community.sap.com/)
4. Post questions in SAP Community forums
5. Contact the training coordinator
6. For production issues, contact SAP Support

### How do I report issues with the training materials?
Create an issue in this GitHub repository with:
- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable

---

**Didn't find your answer?** Feel free to create an issue in this repository or reach out to the training coordinator.
