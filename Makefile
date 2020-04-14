build:
	docker build --tag jnowakoski/discord-roll-bot:1.0 .
run:
	docker run -e DISCORD_TOKEN=TOKEN_HERE jnowakoski/discord-roll-bot:1.0