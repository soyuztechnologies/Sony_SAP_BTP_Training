# Exercise 3.1: Deploy Your First Cloud Foundry Application

## Objective

Learn how to deploy a simple Node.js application to Cloud Foundry on SAP BTP.

## Prerequisites

- SAP BTP trial account set up
- Cloud Foundry CLI installed
- Node.js installed (v14 or higher)
- Logged in to Cloud Foundry (`cf login`)

## Instructions

### Step 1: Set Up the Application

1. Navigate to the starter-code directory
2. Review the provided files:
   - `server.js` - Main application file
   - `package.json` - Node.js dependencies
   - `manifest.yml` - Cloud Foundry deployment descriptor

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test Locally

```bash
npm start
```

Visit `http://localhost:3000` in your browser. You should see "Hello from SAP BTP!"

### Step 4: Deploy to Cloud Foundry

```bash
cf push
```

This command will:
- Package your application
- Upload it to Cloud Foundry
- Start the application
- Assign a route

### Step 5: Access Your Application

After deployment, Cloud Foundry will display the application URL. Open it in your browser.

### Step 6: View Application Status

```bash
# View application details
cf app my-first-app

# View application logs
cf logs my-first-app --recent

# View recent events
cf events my-first-app
```

## Tasks

1. **Basic Deployment**: Deploy the application as-is
2. **Modify the Message**: Change the welcome message and redeploy
3. **Scale the Application**: Scale to 2 instances
   ```bash
   cf scale my-first-app -i 2
   ```
4. **Add Environment Variable**: Set a custom environment variable
   ```bash
   cf set-env my-first-app MESSAGE "Hello Sony Team!"
   cf restage my-first-app
   ```

## Expected Output

- Application successfully deployed
- Application accessible via the provided URL
- Logs show the application starting
- Multiple instances running after scaling

## Troubleshooting

### Issue: Memory quota exceeded
**Solution**: Reduce the memory in manifest.yml (e.g., from 256M to 128M)

### Issue: Route already in use
**Solution**: Change the app name in manifest.yml or use a random route:
```bash
cf push --random-route
```

### Issue: Application crashes immediately
**Solution**: Check logs with `cf logs my-first-app --recent` to identify the error

## Verification

✅ Application is running: `cf apps` shows state as "started"
✅ Application is accessible via the browser
✅ Logs show successful startup
✅ Can scale the application to multiple instances

## Bonus Challenges

1. Add a new endpoint `/health` that returns application status
2. Implement basic error handling
3. Add a second route to your application
4. Create a Blue-Green deployment strategy

## Next Steps

After completing this exercise, proceed to Exercise 3.2 to learn about service binding.

## Resources

- [Cloud Foundry Documentation](https://docs.cloudfoundry.org/)
- [CF CLI Reference](https://cli.cloudfoundry.org/en-US/v8/)
- [Manifest File Documentation](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)
