--[[
Contact Information

Discord Server (Go here first!): https://discord.gg/34Rxxcp
Discord Tag: cooldeath49#3709



█▀█ █░░ █▀▀ ▄▀█ █▀ █▀▀   █░█░█ ▄▀█ ▀█▀ █▀▀ █░█   ▀█▀ █░█ █ █▀   █░█ █ █▀▄ █▀▀ █▀█
█▀▀ █▄▄ ██▄ █▀█ ▄█ ██▄   ▀▄▀▄▀ █▀█ ░█░ █▄▄ █▀█   ░█░ █▀█ █ ▄█   ▀▄▀ █ █▄▀ ██▄ █▄█

https://www.youtube.com/watch?v=rp2N6P6lbcE&feature=youtu.be

Roblox Group: https://www.roblox.com/groups/7536412/cooldeath49s-Napoleonic-Tech#!/about (for the above)








The below is a table of contents on how to customize your weapons and other small bits.
These are for developers and advanced programmers/nation leaders that want to change the weapons to their taste.

Instructions on firing have been omitted for the sake of my sanity, and common sense.

Table of Contents

Line 36: Basic Field Manual
Line 52: Settings
Line 84: Customizing Weapon Appearance
Line 143: Customizing Firearm Sounds
Line 151: Animations!

===BASIC FIELD MANUAL===

	Q - Cancel melee attack/block OR lean left (leaning for carbines, rifles and pistols only)
	E - Lean right (leaning for carbines, rifles and pistols only)
	G - Advance/Right Shoulder Shift Arms (can go to Present with F)
	H - Order Arms
	J - Port Arms (can go to Bayonets with X, or Present with F)
	K - Trail Arms
	L - Support Arms
	Z - Marching Speed (available only in shoulder arms)
	X - Melee (Musket and pistol only), or Stand Up (Rifles and carbines only when in Port Arms)
	C - Crouch (Rifles and carbines only can double tap C when in Port Arms to enter prone position)
	V - Salute Arms
	B - Fix/Unfix Bayonets (musket only)
	N - Slope Arms
	
===SETTINGS===

Settings in each weapon.

Cameras: Change the camera views for different stances. Options are:
	1st - Lock first person
	Free - Free cam, default
	3rd - Lock third person (Offset inside each setting is the camera distance from character)

Features (most features are self explanatory, I will go over the confusing ones)

	- EnableAttackCancelling: Whether or not players can press Q to cancel an attack or block mid preparation
	- EnableServerSideAiming: Other players can see how high or low you aim
	- EnableBash (pistol only): Allows the player to press X to pistol whip
	- IndividualStaminaBar: This weapon will have it's own stamina bar and regen only when equipped, it will not share stamina across weapons

Miscellaneous (Again, going over the confusing settings)

	- AccuracyAt200: The number value represents the length of the edge of an imaginary cube at the range of 200 studs (If set to 3, at 200 studs the accuracy would be within a 3x3x3 stud cube)
	- BulletDropPerFrame: How much the trajectory drops every frame (assuming the player runs at 60 FPS), in studs
	- BuletSpeedPerFrame: Same as above, except dictates the distance travelled per frame, in studs
	- CustomAnimSaves: Useful for tools that need completely separate animation files. Value should be set to the cloned animation model, and all animation names should be the same
	- MisfireRate: The chance of misfiring, as a decimal of 1 (1 being 100% chance, 0 being 0% chance)
	- ReloadSpeed: Reloading time when stationary
	- ReloadSpeedWhileMoving: Reloading time when moving
	
Poses
	Essentially, this folder allows you to enable or disable a certain pose (For example, turning off EnableSlope prohibits players from entering Slope Arms pose)

WalkSpeeds
	This folder allows you to adjust the walkspeed of each different pose (For example, changing Port value to 10 changes the walkspeed of Port Arms to 10)
	
===CUSTOMIZING WEAPON APPEARANCE===

Welding is already done when characters spawn. No need to weld (unless you're animating them, in which case skip to the next section)
Each weapon has a set of REQUIRED models and parts for it to function (as well as sounds, which will be omitted from this list since they're already there). Reference the list below for guidance, list is in hierarchial order.

Rifle/Carbine
	-Body
		-BodyAttach
	-Frizzen
		-FrizzenAttach
	-Hammer
		-HammerAtatch
	-Ramrod
		-RamrodAttach
	-Cartridge
	-Hold
	-Muzzle
	-SideBlast
	
Musket
	-Body
		-StockHitBox
			-Attachment (used to determine the hitbox of the stock)
		-BodyAttach
	-Bayonet
		-BayonetAttach
			-Attachment (same purpose as above)
	-Frizzen
		-FrizzenAttach
	-Hammer
		-HammerAttach
	-Ramrod
		-RamrodAttach
	-Cartridge
	-Hold
	-Muzzle
	-SideBlast
	
Pistol
	-Body
		-StockHitBox
			-Attachment (used to determine the hitbox of the stock)
		-BodyAttach
	-Frizzen
		-FrizzenAttach
	-Hammer
		-HammerAttach
	-Ramrod
		-RamrodAttach
	-Cartridge
	-Hold
	-Muzzle
	-SideBlast

Sabre
	-BodyAttach
	-Blade
		-Attachment (same usecase as above)

===CUSTOMIZING FIREARM SOUNDS===
My tech uses an extensive library of firearm sounds, randomized every time a player fires, to make it sound authentic and distinct.
If you want to replace my sounds with sounds of your own, follow the instructions below.

	1. In ReplicatedStorage, make a folder. Name this folder "MusketFire". 
	2. Into this folder, insert as many sounds as you like. Only the SoundId will be copied from the folder.
	3. If you want to customize other firearm sounds, make more folders and name them "PistolFire", "RifleFire", or "CarbineFire".

===ANIMATIONS!===

To animate a weapon, you must first rig up the weapon properly. 
For ease of rigging, I HAVE CREATED A PLUGIN FOR YOU TO USE. LINK HERE. https://www.roblox.com/library/6413467007/Cooldeath49s-Firearm-Welding-Plugin
Once you have installed the plugin, follow the steps below.

	1. Select a valid weapon TOOL. Not the model inside, the TOOL.
	2. Select an R6 rig.
	3. Click on the button in my plugin that corresponds with your weapon (For example, click on Rig Musket if you want to rig up a musket to a dummy).
	4. The musket should be properly rigged with the dummy. 

If you want to load in animations via the FirearmsSaves model, follow these instructions.
	1. Create a new model inside your dummy and name it "AnimSaves".
	2. Copy as many KeyframeSequences as you like from the FirearmsSaves model.
	3. Paste them into the "AnimSaves" model.

From here on out you are able to load in and modify the animations using Roblox's built in Animation Editor.

If you need to contact me, scroll up to the top and use the contact information provided. Elsewise, enjoy!
]]