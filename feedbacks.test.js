test('feedbacks object is returned correctly', () => {
	const self = {
		data: {
			heldThresholdReached: true,
			oaf: 'Auto',
			exposureMode: 'Manual',
		},
	}
	const feedbacks = require('./feedbacks')(self)
	expect(feedbacks.heldFeedback.type).toBe('boolean')
	expect(feedbacks.heldFeedback.name).toBe('Button Hold Time Reached')
	expect(feedbacks.heldFeedback.description).toBe('Indicate if button is held long enough for secondary action')
	expect(feedbacks.heldFeedback.defaultStyle.color).toBe('#000000')
	expect(feedbacks.heldFeedback.defaultStyle.bgcolor).toBe('#FFFF00')
	expect(feedbacks.heldFeedback.options).toEqual([])
	expect(feedbacks.heldFeedback.callback()).toBe(true)

	expect(feedbacks.lastPresetUsed.type).toBe('boolean')
	expect(feedbacks.lastPresetUsed.name).toBe('Last Preset Used')
	expect(feedbacks.lastPresetUsed.description).toBe('Highlight the last preset used')
	expect(feedbacks.lastPresetUsed.defaultStyle.color).toBe('#000000')
	expect(feedbacks.lastPresetUsed.defaultStyle.bgcolor).toBe('#FFFFFF')
	expect(feedbacks.lastPresetUsed.options).toEqual([])
	expect(feedbacks.lastPresetUsed.callback()).toBe(true)

	expect(feedbacks.autoFocus.type).toBe('boolean')
	expect(feedbacks.autoFocus.name).toBe('Lens - Auto Focus State')
	expect(feedbacks.autoFocus.description).toBe('Indicate if Auto focus is ON or OFF')
	expect(feedbacks.autoFocus.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.autoFocus.defaultStyle.bgcolor).toBe('#8B0000')
	expect(feedbacks.autoFocus.defaultStyle.text).toBe('Auto\\nFocus')
	expect(feedbacks.autoFocus.options).toEqual([
		{
			type: 'dropdown',
			label: 'Focus Mode',
			id: 'option',
			default: '1',
			choices: [
				{ id: '0', label: 'Manual' },
				{ id: '1', label: 'Auto' },
			],
		},
	])
	expect(feedbacks.autoFocus.callback({ options: { option: '1' } })).toBe(true)
	expect(feedbacks.autoFocus.callback({ options: { option: '0' } })).toBe(false)

	expect(feedbacks.exposureAuto.type).toBe('boolean')
	expect(feedbacks.exposureAuto.name).toBe('Auto Exposure Mode')
	expect(feedbacks.exposureAuto.description).toBe('Indicates if Exposure Mode is set to Full Auto')
	expect(feedbacks.exposureAuto.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.exposureAuto.defaultStyle.bgcolor).toBe('#FFD700')
	expect(feedbacks.exposureAuto.options).toEqual([
		{
			type: 'dropdown',
			label: 'Exposure Mode',
			id: 'option',
			default: '0',
			choices: [
				{ id: '0', label: 'Other' },
				{ id: '1', label: 'Auto' },
			],
		},
	])
	expect(feedbacks.exposureAuto.callback({ options: { option: '1' } })).toBe(true)
	expect(feedbacks.exposureAuto.callback({ options: { option: '0' } })).toBe(false)

	expect(feedbacks.exposureManual.type).toBe('boolean')
	expect(feedbacks.exposureManual.name).toBe('Manual Exposure Mode')
	expect(feedbacks.exposureManual.description).toBe('Indicates if Exposure Mode is set to Manual')
	expect(feedbacks.exposureManual.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.exposureManual.defaultStyle.bgcolor).toBe('#000000')
	expect(feedbacks.exposureManual.options).toEqual([
		{
			type: 'dropdown',
			label: 'Exposure Mode',
			id: 'option',
			default: '1',
			choices: [
				{ id: '0', label: 'Other' },
				{ id: '1', label: 'Manual' },
			],
		},
	])
	expect(feedbacks.exposureManual.callback({ options: { option: '1' } })).toBe(true)
	expect(feedbacks.exposureManual.callback({ options: { option: '0' } })).toBe(false)

	expect(feedbacks.exposureIrisPriority.type).toBe('boolean')
	expect(feedbacks.exposureIrisPriority.name).toBe('Auto Exposure Mode')
	expect(feedbacks.exposureIrisPriority.description).toBe('Indicates if Exposure Mode is set to Iris Priority')
	expect(feedbacks.exposureIrisPriority.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.exposureIrisPriority.defaultStyle.bgcolor).toBe('#000000')
	expect(feedbacks.exposureIrisPriority.options).toEqual([
		{
			type: 'dropdown',
			label: 'Exposure Mode',
			id: 'option',
			default: '1',
			choices: [
				{ id: '0', label: 'Other' },
				{ id: '1', label: 'Iris Priority' },
			],
		},
	])
	expect(feedbacks.exposureIrisPriority.callback({ options: { option: '1' } })).toBe(false)
	expect(feedbacks.exposureIrisPriority.callback({ options: { option: '0' } })).toBe(true)

	expect(feedbacks.exposureShutterPriority.type).toBe('boolean')
	expect(feedbacks.exposureShutterPriority.name).toBe('Auto Exposure Mode')
	expect(feedbacks.exposureShutterPriority.description).toBe('Indicates if Exposure Mode is set to Shutter Priority')
	expect(feedbacks.exposureShutterPriority.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.exposureShutterPriority.defaultStyle.bgcolor).toBe('#000000')
	expect(feedbacks.exposureShutterPriority.options).toEqual([
		{
			type: 'dropdown',
			label: 'Exposure Mode',
			id: 'option',
			default: '1',
			choices: [
				{ id: '0', label: 'Other' },
				{ id: '1', label: 'Shutter Priority' },
			],
		},
	])
	expect(feedbacks.exposureShutterPriority.callback({ options: { option: '1' } })).toBe(false)
	expect(feedbacks.exposureShutterPriority.callback({ options: { option: '0' } })).toBe(true)

	expect(feedbacks.exposureGainPriority.type).toBe('boolean')
	expect(feedbacks.exposureGainPriority.name).toBe('Auto Exposure Mode')
	expect(feedbacks.exposureGainPriority.description).toBe('Indicates if Exposure Mode is set to Gain Priority')
	expect(feedbacks.exposureGainPriority.defaultStyle.color).toBe('#FFFFFF')
	expect(feedbacks.exposureGainPriority.defaultStyle.bgcolor).toBe('#000000')
	expect(feedbacks.exposureGainPriority.options).toEqual([
		{
			type: 'dropdown',
			label: 'Exposure Mode',
			id: 'option',
			default: '1',
			choices: [
				{ id: '0', label: 'Other' },
				{ id: '1', label: 'Gain Priority' },
			],
		},
	])
	expect(feedbacks.exposureGainPriority.callback({ options: { option: '1' } })).toBe(false)
	expect(feedbacks.exposureGainPriority.callback({ options: { option: '0' } })).toBe(true)
})
