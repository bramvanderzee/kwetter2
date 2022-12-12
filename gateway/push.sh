#!/bin/bash
docker build -t kweet.azurecr.io/gateway .
docker push kweet.azurecr.io/gateway
