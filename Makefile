.PHONY: dev:web dev:rembg dev:all lint typecheck test e2e

dev:web:
	pnpm dev:web

dev:rembg:
	pnpm dev:rembg

dev:all:
	pnpm dev:all

lint:
	pnpm lint

typecheck:
	pnpm typecheck

test:
	pnpm test

e2e:
	pnpm e2e
