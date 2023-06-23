FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
# Create Directory for the Container
WORKDIR  /app
# Only copy the package.json file to work directory
COPY package*.json ./
COPY cypress.config.js ./
# COPY .env ./
# Install all Packages
RUN npm ci
# Copy all other source code to work directory
COPY . /app