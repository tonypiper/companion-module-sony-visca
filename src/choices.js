export const CHOICES = {
	// ########################
	// #### Value Look Ups ####
	// ########################
	IRIS: [
		{ id: '15', label: 'F2.8 OPEN' },
		{ id: '14', label: 'F3.1' },
		{ id: '13', label: 'F3.4' },
		{ id: '12', label: 'F3.7' },
		{ id: '11', label: 'F4.0' },
		{ id: '10', label: 'F4.4' },
		{ id: '0F', label: 'F4.8' },
		{ id: '0E', label: 'F5.2' },
		{ id: '0D', label: 'F5.6' },
		{ id: '0C', label: 'F6.2' },
		{ id: '0B', label: 'F6.8' },
		{ id: '0A', label: 'F7.3' },
		{ id: '09', label: 'F8.0' },
		{ id: '08', label: 'F8.7' },
		{ id: '07', label: 'F9.6' },
		{ id: '06', label: 'F10' },
		{ id: '05', label: 'F11' },
	],

	GAIN: [
		{ id: '0C', label: '33 dB' },
		{ id: '0B', label: '30 dB' },
		{ id: '0A', label: '27 dB' },
		{ id: '09', label: '24 dB' },
		{ id: '08', label: '21 dB' },
		{ id: '07', label: '18 dB' },
		{ id: '06', label: '15 dB' },
		{ id: '05', label: '12 dB' },
		{ id: '04', label: '9 dB' },
		{ id: '03', label: '6 dB' },
		{ id: '02', label: '3 dB' },
		{ id: '01', label: '0 dB' },
		{ id: '00', label: '-3 dB' },
	],

	SHUTTER: [
		{ id: '15', label: '1/10000 | 1/10000' },
		{ id: '14', label: '1/6000 | 1/6000' },
		{ id: '13', label: '1/4000 | 1/3500' },
		{ id: '12', label: '1/3000 | 1/2500' },
		{ id: '11', label: '1/2000 | 1/1750' },
		{ id: '10', label: '1/1500 | 1/1250' },
		{ id: '0F', label: '1/1000 | 1/1000' },
		{ id: '0E', label: '1/725 | 1/600' },
		{ id: '0D', label: '1/500 | 1/425' },
		{ id: '0C', label: '1/350 | 1/300' },
		{ id: '0B', label: '1/250 | 1/215' },
		{ id: '0A', label: '1/180 | 1/150' },
		{ id: '09', label: '1/125 | 1/120' },
		{ id: '08', label: '1/100 | 1/100' },
		{ id: '07', label: '1/90 | 1/75' },
		{ id: '06', label: '1/60 | 1/50' },
		{ id: '05', label: '1/30 | 1/25' },
		{ id: '04', label: '1/15 | 1/12' },
		{ id: '03', label: '1/8 | 1/6' },
	],

	BRIGHTNESS: [
		{ id: '1F', label: 'ƒ/1.8  43db gain' },
		{ id: '1E', label: 'ƒ/1.8  39db gain' },
		{ id: '1D', label: 'ƒ/1.8  36db gain' },
		{ id: '1C', label: 'ƒ/1.8  33db gain' },
		{ id: '1B', label: 'ƒ/1.8  30db gain' },
		{ id: '1A', label: 'ƒ/1.8  27db gain' },
		{ id: '19', label: 'ƒ/1.8  24db gain' },
		{ id: '18', label: 'ƒ/1.8  21db gain' },
		{ id: '17', label: 'ƒ/1.8  18db gain' },
		{ id: '16', label: 'ƒ/1.8  15db gain' },
		{ id: '15', label: 'ƒ/1.8  12db gain' },
		{ id: '14', label: 'ƒ/1.8  9db gain' },
		{ id: '13', label: 'ƒ/1.8  6db gain' },
		{ id: '12', label: 'ƒ/1.8  3db gain' },
		{ id: '11', label: 'ƒ/1.8  0db gain' },
		{ id: '10', label: 'ƒ/2    0db gain' },
		{ id: '0F', label: 'ƒ/2.4  0db gain' },
		{ id: '0E', label: 'ƒ/2.8  0db gain' },
		{ id: '0D', label: 'ƒ/3.4  0db gain' },
		{ id: '0C', label: 'ƒ/4    0db gain' },
		{ id: '0B', label: 'ƒ/4.8  0db gain' },
		{ id: '0A', label: 'ƒ/5.6  0db gain' },
		{ id: '09', label: 'ƒ/6.8  0db gain' },
		{ id: '08', label: 'ƒ/8    0db gain' },
		{ id: '07', label: 'ƒ/9.6  0db gain' },
		{ id: '06', label: 'ƒ/11   0db gain' },
		{ id: '05', label: 'ƒ/14   0db gain' },
		{ id: '04', label: 'ƒ/16   0db gain' },
		{ id: '03', label: 'ƒ/19   0db gain' },
		{ id: '02', label: 'ƒ/22   0db gain' },
		{ id: '01', label: 'ƒ/27   0db gain' },
		{ id: '00', label: 'Closed 0db gain' },
	],

	EXPOSURE_COMPENSATION: [
		{ id: '0E', label: '+7' },
		{ id: '0D', label: '+6' },
		{ id: '0C', label: '+5' },
		{ id: '0B', label: '+4' },
		{ id: '0A', label: '+3' },
		{ id: '09', label: '+2' },
		{ id: '08', label: '+1' },
		{ id: '07', label: '0' },
		{ id: '06', label: '-1' },
		{ id: '05', label: '-2' },
		{ id: '04', label: '-3' },
		{ id: '03', label: '-4' },
		{ id: '02', label: '-5' },
		{ id: '01', label: '-6' },
		{ id: '00', label: '-7' },
	],

	PRESET: [
		{ id: '3F', label: 'Preset 64' },
		{ id: '3E', label: 'Preset 63' },
		{ id: '3D', label: 'Preset 62' },
		{ id: '3C', label: 'Preset 61' },
		{ id: '3B', label: 'Preset 60' },
		{ id: '3A', label: 'Preset 59' },
		{ id: '39', label: 'Preset 58' },
		{ id: '38', label: 'Preset 57' },
		{ id: '37', label: 'Preset 56' },
		{ id: '36', label: 'Preset 55' },
		{ id: '35', label: 'Preset 54' },
		{ id: '34', label: 'Preset 53' },
		{ id: '33', label: 'Preset 52' },
		{ id: '32', label: 'Preset 51' },
		{ id: '31', label: 'Preset 50' },
		{ id: '30', label: 'Preset 49' },
		{ id: '2F', label: 'Preset 48' },
		{ id: '2E', label: 'Preset 47' },
		{ id: '2D', label: 'Preset 46' },
		{ id: '2C', label: 'Preset 45' },
		{ id: '2B', label: 'Preset 44' },
		{ id: '2A', label: 'Preset 43' },
		{ id: '29', label: 'Preset 42' },
		{ id: '28', label: 'Preset 41' },
		{ id: '27', label: 'Preset 40' },
		{ id: '26', label: 'Preset 39' },
		{ id: '25', label: 'Preset 38' },
		{ id: '24', label: 'Preset 37' },
		{ id: '23', label: 'Preset 36' },
		{ id: '22', label: 'Preset 35' },
		{ id: '21', label: 'Preset 34' },
		{ id: '20', label: 'Preset 33' },
		{ id: '1F', label: 'Preset 32' },
		{ id: '1E', label: 'Preset 31' },
		{ id: '1D', label: 'Preset 30' },
		{ id: '1C', label: 'Preset 29' },
		{ id: '1B', label: 'Preset 28' },
		{ id: '1A', label: 'Preset 27' },
		{ id: '19', label: 'Preset 26' },
		{ id: '18', label: 'Preset 25' },
		{ id: '17', label: 'Preset 24' },
		{ id: '16', label: 'Preset 23' },
		{ id: '15', label: 'Preset 22' },
		{ id: '14', label: 'Preset 21' },
		{ id: '13', label: 'Preset 20' },
		{ id: '12', label: 'Preset 19' },
		{ id: '11', label: 'Preset 18' },
		{ id: '10', label: 'Preset 17' },
		{ id: '0F', label: 'Preset 16' },
		{ id: '0E', label: 'Preset 15' },
		{ id: '0D', label: 'Preset 14' },
		{ id: '0C', label: 'Preset 13' },
		{ id: '0B', label: 'Preset 12' },
		{ id: '0A', label: 'Preset 11' },
		{ id: '09', label: 'Preset 10' },
		{ id: '08', label: 'Preset 9' },
		{ id: '07', label: 'Preset 8' },
		{ id: '06', label: 'Preset 7' },
		{ id: '05', label: 'Preset 6' },
		{ id: '04', label: 'Preset 5' },
		{ id: '03', label: 'Preset 4' },
		{ id: '02', label: 'Preset 3' },
		{ id: '01', label: 'Preset 2' },
		{ id: '00', label: 'Preset 1' },
		{ id: 'ps', label: 'Use presetSelector Variable' },
	],

	SPEED: [
		{ id: '18', label: 'Speed 24 (fast)' },
		{ id: '17', label: 'Speed 23' },
		{ id: '16', label: 'Speed 22' },
		{ id: '15', label: 'Speed 21' },
		{ id: '14', label: 'Speed 20' },
		{ id: '13', label: 'Speed 19' },
		{ id: '12', label: 'Speed 18' },
		{ id: '11', label: 'Speed 17' },
		{ id: '10', label: 'Speed 16' },
		{ id: '0F', label: 'Speed 15' },
		{ id: '0E', label: 'Speed 14' },
		{ id: '0D', label: 'Speed 13' },
		{ id: '0C', label: 'Speed 12 (default)' },
		{ id: '0B', label: 'Speed 11' },
		{ id: '0A', label: 'Speed 10' },
		{ id: '09', label: 'Speed 09' },
		{ id: '08', label: 'Speed 08' },
		{ id: '07', label: 'Speed 07' },
		{ id: '06', label: 'Speed 06' },
		{ id: '05', label: 'Speed 05' },
		{ id: '04', label: 'Speed 04' },
		{ id: '03', label: 'Speed 03' },
		{ id: '02', label: 'Speed 02' },
		{ id: '01', label: 'Speed 01 (slow)' },
	],

	LENS_SPEED: [
		{ id: '07', label: 'Speed 7 (fast)' },
		{ id: '06', label: 'Speed 6' },
		{ id: '05', label: 'Speed 5' },
		{ id: '04', label: 'Speed 4' },
		{ id: '03', label: 'Speed 3' },
		{ id: '02', label: 'Speed 2' },
		{ id: '01', label: 'Speed 1' },
		{ id: '00', label: 'Speed 0 (slow)' },
	],

	CAMERA_ID: [
		{ id: '128', label: 'id 0' },
		{ id: '129', label: 'id 1' },
		{ id: '130', label: 'id 2' },
		{ id: '131', label: 'id 3' },
		{ id: '132', label: 'id 4' },
		{ id: '133', label: 'id 5' },
		{ id: '134', label: 'id 6' },
		{ id: '135', label: 'id 7' },
		{ id: '136', label: 'id 8' },
	],

	PROTOCOL: [
		{ id: 'udp', label: 'UDP (try using port 53281) ' },
		{ id: 'tcp', label: 'TCP (try using port 5678)' },
	],
}
