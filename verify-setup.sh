#!/bin/bash

# CCA Admin Login - Setup Verification Script
# This script helps verify that your Firebase admin login is configured correctly

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                                                                      ║"
echo "║         CCA Admin Login - Setup Verification                        ║"
echo "║                                                                      ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""

# Check if .env.local exists
echo "🔍 Checking for .env.local file..."
if [ -f ".env.local" ]; then
    echo "✅ .env.local found"
else
    echo "❌ .env.local NOT found"
    echo "   → Run: cp .env.example .env.local"
    echo "   → Then update with your Firebase credentials"
    exit 1
fi

echo ""

# Check for required environment variables
echo "🔍 Checking environment variables..."
required_vars=(
    "NEXT_PUBLIC_FIREBASE_API_KEY"
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    "NEXT_PUBLIC_FIREBASE_APP_ID"
    "NEXT_PUBLIC_ADMIN_EMAILS"
)

missing_vars=0
for var in "${required_vars[@]}"; do
    if grep -q "^${var}=" .env.local; then
        value=$(grep "^${var}=" .env.local | cut -d '=' -f2)
        if [ -z "$value" ] || [ "$value" = "your_api_key_here" ] || [ "$value" = "your_auth_domain_here" ]; then
            echo "⚠️  $var is set but needs a real value"
            missing_vars=$((missing_vars + 1))
        else
            echo "✅ $var is configured"
        fi
    else
        echo "❌ $var is missing"
        missing_vars=$((missing_vars + 1))
    fi
done

echo ""

if [ $missing_vars -gt 0 ]; then
    echo "❌ $missing_vars environment variable(s) need attention"
    echo ""
    echo "📘 Next steps:"
    echo "   1. Go to https://console.firebase.google.com/"
    echo "   2. Create/open your Firebase project"
    echo "   3. Get your config from Project Settings"
    echo "   4. Update .env.local with the values"
    echo "   5. Run this script again"
    echo ""
    echo "📚 See ADMIN_SETUP.md for detailed instructions"
    exit 1
else
    echo "✅ All environment variables are configured"
fi

echo ""

# Check if node_modules exists
echo "🔍 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not installed"
    echo "   → Run: npm install"
fi

echo ""

# Check for required files
echo "🔍 Checking required files..."
files=(
    "src/lib/firebase.ts"
    "src/contexts/AuthContext.tsx"
    "src/components/admin/AdminLogin.tsx"
    "src/app/admin/page.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
    fi
done

echo ""
echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                                                                      ║"
echo "║                     ✨ VERIFICATION COMPLETE ✨                      ║"
echo "║                                                                      ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "📋 Next Steps:"
echo "   1. Run: npm run dev"
echo "   2. Visit: http://localhost:3000/admin"
echo "   3. Try logging in with your admin credentials"
echo ""
echo "📚 Documentation:"
echo "   • Setup Guide: ADMIN_SETUP.md"
echo "   • Quick Reference: ADMIN_LOGIN_REFERENCE.md"
echo "   • Checklist: FIREBASE_CHECKLIST.md"
echo ""
