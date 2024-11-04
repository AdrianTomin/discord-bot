# 🌦️ Discord Weather Forecast Bot

This project is a Discord bot that provides weather forecasts for specified locations. It utilizes the [WeatherAPI](https://www.weatherapi.com/) for weather data and the [Discord API](https://discord.js.org/) for bot interactions.

Built With: 
<br>
<br>
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
<br>
<br>
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
<br>
<br>
![Discord API](https://img.shields.io/badge/Discord%20API-5865F2?style=for-the-badge&logo=discord&logoColor=white)
<br>
<br>
## 📖 Table of Contents
- [✨ Features](#-features)
- [⚙️ Prerequisites](#️-prerequisites)
- [📥 Installation](#-installation)
- [🛠️ Configuration](#️-configuration)
- [🚀 Running the Bot](#-running-the-bot)
- [🔑 Getting API Keys](#-getting-api-keys)
- [💬 Commands](#-commands)
- [📸 Preview](#-preview)

## ✨ Features
- Provides 3-day weather forecasts for a specified location.
- Supports both metric and imperial units.
- `/forecast` command for fetching weather information.
- `/astro` command for fetching astrological information.

## ⚙️ Prerequisites
- [Bun](https://bun.sh/) – A fast all-in-one JavaScript runtime and package manager
- [TypeScript](https://www.typescriptlang.org/) – A strongly typed programming language built on JavaScript

## 📥 Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdrianTomin/discord-bot.git
   cd discord-bot
2. **Install dependencies**:
   ```bun install```
   
## 🛠️ Configuration
Create a ```.env``` file in the root of the project and add the required API keys as shown below:
  ```
  DISCORD_TOKEN=your_discord_token_here
  WEATHER_API_KEY=your_weatherapi_key_here
  GUILD_ID=your_guild_id_here
  CLIENT_ID=your_client_id_here
  ```
## 🔑 Getting API Keys
#### WeatherAPI Key (`WEATHER_API_KEY`)

1. Go to [WeatherAPI](https://www.weatherapi.com/) and sign up for a free account.
2. Once logged in, navigate to your API key dashboard to retrieve your key.

#### Discord Bot Token (`DISCORD_TOKEN`)

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application or select an existing one.
3. Add a bot to your application Under the **Bot** section, then copy the **Token** under the "Token" section.

#### Guild ID (`GUILD_ID`)

1. Open Discord and navigate to your server.
2. Right-click on the server name and select **Copy ID** (make sure Developer Mode is enabled in Discord settings).

#### Client ID (`CLIENT_ID`)

1. In the [Discord Developer Portal](https://discord.com/developers/applications), go to your application.
2. Copy the **Application ID** from the General Information section (this is your `CLIENT_ID`).

## 🚀 Running the Bot
You can run the bot after setting up your environment variables in the ```.env``` file.
```bash 
bun run start
```
The bot should now be online and ready to respond to commands in your Discord server.

## 💬 Commands
### Command Options
#### `/forecast`
Provides a weather forecast for a specified location with options for metric or imperial units.

| Option    | Type   | Description                                                                                                           |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------|
| location  | String | **Required**. Specifies the location for the weather forecast. Accepts city name, postal code, or coordinates.        |
| units     | String | **Optional**. Sets the unit system for the forecast. Options are "metric" (default) or "imperial".                    |

#### `/astro`
Provides the moonrise/set and sunrise/set astrological data for a specified location.

| Option    | Type   | Description                                                                                                           |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------|
| location  | String | **Required**. Specifies the location for the weather forecast. Accepts city name, postal code, or coordinates.        |


### 📸 Preview

Here are some screenshots to give you a glimpse of the Discord Weather Forecast Bot in action!

#### 1. Weather Forecast Command
<img width="500" alt="Screenshot 2024-11-04 at 3 22 32 PM" src="https://github.com/user-attachments/assets/2b9ee67c-4de6-4250-b64f-3969b05b7b31">

#### 2. Astro Command
<img width="500" alt="Screenshot 2024-11-04 at 3 23 48 PM" src="https://github.com/user-attachments/assets/14a2e64d-7fd6-469e-b47f-8f727d7a497f">

## Badges
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors
- [@AdrianTomin](https://www.github.com/AdrianTomin)
