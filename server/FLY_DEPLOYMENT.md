# 🚀 Fly.io Deployment Guide for Nubra Souvenir Backend

## Prerequisites

1. **Install Fly CLI:**
   ```bash
   # Windows (PowerShell)
   iwr https://fly.io/install.ps1 -useb | iex
   
   # macOS
   curl -L https://fly.io/install.sh | sh
   
   # Linux
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign up and login:**
   ```bash
   fly auth signup
   # OR if you already have an account
   fly auth login
   ```

## 🚀 Quick Deploy

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Deploy to Fly.io:**
   ```bash
   fly deploy
   ```

3. **Check deployment status:**
   ```bash
   fly status
   ```

4. **View logs:**
   ```bash
   fly logs
   ```

## ⚙️ Configuration

### Environment Variables
Set your environment variables:
```bash
fly secrets set DATABASE_URL="your_database_url"
fly secrets set CLOUDINARY_CLOUD_NAME="your_cloudinary_name"
fly secrets set CLOUDINARY_API_KEY="your_api_key"
fly secrets set CLOUDINARY_API_SECRET="your_api_secret"
```

### Database Setup
If using a database, create a volume:
```bash
fly volumes create nubra_souvenir_data --size 1 --region sin
```

## 🔧 Customization

### Change App Name
Edit `fly.toml`:
```toml
app = "your-custom-app-name"
```

### Change Region
Edit `fly.toml`:
```toml
primary_region = "your-preferred-region"
```

Available regions: `sin` (Singapore), `hkg` (Hong Kong), `nrt` (Tokyo), `lhr` (London), `iad` (Virginia)

### Scale Resources
Edit `fly.toml`:
```toml
[[vm]]
  cpu_kind = "shared"
  cpus = 1
  memory_mb = 1024  # Increase memory if needed
```

## 📊 Monitoring

- **App Status:** `fly status`
- **Logs:** `fly logs`
- **Metrics:** `fly dashboard`

## 🆘 Troubleshooting

### Common Issues:

1. **Build fails:**
   ```bash
   fly logs
   # Check for TypeScript compilation errors
   ```

2. **App won't start:**
   ```bash
   fly logs
   # Check for runtime errors
   ```

3. **Database connection issues:**
   - Verify DATABASE_URL secret is set
   - Check if database is accessible from Fly.io

### Reset Deployment:
```bash
fly destroy nubra-souvenir-backend
fly launch
```

## 🌐 Your App URL

After successful deployment, your app will be available at:
```
https://nubra-souvenir-backend.fly.dev
```

## 💰 Pricing

- **Free Tier:** 3 shared-cpu-1x 256mb VMs
- **Shared CPU:** $1.94/month per VM
- **Dedicated CPU:** $7.50/month per VM

## 🔗 Useful Commands

```bash
# Deploy
fly deploy

# View logs
fly logs

# Check status
fly status

# Open app
fly open

# SSH into VM
fly ssh console

# Scale app
fly scale count 2

# Update secrets
fly secrets set KEY=value
```

## 📝 Notes

- Your app will auto-stop after 15 minutes of inactivity (free tier)
- Files uploaded to `/app/uploads` will persist via volume mount
- HTTPS is automatically enabled
- Auto-scaling is configured for cost optimization
