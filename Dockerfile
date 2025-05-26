FROM node:18.19.1-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the application with production configuration
RUN npm run build

# Add this command to help debug the build output
# RUN ls -la /app/dist


FROM nginx:stable

# Copy the built application (we'll update this path based on your angular.json)
COPY --from=build /app/dist/docs-install/* /usr/share/nginx/html/

# Create assets directory
RUN mkdir -p /usr/share/nginx/html/assets

COPY nginx.conf /etc/nginx/nginx.conf

# Ensure proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
