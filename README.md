# Employee Directory Search System

## Overview

The Employee Directory Search System is a full-stack web application that allows users to efficiently search employees by **name, department**.  
The application is designed with performance optimization and clean architecture principles using React, FastAPI, and MySQL.

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Fetch API
- Component-based architecture

### Backend
- FastAPI (Python)
- Async SQLAlchemy
- REST API Architecture

### Database
- MySQL

---

## Project Architecture

The backend follows a layered architecture:

Router Layer → Service Layer → Repository Layer → Database

- **Router Layer**: Handles HTTP requests and responses.
- **Service Layer**: Contains business logic.
- **Repository Layer**: Manages database queries.
- **Database Layer**: Stores employee data.

Frontend follows component separation:

App → EmployeeList → EmployeeCard

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/deepak-upadhyay-7304/EmployeeDirectory
cd deepaks project