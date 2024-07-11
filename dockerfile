# Use the official nginx image from the Docker Hub
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the nginx web directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
