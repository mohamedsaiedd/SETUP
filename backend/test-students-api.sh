#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

API_URL="http://localhost:5000/User"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Testing User API${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Test 1: Create a student
echo -e "${GREEN}1. Creating a new student...${NC}"
CREATE_RESPONSE=$(curl -s -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "age": 20,
    "class": "Computer Science",
    "teacherId": "123e4567-e89b-12d3-a456-426614174000"
  }')
echo "Response: $CREATE_RESPONSE"
STUDENT_ID=$(echo $CREATE_RESPONSE | grep -o '"id":[0-9]*' | grep -o '[0-9]*')
echo -e "Student ID: ${STUDENT_ID}\n"

# Test 2: Get all User
echo -e "${GREEN}2. Getting all User...${NC}"
curl -s -X GET "$API_URL" | jq '.'
echo -e "\n"

# Test 3: Get student by ID
echo -e "${GREEN}3. Getting student by ID (${STUDENT_ID})...${NC}"
curl -s -X GET "$API_URL/$STUDENT_ID" | jq '.'
echo -e "\n"

# Test 4: Update student
echo -e "${GREEN}4. Updating student...${NC}"
curl -s -X PUT "$API_URL/$STUDENT_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 21
  }' | jq '.'
echo -e "\n"

# Test 5: Get updated student
echo -e "${GREEN}5. Getting updated student...${NC}"
curl -s -X GET "$API_URL/$STUDENT_ID" | jq '.'
echo -e "\n"

# Test 6: Create another student
echo -e "${GREEN}6. Creating another student...${NC}"
CREATE_RESPONSE2=$(curl -s -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bob Smith",
    "age": 22,
    "class": "Mathematics",
    "teacherId": "223e4567-e89b-12d3-a456-426614174001"
  }')
echo "Response: $CREATE_RESPONSE2"
STUDENT_ID2=$(echo $CREATE_RESPONSE2 | grep -o '"id":[0-9]*' | grep -o '[0-9]*')
echo -e "\n"

# Test 7: Get all User again
echo -e "${GREEN}7. Getting all User (should have 2)...${NC}"
curl -s -X GET "$API_URL" | jq '.'
echo -e "\n"

# Test 8: Delete a student
echo -e "${GREEN}8. Deleting student (${STUDENT_ID})...${NC}"
curl -s -X DELETE "$API_URL/$STUDENT_ID" -w "\nHTTP Status: %{http_code}\n"
echo -e "\n"

# Test 9: Get all User after delete
echo -e "${GREEN}9. Getting all User after delete (should have 1)...${NC}"
curl -s -X GET "$API_URL" | jq '.'
echo -e "\n"

# Test 10: Try to get deleted student (should return undefined/null)
echo -e "${GREEN}10. Trying to get deleted student (should be empty or null)...${NC}"
curl -s -X GET "$API_URL/$STUDENT_ID"
echo -e "\n\n"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Testing Complete!${NC}"
echo -e "${BLUE}========================================${NC}"
