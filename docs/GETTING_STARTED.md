# Getting Started with SAP BTP Training

## Welcome!

This guide will help you get started with the SAP BTP training program. Follow these steps to set up your environment and begin your learning journey.

## Step 1: Create Your SAP BTP Trial Account

1. Visit [SAP BTP Trial](https://www.sap.com/products/technology-platform/trial.html)
2. Click on "Start your free trial"
3. Fill in your details and create an account
4. Verify your email address
5. Log in to the SAP BTP Cockpit

## Step 2: Set Up Your Development Environment

### Install Required Tools

#### 1. Node.js
```bash
# Download and install from https://nodejs.org/
# Verify installation
node --version
npm --version
```

#### 2. Cloud Foundry CLI
```bash
# Download from https://github.com/cloudfoundry/cli/releases
# Or use package managers:

# macOS (Homebrew)
brew install cloudfoundry/tap/cf-cli

# Windows (Chocolatey)
choco install cloudfoundry-cli

# Verify installation
cf --version
```

#### 3. Git
```bash
# Download from https://git-scm.com/
# Verify installation
git --version
```

## Step 3: Configure Your BTP Subaccount

1. Log in to SAP BTP Cockpit
2. Create a new subaccount (or use the default trial subaccount)
3. Enable Cloud Foundry environment
4. Note your API endpoint, organization, and space names

## Step 4: Login to Cloud Foundry

```bash
# Set API endpoint (replace with your region's endpoint)
cf api https://api.cf.us10.hana.ondemand.com

# Login
cf login

# Enter your email and password
# Select your organization and space
```

## Step 5: Explore SAP Business Application Studio

1. In the SAP BTP Cockpit, navigate to Services > Instances and Subscriptions
2. Subscribe to "SAP Business Application Studio"
3. Click "Go to Application" to launch BAS
4. Create a new dev space (choose "SAP Cloud Business Application")
5. Wait for the dev space to start

## Step 6: Clone This Repository

```bash
git clone https://github.com/soyuztechnologies/Sony_SAP_BTP_Training.git
cd Sony_SAP_BTP_Training
```

## Step 7: Start Learning!

Begin with [Module 1: Introduction to SAP BTP](../modules/module-1-introduction/README.md) and progress through each module sequentially.

## Common Issues and Troubleshooting

### Issue: Cannot log in to Cloud Foundry
**Solution:** Ensure you're using the correct API endpoint for your region. Check [SAP BTP Regions](https://help.sap.com/docs/btp/sap-business-technology-platform/regions) for the correct endpoint.

### Issue: Dev space won't start in Business Application Studio
**Solution:** 
- Check your subaccount entitlements
- Ensure you have sufficient memory quota
- Try stopping other dev spaces

### Issue: Trial account limitations
**Solution:** SAP BTP trial accounts have some limitations. For production use, consider upgrading to a paid account.

## Need Help?

- Check the [FAQ](./FAQ.md)
- Visit [SAP Community](https://community.sap.com/)
- Review the official [SAP BTP Documentation](https://help.sap.com/docs/btp)

## Next Steps

Once you've completed the setup, proceed to the training modules:
1. [Module 1: Introduction to SAP BTP](../modules/module-1-introduction/README.md)
2. [Module 2: SAP BTP Cockpit](../modules/module-2-cockpit/README.md)
3. [Module 3: Cloud Foundry Environment](../modules/module-3-cloud-foundry/README.md)

Happy Learning! 🚀
