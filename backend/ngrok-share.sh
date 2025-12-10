#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Starting Ngrok Static Share${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo -e "${RED}Ngrok is not installed!${NC}"
    echo -e "Please install it using one of these methods:"
    echo -e "1. ${YELLOW}sudo snap install ngrok${NC} (Ubuntu/Linux)"
    echo -e "2. ${YELLOW}npm install -g ngrok${NC} (Node.js)"
    echo -e "3. Download from https://ngrok.com/download\n"
    exit 1
fi

# Check if user is logged in
if ! ngrok config check &> /dev/null; then
    echo -e "${YELLOW}You need to authenticate ngrok first!${NC}"
    echo -e "1. Go to https://dashboard.ngrok.com/get-started/your-authtoken"
    echo -e "2. Run: ${GREEN}ngrok config add-authtoken <YOUR_TOKEN>${NC}\n"
    exit 1
fi

# Default Static Domain
DOMAIN="arianna-preprandial-nondeciduously.ngrok-free.dev"

echo -e "\n${GREEN}Starting ngrok tunnel on port 5000...${NC}"
echo -e "Your URL: ${GREEN}https://${DOMAIN}${NC}\n"

ngrok http --domain=$DOMAIN 5000
