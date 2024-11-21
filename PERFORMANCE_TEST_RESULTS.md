TODO: There are performance tests written with k6 that are used for (1) measuring the performance of loading the assignment page and (2) measuring the performance of submitting assignments. The test results are outlined in the PERFORMANCE_TEST_RESULTS.md that is included in the assignment template.

# (1) measuring the performance of loading the assignment page
scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
* default: 10 looping VUs for 5s (gracefulStop: 30s)
data_received..................: 8.0 MB 1.6 MB/s
data_sent......................: 189 kB 38 kB/s
http_req_blocked...............: avg=12.83µs p(99)=23µs    
http_req_connecting............: avg=3.08µs  p(99)=0s      
http_req_duration..............: avg=21.03ms p(99)=68.62ms 
{ expected_response:true }...: avg=21.03ms p(99)=68.62ms 
http_req_failed................: 0.00%  ✓ 0          ✗ 2368
http_req_receiving.............: avg=76.59µs p(99)=886.29µs
http_req_sending...............: avg=22.55µs p(99)=237.94µs
http_req_tls_handshaking.......: avg=0s      p(99)=0s      
http_req_waiting...............: avg=20.93ms p(99)=68.47ms 
http_reqs......................: 2368   471.867491/s
iteration_duration.............: avg=21.15ms p(99)=68.78ms 
iterations.....................: 2368   471.867491/s
vus............................: 10     min=10       max=10
vus_max........................: 10     min=10       max=10


# ((2) measuring the performance of submitting assignments
scenarios: (100.00%) 1 scenario, 5 max VUs, 40s max duration (incl. graceful stop):
* default: 5 looping VUs for 10s (gracefulStop: 30s)
data_received..................: 19 kB 1.8 kB/s
data_sent......................: 11 kB 1.1 kB/s
http_req_blocked...............: avg=197.91µs p(99)=1.57ms  
http_req_connecting............: avg=49.24µs  p(99)=457.55µs
http_req_duration..............: avg=134.72ms p(99)=944.13ms
{ expected_response:true }...: avg=134.72ms p(99)=944.13ms
http_req_failed................: 0.00% ✓ 0        ✗ 45 
http_req_receiving.............: avg=73.08µs  p(99)=334.24µs
http_req_sending...............: avg=191.15µs p(99)=1.9ms   
http_req_tls_handshaking.......: avg=0s       p(99)=0s      
http_req_waiting...............: avg=134.45ms p(99)=943.45ms
http_reqs......................: 45    4.361216/s
iteration_duration.............: avg=1.13s    p(99)=1.95s   
iterations.....................: 45    4.361216/s
vus............................: 5     min=5      max=5
vus_max........................: 5     min=5      max=5