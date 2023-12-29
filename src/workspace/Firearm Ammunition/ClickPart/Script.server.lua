local ClickDetector = script.Parent.ClickDetector
local function Clicked(player)
	local Character = player.Character
	local Backpack = player.Backpack
	if Character and Backpack then
		local Children = Backpack:GetChildren()
		local Played = false
		for i,v in pairs(Children) do
			if v:IsA("Tool") then
				if v:FindFirstChild("Events") then
					if v.Events:FindFirstChild("RefillAmmo") then
						v.Events.RefillAmmo:FireClient(player)
						Played = true
					end
				end
			end
		end
		if Played then
			local Clone = script.Parent.Search:Clone()
			Clone.Parent = script.Parent
			Clone:Play()
			game.Debris:AddItem(Clone, Clone.TimeLength)
		end
	end
end

ClickDetector.MouseClick:Connect(Clicked)