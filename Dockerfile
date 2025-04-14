# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install only prod dependencies (none in this case, but good practice)
RUN npm install --omit=dev

# Install Vite CLI globally to run preview
RUN npm install -g vite

EXPOSE 3000

CMD ["vite", "preview", "--port", "3000", "--host"]

