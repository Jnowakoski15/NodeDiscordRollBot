build:
	docker build --tag discordrollbot:1.0 .
run:
	docker run -e DISCORD_TOKEN=SET_YOUR_TOKEN_HERE discordrollbot:1.0