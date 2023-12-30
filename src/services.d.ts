interface Workspace extends Instance {
	Camera: Camera;
	Baseplate: Part & {
		Texture: Texture;
	};
	["Firearms Pack"]: Model & {
		["READ MEEEEEEEEE"]: Script;
	};
	Part: Part;
	["Firearm Ammunition"]: Model & {
		Union: UnionOperation;
		ClickPart: Part & {
			Search: Sound;
			Script: Script;
			ClickDetector: ClickDetector;
		};
		Cover: Part & {
			SurfaceGui: SurfaceGui & {
				AmmoDisplay: TextLabel;
			};
		};
	};
	FirearmsSaves: Model & {
		Prone: Folder & {
			FirearmProneIdle: Animation & {
				FirearmProneIdle: KeyframeSequence;
			};
			ProneFire: Animation & {
				ProneFire: KeyframeSequence;
			};
			PronePresentIdle: Animation & {
				PronePresentIdle: KeyframeSequence;
			};
			PronePresent: Animation & {
				PronePresent: KeyframeSequence;
			};
		};
		Firing: Folder & {
			ProneMisfire: Animation & {
				ProneMisfire: KeyframeSequence;
			};
			RifleReload: Animation & {
				RifleReload: KeyframeSequence;
			};
			BayonetsRecover: Animation & {
				RecoverBayonets: KeyframeSequence;
			};
			ShoulderRecover: Animation & {
				ShoulderRecover: KeyframeSequence;
			};
			Reload: Animation & {
				Reload: KeyframeSequence;
			};
			RecoverIdle: Animation & {
				RecoverIdle: KeyframeSequence;
			};
			Fire: Animation & {
				Fire: KeyframeSequence;
			};
			Misfire: Animation & {
				Misfire: KeyframeSequence;
			};
			CarbineReload: Animation & {
				CarbineReload: KeyframeSequence;
			};
		};
		Present: Folder & {
			Present: Animation & {
				Present: KeyframeSequence;
			};
			PresentIdle: Animation & {
				PresentIdle: KeyframeSequence;
			};
		};
		Advance: Folder & {
			AdvancePresent: Animation & {
				AdvancePresent: KeyframeSequence;
			};
			AdvanceIdle: Animation & {
				AdvanceIdle: KeyframeSequence;
			};
			AdvanceArms: Animation & {
				AdvanceArms: KeyframeSequence;
			};
		};
		Order: Folder & {
			OrderArms: Animation & {
				OrderArms: KeyframeSequence;
			};
			OrderArmsIdle: Animation & {
				OrderArmsIdle: KeyframeSequence;
			};
		};
		Salute: Folder & {
			SaluteArms: Animation & {
				SaluteArms: KeyframeSequence;
			};
			SaluteIdle: Animation & {
				SaluteIdle: KeyframeSequence;
			};
		};
		Slope: Folder & {
			SlopeIdle: Animation & {
				SlopeIdle: KeyframeSequence;
			};
			SlopeArms: Animation & {
				SlopeArms: KeyframeSequence;
			};
		};
		Pistol: Folder & {
			Present: Folder & {
				PistolPresentIdle: Animation & {
					PistolPresentIdle: KeyframeSequence;
				};
				PistolPresent: Animation & {
					PistolPresent: KeyframeSequence;
				};
			};
			Firing: Folder & {
				PistolMisfire: Animation & {
					PistolMisfire: KeyframeSequence;
				};
				PistolShoulderRecover: Animation & {
					PistolShoulderRecover: KeyframeSequence;
				};
				PistolReload: Animation & {
					PistolReload: KeyframeSequence;
				};
				PistolFire: Animation & {
					PistolFire: KeyframeSequence;
				};
				PistolRecoverIdle: Animation & {
					PistolRecoverIdle: KeyframeSequence;
				};
			};
			Idle: Folder & {
				PistolSheath: Animation & {
					PistolSheath: KeyframeSequence;
				};
				PistolIdle: Animation & {
					PistolIdle: KeyframeSequence;
				};
			};
			Whip: Folder & {
				PistolWhipRight: Animation & {
					PistolWhipRight: KeyframeSequence;
				};
				WhipIdle: Animation & {
					WhipIdle: KeyframeSequence;
				};
				PistolWhipLeft: Animation & {
					WhipLeft: KeyframeSequence;
				};
				PistolSwitch: Animation & {
					PistolSwitch: KeyframeSequence;
				};
			};
		};
		TakeAim: Folder & {
			AimIdle: Animation & {
				AimIdle: KeyframeSequence;
			};
			ShoulderAim: Animation & {
				ShoulderAim: KeyframeSequence;
			};
			AimPresent: Animation & {
				AimPresent: KeyframeSequence & {
					MakeReady: Keyframe & {
						HumanoidRootPart: Pose & {
							Torso: Pose & {
								["Right Arm"]: Pose;
								["Left Arm"]: Pose;
								Hold: Pose & {
									FrizzenAttach: Pose;
									BayonetAttach: Pose;
									HammerAttach: Pose;
									RamrodAttach: Pose;
									BodyAttach: Pose;
								};
								Head: Pose;
							};
						};
						Hammer: Pose;
					};
				};
			};
		};
		Trail: Folder & {
			TrailIdle: Animation & {
				TrailIdle: KeyframeSequence;
			};
			TrailArms: Animation & {
				TrailArms: KeyframeSequence;
			};
		};
		MakeReady: Folder & {
			MakeReadyIdle: Animation & {
				MakeReadyIdle: KeyframeSequence;
			};
			MakeReady: Animation & {
				MakeReady: KeyframeSequence;
			};
		};
		Blocking: Folder & {
			HighBayonetsBlock: Animation & {
				HighBayonetsBlock: KeyframeSequence;
			};
			LowBayonetsBlock: Animation & {
				LowBayonetsBlock: KeyframeSequence;
			};
			LeftBayonetsBlock: Animation & {
				LeftBayonetsBlock: KeyframeSequence;
			};
			RightBayonetsBlock: Animation & {
				RightBayonetsBlock: KeyframeSequence;
			};
		};
		Support: Folder & {
			SupportArms: Animation & {
				SupportArms: KeyframeSequence;
			};
			SupportIdle: Animation & {
				SupportIdle: KeyframeSequence;
			};
		};
		Port: Folder & {
			PortArms: Animation & {
				PortArms: KeyframeSequence;
			};
			PortPresent: Animation & {
				PortPresent: KeyframeSequence;
			};
			PortIdle: Animation & {
				PortIdle: KeyframeSequence;
			};
			PortBayonets: Animation & {
				PortBayonets: KeyframeSequence;
			};
		};
		Melee: Folder & {
			ShoulderBayonets: Animation & {
				ShoulderBayonets: KeyframeSequence;
			};
			HighBayonets: Animation & {
				HighBayonets: KeyframeSequence;
			};
			LowBayonets: Animation & {
				LowBayonets: KeyframeSequence;
			};
			FixBayonets: Animation & {
				FixBayonets: KeyframeSequence;
			};
			BayonetsIdle: Animation & {
				BayonetsIdle: KeyframeSequence;
			};
			RightBayonets: Animation & {
				RightBayonets: KeyframeSequence;
			};
			LeftBayonets: Animation & {
				LeftBayonets: KeyframeSequence;
			};
		};
		Idle: Folder & {
			CrouchIdle: Animation & {
				CrouchIdle: KeyframeSequence;
			};
			ShoulderArms: Animation & {
				ShoulderArms: KeyframeSequence;
			};
		};
	};
	TechSetup: Script;
}

interface ServerStorage {
	Dummy: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			["Right Shoulder"]: Motor6D;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			roblox: Decal;
			["Left Shoulder"]: Motor6D;
			WaistFrontAttachment: Attachment;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Body Colors"]: BodyColors;
	};
}

interface StarterPack {
	Carbine: Tool & {
		CarbineDropper: Script;
		Carbine: Model & {
			Hammer: Model & {
				HammerAttach: Part & {
					Release: Sound;
					Cock: Sound;
					Half: Sound;
					Impact: Sound;
				};
			};
			Body: Model & {
				Union: UnionOperation;
				Barrel: Part;
				BodyAttach: Part;
				TriggerGuard: Part & {
					Mesh: SpecialMesh;
				};
				StockHitBox: Part;
				Pan: UnionOperation;
			};
			Hold: Part & {
				Move: Sound;
			};
			Cartridge: Part & {
				Place: Sound;
				Tear: Sound;
				Search: Sound;
			};
			Muzzle: Part & {
				DefaultFire: Sound;
				Flame: ParticleEmitter;
				Smoke: ParticleEmitter;
				Place: Sound;
				Fire: Sound;
				ShortSmoke: ParticleEmitter;
				Flash: SpotLight;
			};
			SideBlast: Part & {
				Flame: ParticleEmitter;
				Spark: ParticleEmitter;
				Smoke: ParticleEmitter;
			};
			Ramrod: Model & {
				RamrodAttach: Part & {
					Draw: Sound;
					Ram: Sound;
					Tap: Sound & {
						PitchShiftSoundEffect: PitchShiftSoundEffect;
						CompressorSoundEffect: CompressorSoundEffect;
					};
				};
			};
			Frizzen: Model & {
				FrizzenAttach: Part & {
					Pour: Sound;
					Mesh: SpecialMesh;
					Frizzen: Sound;
				};
				Union: UnionOperation;
			};
		};
		Settings: Configuration & {
			Poses: Configuration & {
				EnableTrail: BoolValue;
				EnableSalute: BoolValue;
				EnableSlope: BoolValue;
				EnableOrder: BoolValue;
				EnableSupport: BoolValue;
				EnablePort: BoolValue;
				EnableAdvance: BoolValue;
			};
			Features: Configuration & {
				EnableCrouch: BoolValue;
				EnableServerSideAiming: BoolValue;
				EnableMarching: BoolValue;
				EnableBlood: BoolValue;
				EnableProning: BoolValue;
				EnableLeaning: BoolValue;
				EnableTK: BoolValue;
				DisableBackpackWhileFiring: BoolValue;
			};
			WalkSpeeds: Configuration & {
				Advance: NumberValue;
				Aiming: NumberValue;
				Order: NumberValue;
				Reloading: NumberValue;
				Prone: NumberValue;
				Salute: NumberValue;
				Port: NumberValue;
				Support: NumberValue;
				Slope: NumberValue;
				Marching: NumberValue;
				Trail: NumberValue;
				Default: NumberValue;
			};
			Cameras: Configuration & {
				DefaultCamera: StringValue & {
					Offset: NumberValue;
				};
				AimingCamera: StringValue & {
					Offset: NumberValue;
				};
			};
			Miscellaneous: Configuration & {
				BulletDropPerFrame: NumberValue;
				CustomAnimSaves: ObjectValue;
				BulletSpeedPerFrame: NumberValue;
				ReloadSpeed: NumberValue;
				AccuracyAt200: NumberValue;
				FireRecoil: NumberValue;
				MaxAmmo: NumberValue;
				BeginReloaded: BoolValue;
				MisfireRate: NumberValue;
				ReloadSpeedWhileMoving: NumberValue;
			};
		};
		CarbineGui: ScreenGui & {
			AimingReticle: ImageLabel;
			AmmoText: TextLabel;
			DefaultReticle: ImageLabel;
		};
	};
	Rifle: Tool & {
		RifleDropper: Script;
		Rifle: Model & {
			Hammer: Model & {
				HammerAttach: Part & {
					Release: Sound;
					Cock: Sound;
					Half: Sound;
					Impact: Sound;
				};
			};
			Body: Model & {
				Union: UnionOperation;
				TriggerGuard: Part & {
					Mesh: SpecialMesh;
				};
				Barrel: Part;
				StockHitBox: Part;
				BodyAttach: Part;
				Lug: Part & {
					Mesh: BlockMesh;
				};
				Pan: UnionOperation;
			};
			Hold: Part & {
				Move: Sound;
			};
			Cartridge: Part & {
				Place: Sound;
				Tear: Sound;
				Search: Sound;
			};
			Muzzle: Part & {
				DefaultFire: Sound;
				Flame: ParticleEmitter;
				Fire: Sound;
				Place: Sound;
				Smoke: ParticleEmitter;
				ShortSmoke: ParticleEmitter;
				Flash: SpotLight;
			};
			SideBlast: Part & {
				Flame: ParticleEmitter;
				Spark: ParticleEmitter;
				Smoke: ParticleEmitter;
			};
			Ramrod: Model & {
				RamrodAttach: Part & {
					Draw: Sound;
					SoftTap: Sound & {
						PitchShiftSoundEffect: PitchShiftSoundEffect;
						CompressorSoundEffect: CompressorSoundEffect;
					};
					Ram: Sound;
					Tap: Sound & {
						PitchShiftSoundEffect: PitchShiftSoundEffect;
						CompressorSoundEffect: CompressorSoundEffect;
					};
				};
			};
			Frizzen: Model & {
				FrizzenAttach: Part & {
					Pour: Sound;
					Mesh: SpecialMesh;
					Frizzen: Sound;
				};
				Union: UnionOperation;
			};
		};
		Settings: Configuration & {
			Poses: Configuration & {
				EnableTrail: BoolValue;
				EnableSalute: BoolValue;
				EnableSlope: BoolValue;
				EnableOrder: BoolValue;
				EnableSupport: BoolValue;
				EnablePort: BoolValue;
				EnableAdvance: BoolValue;
			};
			Features: Configuration & {
				EnableCrouch: BoolValue;
				EnableServerSideAiming: BoolValue;
				EnableMarching: BoolValue;
				EnableBlood: BoolValue;
				EnableProning: BoolValue;
				EnableLeaning: BoolValue;
				EnableTK: BoolValue;
				DisableBackpackWhileFiring: BoolValue;
			};
			WalkSpeeds: Configuration & {
				Advance: NumberValue;
				Aiming: NumberValue;
				Order: NumberValue;
				Reloading: NumberValue;
				Prone: NumberValue;
				Salute: NumberValue;
				Port: NumberValue;
				Support: NumberValue;
				Marching: NumberValue;
				Trail: NumberValue;
				Slope: NumberValue;
				Default: NumberValue;
			};
			Cameras: Configuration & {
				DefaultCamera: StringValue & {
					Offset: NumberValue;
				};
				AimingCamera: StringValue & {
					Offset: NumberValue;
				};
			};
			Miscellaneous: Configuration & {
				BulletDropPerFrame: NumberValue;
				CustomAnimSaves: ObjectValue;
				BulletSpeedPerFrame: NumberValue;
				ReloadSpeed: NumberValue;
				AccuracyAt200: NumberValue;
				FireRecoil: NumberValue;
				MaxAmmo: NumberValue;
				BeginReloaded: BoolValue;
				MisfireRate: NumberValue;
				ReloadSpeedWhileMoving: NumberValue;
			};
		};
		RifleGui: ScreenGui & {
			AimingReticle: ImageLabel;
			AmmoText: TextLabel;
			DefaultReticle: ImageLabel;
		};
	};
	Musket: Tool & {
		MusketDropper: Script;
		MusketGui: ScreenGui & {
			MeleeReticle: ImageLabel;
			AmmoText: TextLabel;
			DefaultReticle: ImageLabel;
			AimingReticle: ImageLabel;
			Background: Frame & {
				TextLabel: TextLabel;
				Charge: Frame;
			};
		};
		Settings: Configuration & {
			Poses: Configuration & {
				EnableTrail: BoolValue;
				EnableSalute: BoolValue;
				EnableSlope: BoolValue;
				EnableOrder: BoolValue;
				EnableSupport: BoolValue;
				EnablePort: BoolValue;
				EnableAdvance: BoolValue;
			};
			Features: Configuration & {
				IndividualStaminaBar: BoolValue;
				EnableBayonet: BoolValue;
				EnableCharging: BoolValue;
				EnableCrouch: BoolValue;
				EnableServerSideAiming: BoolValue;
				EnableTK: BoolValue;
				EnableMelee: BoolValue;
				EnableBlood: BoolValue;
				EnableAttackCancelling: BoolValue;
				EnableMarching: BoolValue;
				DisableBackpackWhileFiring: BoolValue;
			};
			WalkSpeeds: Configuration & {
				Advance: NumberValue;
				Aiming: NumberValue;
				Order: NumberValue;
				Reloading: NumberValue;
				Salute: NumberValue;
				Port: NumberValue;
				Support: NumberValue;
				Marching: NumberValue;
				Melee: NumberValue;
				Trail: NumberValue;
				Slope: NumberValue;
				Default: NumberValue;
			};
			Cameras: Configuration & {
				DefaultCamera: StringValue & {
					Offset: NumberValue;
				};
				MeleeCamera: StringValue & {
					Offset: NumberValue;
				};
				AimingCamera: StringValue & {
					Offset: NumberValue;
				};
			};
			Miscellaneous: Configuration & {
				BulletDropPerFrame: NumberValue;
				CustomAnimSaves: ObjectValue;
				BulletSpeedPerFrame: NumberValue;
				ReloadSpeed: NumberValue;
				AccuracyAt200: NumberValue;
				FireRecoil: NumberValue;
				MaxAmmo: NumberValue;
				MeleeDamage: NumberValue;
				BashDamage: NumberValue;
				BeginReloaded: BoolValue;
				BayonetOn: BoolValue;
				MisfireRate: NumberValue;
				ReloadSpeedWhileMoving: NumberValue;
			};
		};
		Musket: Model & {
			Cartridge: Part & {
				Place: Sound;
				Tear: Sound;
				Search: Sound;
			};
			SideBlast: Part & {
				Smoke: ParticleEmitter;
				Spark: ParticleEmitter;
				Flame: ParticleEmitter;
			};
			Body: Model & {
				Union: UnionOperation;
				Barrel: Part;
				StockHitBox: Part;
				TriggerGuard: Part & {
					Mesh: SpecialMesh;
				};
				BodyAttach: Part;
				Lug: Part & {
					Mesh: BlockMesh;
				};
				Pan: UnionOperation;
			};
			Muzzle: Part & {
				DefaultFire: Sound;
				Flame: ParticleEmitter;
				Smoke: ParticleEmitter;
				Place: Sound;
				Fire: Sound;
				ShortSmoke: ParticleEmitter;
				Flash: SpotLight;
			};
			Hold: Part & {
				Move: Sound;
				Recharged: Sound;
			};
			Hammer: Model & {
				HammerAttach: Part & {
					Release: Sound;
					Cock: Sound;
					Half: Sound;
					Impact: Sound;
				};
			};
			Bayonet: Model & {
				BayonetAttach: Part & {
					Lunge: Sound;
					Place: Sound;
					Rotate: Sound;
					Sheath: Sound;
				};
			};
			Ramrod: Model & {
				RamrodAttach: Part & {
					Draw: Sound;
					Ram: Sound;
					Tap: Sound & {
						PitchShiftSoundEffect: PitchShiftSoundEffect;
						CompressorSoundEffect: CompressorSoundEffect;
					};
				};
			};
			Frizzen: Model & {
				FrizzenAttach: Part & {
					Pour: Sound;
					Mesh: SpecialMesh;
					Frizzen: Sound;
				};
				Union: UnionOperation;
			};
		};
	};
	Pistol: Tool & {
		PistolGui: ScreenGui & {
			AimingReticle: ImageLabel;
			AmmoText: TextLabel;
			DefaultReticle: ImageLabel;
		};
		PistolDropper: Script;
		Settings: Configuration & {
			Miscellaneous: Configuration & {
				BulletDropPerFrame: NumberValue;
				CustomAnimSaves: ObjectValue;
				BulletSpeedPerFrame: NumberValue;
				ReloadSpeed: NumberValue;
				AccuracyAt200: NumberValue;
				WhipDamage: NumberValue;
				FireRecoil: NumberValue;
				MaxAmmo: NumberValue;
				BeginReloaded: BoolValue;
				MisfireRate: NumberValue;
				ReloadSpeedWhileMoving: NumberValue;
			};
			WalkSpeeds: Configuration & {
				Marching: NumberValue;
				Default: NumberValue;
				Aiming: NumberValue;
				Reloading: NumberValue;
				Bash: NumberValue;
			};
			Cameras: Configuration & {
				DefaultCamera: StringValue & {
					Offset: NumberValue;
				};
				AimingCamera: StringValue & {
					Offset: NumberValue;
				};
			};
			Features: Configuration & {
				EnableCrouch: BoolValue;
				EnableServerSideAiming: BoolValue;
				EnableMarching: BoolValue;
				EnableBlood: BoolValue;
				EnableLeaning: BoolValue;
				EnableTK: BoolValue;
				EnableBash: BoolValue;
				DisableBackpackWhileFiring: BoolValue;
			};
		};
		Pistol: Model & {
			Hammer: Model & {
				HammerAttach: Part & {
					Release: Sound;
					Cock: Sound;
					Half: Sound;
					Impact: Sound;
				};
			};
			Body: Model & {
				BarrelPart: Part & {
					Mesh: SpecialMesh;
				};
				TriggerGuard: Part & {
					Mesh: SpecialMesh;
				};
				StockHitBox: Part;
				BodyAttach: Part;
				Pan: UnionOperation;
			};
			Hold: Part & {
				Draw: Sound;
				Move: Sound;
				Whip: Sound;
			};
			Cartridge: Part & {
				Place: Sound;
				Tear: Sound;
				Search: Sound;
			};
			Muzzle: Part & {
				DefaultFire: Sound;
				Flame: ParticleEmitter;
				Smoke: ParticleEmitter;
				Place: Sound;
				Fire: Sound;
				ShortSmoke: ParticleEmitter;
				Flash: SpotLight;
			};
			SideBlast: Part & {
				Flame: ParticleEmitter;
				Spark: ParticleEmitter;
				Smoke: ParticleEmitter;
			};
			Ramrod: Model & {
				RamrodAttach: Part & {
					Draw: Sound;
					Ram: Sound;
					Tap: Sound & {
						PitchShiftSoundEffect: PitchShiftSoundEffect;
						CompressorSoundEffect: CompressorSoundEffect;
					};
				};
			};
			Frizzen: Model & {
				FrizzenAttach: Part & {
					Pour: Sound;
					Mesh: SpecialMesh;
					Frizzen: Sound;
				};
				Union: UnionOperation;
			};
		};
	};
}
