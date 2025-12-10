#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Starting Students API${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if port 5000 is in use
echo -e "${YELLOW}Checking port 5000...${NC}"
if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${YELLOW}Port 5000 is in use. Killing existing processes...${NC}"
    lsof -ti:5000 | xargs kill -9 2>/dev/null
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Killed processes on port 5000${NC}"
    else
        echo -e "${RED}✗ Failed to kill processes${NC}"
    fi
    sleep 1
else
    echo -e "${GREEN}✓ Port 5000 is available${NC}"
fi

echo ""

# Start the application
echo -e "${BLUE}Starting application in development mode...${NC}"
npm run start:dev
