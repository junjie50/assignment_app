FROM mcr.microsoft.com/playwright:v1.38.0-focal

WORKDIR /e2e-playwright

COPY . /e2e-playwright

COPY package*.json .
COPY *config.js .

RUN npm install
RUN npx playwright install chromium

COPY . .

CMD [ "npx", "playwright", "test" ]