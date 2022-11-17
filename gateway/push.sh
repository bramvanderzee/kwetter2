#!/bin/bash
docker build -t localhost:5001/gatewayservice:v0.1 .
docker push localhost:5001/gatewayservice:v0.1
