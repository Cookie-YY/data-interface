#!bin/bash

now=$(date "+%Y:%m:%d %H:%M:%S")

nohup /root/anaconda3/bin/python3 /xinfang/dabot/calculate/run.py > "/xinfang/dabot/calculate/exe_logs/exe_$now.log" 2>&1 &