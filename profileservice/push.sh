#!/bin/bash
docker build -t kweet.azurecr.io/profile .
docker push kweet.azurecr.io/profile
