The projects contains a functional web application for users to submit their programming exercise answers.
# Requirements
- Implementation works for multiple users.
- No repeated grader calls. Backend to check for existence of similar data. User only allowed to sub nth project if the complete the nth-1.
- RabbitMQ backend service to handle the grading service one by one.
- Short polling to update the status of the submission.
- Production and testing configuration.
- Playwright tests
- Performance test
- Single user at most one submission pending at the same time.



# Visiting Index page redirects to the latest assignment.
Visiting index pages leads to the latest assignment that is incomplete.

# Tailwind css
Utilizing tailwind css, we can use utility classes that allows the CSS to be reused across the whole project. 
CSS design is also standardized when we reuse different utility classes. 

# Grader queue
I selected rabbitmq for the grade request queue. Rabbitmq provides reliability to ensure the delivery of the submitted request. Rabbitmq was also configured such that only one request is processed at the same time.

# Loadbalancer for multiple servers
To improve the scalability of the application, there is a load balancer to at the backend services to increase the server response time to frontend application. The number of duplicated servers can be increase depending on the load on the server by editing the setting in Docker.

# Polling for updates on pending submissions
Short polling is used for real time update of submission status. Once the submission is pending, the application will check for the status of the page by sort polling the srevice endpoints. The application keeps track of the status of the page to prevent unnecessary polling.

