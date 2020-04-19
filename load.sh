while [ 1 ]; do
    wget -O - http://app:3000/metrics
    if [ $? = 0 ]; then break; fi; # check return value, break if successful (0)
    sleep 1s;
done;

wget -O - http://app:3000/error/rate/1
wrk -t1 -c1 -d60 http://app:3000/
wget -O - http://app:3000/error/rate/0.75
wrk -t1 -c1 -d60 http://app:3000/
wget -O - http://app:3000/error/rate/0.25
wrk -t1 -c1 -d60 http://app:3000/
wget -O - http://app:3000/error/rate/1
wrk -t1 -c1 -d60 http://app:3000/