# BookSage

BookSage is a full-stack online bookstore project with a React-based management frontend and a Spring Boot backend.

Online site: `https://booksage.si1v3r.xyz`

## Live System

- Frontend: `https://booksage.si1v3r.xyz`
- Backend API: `https://booksage-api.si1v3r.xyz`
- API base path: `/api`

## What This Project Includes

- User registration, login, logout, and current-user session lookup
- Role-based access control (`userRole === 1` for admin pages)
- Admin user management page (user list/search)
- Order management page (search + delivery status update)
- Basic book management UI
- Unified backend response wrapper and global exception handling

## Tech Stack

### Frontend (`ant design/`)

- React 17 + TypeScript
- Ant Design Pro 5 / Umi 3
- Ant Design 4
- umi-request with cookie credentials enabled
- Pro Components (ProTable, ProForm, etc.)

### Backend (`user-client/`)

- Java 17
- Spring Boot 3.1.3
- MyBatis Plus 3.5.x
- MySQL
- Knife4j / OpenAPI 3
- Session-based authentication (`JSESSIONID`)

### Infra / Deployment (AWS)

- **CloudFront** as CDN and HTTPS edge entry
- **S3 bucket** for static frontend hosting artifacts (`dist`)
- **EC2** for backend API runtime
- **TLS certificate** for HTTPS domains
- DNS/domain routing to expose:
  - `booksage.si1v3r.xyz` (frontend)
  - `booksage-api.si1v3r.xyz` (backend)

## Architecture

```text
Browser
  |\
  | \__ https://booksage.si1v3r.xyz
  |      CloudFront -> S3 (static React build)
  |
  \____ https://booksage-api.si1v3r.xyz/api/*
         EC2 (Spring Boot app) -> MySQL
```

Authentication is cookie-session based:

- Frontend sends requests with `credentials: include`
- Backend sets secure cookie settings (`SameSite=None`, `Secure=true`)
- CORS allows the deployed frontend domain

## Repository Structure

- `ant design/`: current production frontend (Ant Design Pro)
- `user-client/`: current production backend (Spring Boot + MyBatis)
- `sourceCode_/`: legacy Vue codebase (older prototype, not current production stack)

## Backend API Summary

Base URL: `/api`

### User

- `POST /user/register`
- `POST /user/login`
- `POST /user/logout`
- `GET /user/current`
- `GET /user/search` (admin-only in controller logic)
- `POST /user/delete` (admin-only in controller logic)

### Book

- `POST /book/add`

### Order

- `POST /bookorder/submit`
- `GET /bookorder/search`
- `POST /bookorder/update`

### Response Format

Most endpoints use:

```json
{
  "code": 0,
  "data": {},
  "message": "OK",
  "description": ""
}
```

## Local Development

### Prerequisites

- Node.js >= 12 (recommended: 16/18 LTS)
- npm or yarn
- JDK 17
- Maven 3.8+
- MySQL 8+

### 1) Start Backend

```bash
cd user-client
mvn clean package -DskipTests
mvn spring-boot:run
```

Default local backend:

- `http://localhost:8082/api`

Configuration files:

- `user-client/src/main/resources/application.yml` (local)
- `user-client/src/main/resources/application-prod.yml` (production profile)

### 2) Start Frontend

```bash
cd "ant design"
yarn
yarn dev
```

Default local frontend:

- `http://localhost:8000` (or Umi default dev port if changed)

Dev proxy forwards `/api/*` to local backend (`http://localhost:8082`).

## Build Commands

### Frontend Build

```bash
cd "ant design"
yarn run build (sudo)
```

Build output: `ant design/dist/`

### Backend Build

```bash
cd user-client
mvn clean package -DskipTests
```

Build output: `user-client/target/*.jar`

## AWS Deployment Notes (Current Production Pattern)

### Frontend (S3 + CloudFront)

1. Build frontend (`dist/`)
2. Upload `dist/` to S3 bucket
3. Configure CloudFront distribution with S3 origin
4. Configure SPA fallback (`index.html`) for client routing
5. Attach TLS certificate and map custom domain

### Backend (EC2)

1. Package Spring Boot backend image with Docker
2. Deploy and run container on EC2
3. Use Nginx in front of container
4. Issue and renew HTTPS certificate with Certbot

```bash
docker build -t booksage-backend:<tag> ./user-client
docker run -d --name booksage-backend -p 8082:8082 booksage-backend:<tag>
```

5. Expose backend domain over HTTPS (`booksage-api.si1v3r.xyz`)
6. Ensure CORS/secure-cookie settings match frontend domain

## Docker

The repository contains Dockerfiles for frontend and backend:

- `ant design/Dockerfile`
- `user-client/Dockerfile`

Typical backend container flow:

```bash
cd user-client
mvn clean package -DskipTests
docker build -t booksage-backend:<tag> .
docker run -d --name booksage-backend -p 8082:8082 booksage-backend:<tag>
```

## Legacy Code Note

`sourceCode_/` is an older Vue implementation and not the currently deployed production frontend. The active production frontend is `ant design/`.
