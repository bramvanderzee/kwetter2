#!/bin/bash
docker build -t localhost:5001/profileservice:v0.2 .
docker push localhost:5001/profileservice:v0.2
