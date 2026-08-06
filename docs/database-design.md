# Database Design

## Overview

GriefOS uses a relational database to securely manage users, cases, documents, workflows, and task progress.

The database is designed to maintain data integrity, reduce redundancy, and support future scalability.

---

# Entity Relationship Overview

User
│
├── Cases
│      │
│      ├── Documents
│      ├── Tasks
│      └── Notifications
│
└── Settings

---

# Tables

## 1. Users

Purpose

Stores registered user information.

Columns

- user_id (Primary Key)
- full_name
- email
- phone_number
- preferred_language
- created_at

---

## 2. Cases

Purpose

Represents one bereavement case.

Columns

- case_id (Primary Key)
- user_id (Foreign Key)
- deceased_name
- relationship
- state
- created_at
- status

Relationship

One User → Many Cases

---

## 3. Documents

Purpose

Stores uploaded documents.

Columns

- document_id
- case_id
- document_type
- file_url
- upload_date
- verification_status

Relationship

One Case → Many Documents

---

## 4. Tasks

Purpose

Stores personalized workflow tasks.

Columns

- task_id
- case_id
- title
- description
- category
- status
- due_date

Relationship

One Case → Many Tasks

---

## 5. Notifications

Purpose

Stores reminder information.

Columns

- notification_id
- case_id
- message
- scheduled_time
- is_read

Relationship

One Case → Many Notifications

---

## 6. Settings

Purpose

Stores user preferences.

Columns

- setting_id
- user_id
- language
- notification_enabled

Relationship

One User → One Settings Record

---

# Relationships

User

↓

Many Cases

↓

Many Documents

↓

Many Tasks

↓

Many Notifications

---

# Primary Keys

- user_id
- case_id
- document_id
- task_id
- notification_id
- setting_id

---

# Foreign Keys

Cases.user_id

↓

Users.user_id

Documents.case_id

↓

Cases.case_id

Tasks.case_id

↓

Cases.case_id

Notifications.case_id

↓

Cases.case_id

Settings.user_id

↓

Users.user_id

---

# Design Principles

- Minimize duplicate information.
- Keep relationships simple.
- Store only necessary user data.
- Design for future expansion.
- Maintain referential integrity.

---

# Future Tables

- AI Conversation History
- Audit Logs
- Government Resources
- State-wise Workflow Templates
- Family Members
- Legal Advisors

These tables are outside the MVP scope and will be introduced in future versions.