#!/bin/sh
/root/anaconda3/bin/python3 env_test.py
uwsgi --ini ../uwsgi.ini