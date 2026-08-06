# System Architecture

## Overview

GriefOS follows a modern client-server architecture where the Android application communicates with cloud-based backend services through secure REST APIs.

The application is designed with modularity, scalability, and maintainability in mind, ensuring that each component has a single responsibility while remaining loosely coupled.

---

# High-Level Architecture

```
                +----------------------+
                |    Android App       |
                |      (Flutter)       |
                +----------+-----------+
                           |
                           | HTTPS REST API
                           |
                +----------v-----------+
                |     FastAPI Server   |
                |  Authentication      |
                |  Business Logic      |
                |  Workflow Engine     |
                +-----+----------+-----+
                      |          |
          ------------          ------------
         |                                   |
+--------v--------+                 +--------v--------+
|   Supabase      |                 |    Gemini API   |
| PostgreSQL DB   |                 | AI Assistance   |
| Storage         |                 | Translation     |
+--------+--------+                 +--------+--------+
         |                                   |
         +---------------+-------------------+
                         |
                 Response to App
```

---

# Architecture Style

The project follows a layered architecture.

Presentation Layer

↓

Business Logic Layer

↓

Data Layer

↓

External Services

This separation keeps the application maintainable and easier to extend in the future.

---

# Component Responsibilities

## Flutter Mobile Application

Responsible for:

- User Interface
- User Authentication
- Navigation
- Camera Access
- OCR Trigger
- API Communication
- Local Preferences

---

## FastAPI Backend

Responsible for:

- Authentication
- API Endpoints
- Workflow Generation
- Business Rules
- Task Management
- AI Request Handling
- Database Communication

---

## Supabase

Responsible for:

- User Accounts
- Case Information
- Task Data
- Secure Document Storage
- Progress Tracking

---

## Gemini API

Responsible for:

- AI Assistance
- Multilingual Guidance
- Process Explanation
- Personalized Responses

---

# Data Flow

Example Workflow

User scans Death Certificate

↓

OCR extracts text

↓

Flutter sends extracted data

↓

FastAPI validates request

↓

Workflow Engine generates tasks

↓

Data stored in Supabase

↓

Dashboard updated

↓

User sees personalized roadmap

---

# Security Principles

The system follows a privacy-first approach.

- Secure Authentication
- HTTPS Communication
- Minimal Personal Data Collection
- Encrypted Document Storage
- Role-based API Access

---

# Scalability

The architecture supports future expansion including:

- Additional Indian States
- New Government Services
- Hospital Integration
- DigiLocker Integration
- Banking APIs
- Regional Language Support

---

# Design Goals

The architecture is designed to achieve:

- Simplicity
- Reliability
- Security
- Scalability
- Maintainability
- Modular Development

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Mobile | Flutter |
| Backend | FastAPI |
| Database | PostgreSQL (Supabase) |
| Storage | Supabase Storage |
| Authentication | Supabase Auth |
| AI | Gemini API |
| OCR | Google ML Kit |
| Notifications | Firebase Cloud Messaging |
| Version Control | Git + GitHub |

---

# Future Architecture

As GriefOS grows, the backend can evolve from a single FastAPI service into multiple independent services such as:

- Authentication Service
- Workflow Service
- AI Service
- Notification Service
- Document Service

This modular design allows the platform to scale without major architectural changes.