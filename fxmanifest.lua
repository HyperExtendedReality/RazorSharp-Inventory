fx_version 'bodacious'
game 'gta5'
author 'You'
version '1.0.0'
description 'Example Resource from C# Template'

ui_page 'NUI/app/page.tsx'

files {
	'Client/bin/Release/**/publish/*.dll',
	'NUI/*'
	}

client_script 'Client/bin/Release/**/publish/*.net.dll'
server_script 'Server/bin/Release/**/publish/*.net.dll'

