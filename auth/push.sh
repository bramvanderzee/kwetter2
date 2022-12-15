#!/bin/bash
docker build -t kweet.azurecr.io/auth .
docker push kweet.azurecr.io/auth
