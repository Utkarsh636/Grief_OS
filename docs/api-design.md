# API Design

## Overview

GriefOS follows a RESTful API architecture. The Flutter mobile application communicates with the FastAPI backend over secure HTTPS endpoints.

All API responses are returned in JSON format.

---

# Base URL

Development

/api/v1

---

# Authentication APIs

## Register User

POST /auth/register

Request

{
  "full_name": "Utkarsh Sharma",
  "email": "user@example.com",
  "password": "********"
}

Response

{
  "message": "Registration successful",
  "user_id": 1
}

---

## Login

POST /auth/login

Request

{
  "email": "user@example.com",
  "password": "********"
}

Response

{
  "access_token": "...",
  "user": {
      "id": 1,
      "name": "Utkarsh Sharma"
  }
}

---

# Case APIs

## Create Case

POST /cases

Request

{
    "deceased_name":"...",
    "relationship":"Father",
    "state":"Uttar Pradesh"
}

Response

{
    "case_id":15,
    "status":"created"
}

---

## Get Cases

GET /cases

Returns all user cases.

---

## Get Single Case

GET /cases/{case_id}

Returns complete case information.

---

# Document APIs

## Upload Document

POST /documents/upload

Accepts

- Aadhaar
- PAN
- Death Certificate
- Passbook

Returns

Document ID

OCR Status

---

## Get Documents

GET /documents/{case_id}

Returns all uploaded documents.

---

# Workflow APIs

## Generate Workflow

POST /workflow/generate

Input

Case ID

Output

Personalized task list.

---

## Get Tasks

GET /tasks/{case_id}

Returns

Pending

Completed

Upcoming

---

## Update Task

PATCH /tasks/{task_id}

Updates

Completed status.

---

# AI APIs

## Ask AI

POST /ai/chat

Input

User Question

Output

AI Response

---

# Notification APIs

GET /notifications

Returns pending reminders.

---

# Settings APIs

GET /settings

PATCH /settings

Update

Language

Notification Preferences

---

# Status Codes

200

Success

201

Created

400

Bad Request

401

Unauthorized

404

Not Found

500

Internal Server Error

---

# Security

- HTTPS Only
- JWT Authentication
- User Authorization
- Input Validation
- Rate Limiting