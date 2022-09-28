# EquipMe - API Documentation

## Overview
 - The url for the API is https://equipmeserver.herokuapp.com/

## Routes

**GET /gloves**
 - returns an array of glove objects

**Response Body Example**

    [
	    {	
                "uuid": "29f8590d-613a-426b-b8cf-bee42346e758",
		    "category": "gloves",
		    "brand_id": 1,
		    "brand": "Mizuno",
		    "name": "Classic Pro Soft Baseball First Base Mitt 12.5\"",
		    "image1": "http://localhost:8080/images/gloves/mizuno/mizuno-classic-pro-soft-baseball-first-base-12.5.png",
		    "price": "$229.99",
		    "size": "12.5\"",
		    "position": "First base, Catcher"   
        }
    ]



**GET /gloves/:gloveId**
 - returns a single glove object
 
 **Response Body Example**

    
	{	
           "uuid": "29f8590d-613a-426b-b8cf-bee42346e758",
           "category": "gloves",
           "brand_id": 1,
           "brand": "Mizuno",
           "name": "Classic Pro Soft Baseball First Base Mitt 12.5\"",
           "image1": "[http://localhost:8080/images/gloves/mizuno/mizuno-classic-pro-soft-baseball-first-base-12.5.jpeg](http://localhost:8080/images/gloves/mizuno/mizuno-classic-pro-soft-baseball-first-base-12.5.jpeg)",
           "price": "$229.99",
           "size": "12.5\"",
           "position": "First base, Catcher",
           "description": "The Classic Pro Soft series is handcrafted with Throwback Leather, which is a rugged, rich and naturally pre-oiled leather that breaks in quickly and retains its shape over time. Featuring professional patterns designed for the best players in the world and UltraSoft Pro Palm Liner for an unmatched feel that makes Classic Pro Soft such a highly-rated glove choice."
	}
	


**GET /bats**
 - returns an array of bats
 
  **Response Body Example**

    [
	    {	
		    "uuid": "db7bfe71-2375-4223-9007-dc390243dfd4",
		    "category": "bats",
		    "brand_id": 1,
		    "brand": "Mizuno",
		    "name": "F21-PWR CRBN Fastpitch Softball Bat (-10)",
		    "image1": "http://localhost:8080/images/bats/mizuno/f21-pwr-crbn-fastpitch-softball-bat.jpeg",
		    "price": "$349.99",
		    "length": "28\", 29\", 30\", 31\", 32\""   
        }
    ]
 
 **GET /bats/:batId**
 - returns a single bat object
 
 **Response Body Example**
    
	{	
		 "id": 1,
		 "brand": "Mizuno",
		 "category": "bats",
		 "name": "F21-PWR CRBN Fastpitch Softball Bat (-10)",
		 "image1": "http://localhost:8080/images/bats/mizuno/f21-pwr-crbn-fastpitch-softball-bat.jpeg",
		 "image2": "http://localhost:8080/images/bats/mizuno/f21-pwr-crbn-fastpitch-softball-bat-1.jpeg",
		 "description": "Mizuno’s new 2-Piece bat utilizes a patent-pending Dual Frequency Damper™ construction to join a Black Onyx™ Carbon barrel and handle for an incredible feel. A new Detonator Cor™ technology design creates low barrel compression and a booming impact sound, giving players a smooth game-ready bat that feels great from the first swing.",
		 "price": "$349.99",
		 "age": "12, 13, 14, 15, 16",
		 "length": "28\", 29\", 30\", 31\", 32\"",
		 "whereToBuy": "https://www.mizunousa.com/ca/product/softball-f21-pwr-crbn-10-/340551?isB=true",
		 "uuid": "db7bfe71-2375-4223-9007-dc390243dfd4",
		 "brand_id": 1
	}
	

**GET /cleats**
 - returns an array of cleats
 
  **Response Body Example**

    [
      {
		   "uuid": "e4a0605b-a49d-4432-865a-d09acf3805b6",
		   "brand_id": 1,
		   "brand": "Mizuno",
		   "category": "cleats",
		   "name": "Pro Dominant TPU Knit Men's Molded Baseball Cleats",
		   "image1": "http://localhost:8080/images/cleats/mizuno/pro-dominant-tpu-knit-mens-baseball-molded-cleat.jpeg",
		   "price": "$170.00"
	   }
	]  

**GET /cleats/:cleatId**
 - returns a specific cleat object
 
  **Response Body Example**
      
    {
	    "id": 1,
	    "brand": "Mizuno",
	    "category": "cleats",
	    "name": "Pro Dominant TPU Knit Men's Molded Baseball Cleats",
	    "image1": "http://localhost:8080/images/cleats/mizuno/pro-dominant-tpu-knit-mens-baseball-molded-cleat.png",
	    "image2": "http://localhost:8080/images/cleats/mizuno/pro-dominant-tpu-knit-mens-baseball-molded-cleat-1.jpeg",
	    "description": "Innovation combines with unrivaled Mizuno Pro quality to create an incredible molded baseball cleat. The Mizuno Pro Dominant TPU Knit features a groundbreaking full knit upper and an all-black, tone-on-tone design for an incredibly sleek look that also provides a natural, comfortable fit for all foot types. Translucent I-Shaped TPU studs provide a unique accent that also increases traction on multiple surfaces. The rib construction of the new Mizuno C-Flex Outsole is a combination of enhanced stability, flexibility, and traction, while reducing stud pressure, providing superior comfort during long games.",
	    "whereToBuy": "https://www.mizunousa.com/ca/product/baseball-mizuno-pro-dominant-tpu-knit/320645?isB=true",
	    "price": "$170.00",
	    "uuid": "e4a0605b-a49d-4432-865a-d09acf3805b6",
	    "brand_id": 1
	}

**GET /sports**
 - returns an array of sports
 
 **Response Body Example**

    [
	    {
		    "id": 1,
		    "sport": "Softball",
		    "image": "[http://localhost:8080/images/sports/softball.png](http://localhost:8080/images/sports/softball.png)",
		    "hoverImage": "[http://localhost:8080/images/sports/softball1.jpeg](http://localhost:8080/images/sports/softball1.jpeg)",
		    "formInput1": "Age",
		    "formInput2": "Position",
		    "formInput3": "Height",
		    "formInput4": "Level"
	    }
	]
**GET /athletes**
 - returns an array of athletes
 
**Response Body Example**
	    
	[
	    {	
		    "id": 4,
		    "name": "Janet Leung",
		    "sport_id": 1,
		    "image": "http://localhost:8080/images/athletes/janet-leung-headshot.jpg",
		    "position": "Infield",
		    "number": "14"
		}
	]

**GET /athletes/:athleteId**
 - returns a single athlete object
 
**Response Body Example**
   
    {  
		"id": 4,
		"name": "Janet Leung",
		"number": "14",
		"position": "Infield",
		"image": "http://localhost:8080/images/athletes/janet-leung-headshot.jpg"
		"image1": "http://localhost:8080/images/athletes/janet-leung-defense.jpg",
		"image2": "http://localhost:8080/images/athletes/janet-leung-offense.jpg",
		"description": "Team Canda's shortstop, Tokyo 2020 Olympic Bronze Medalist",
		"sport_id": 1,
		"glove_id": 30,
		"bat_id": 1,
		"cleat_id": 1
	}
## Installation
- Run terminal in the folder to house this project
	- `git clone <SSH-link>`
	- OR download ZIP folder from repo
- Install npm packages
	- `npm install`
- Change PORT if needed in .env file
  - update DB_USER and DB_PASSWORD
