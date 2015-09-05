PROJECT = "Utility Prototype"

all: install test server

test: ;@echo "Testing ${PROJECT}....."; \
          npm test;

install: ;@echo "Installing ${PROJECT}....."; \
          npm i

server: ;@echo "Running ${PROJECT}....."; \
          npm start

.PHONY: install test server
