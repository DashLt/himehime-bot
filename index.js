var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;

bot.on('message', message => {
  var voiceChannel = message.member.voiceChannel;
  if (isReady && message.content === 'HIME' && voiceChannel != null && typeof voiceChannel != 'undefined')
  {
  isReady = false;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('./Audio/himehime.m4a');
     function sendMessageWithDelay(text, delay, reply = false){
		var Timeout = setTimeout (function (){
			if(reply){
				message.reply(text);
			}else{
	        	message.channel.sendMessage(text);
			}
	      }, delay);
	 }
     sendMessageWithDelay("Lovely Chance, Pancake-chan!",7000,true);
     sendMessageWithDelay("Lovely Chance, Pancake-chan!", 10000);
     sendMessageWithDelay("Lovely Chance, Pancake-chan!", 12000);
     sendMessageWithDelay("Lovely Chance, Pancake-chan!", 15000);
     sendMessageWithDelay("There are a lot of things... probably?? ..But!!", 18000);
     sendMessageWithDelay("It is important to young girls!", 21000);
     sendMessageWithDelay("Hey, did my feeling reach you? They didn't?", 23000);
     sendMessageWithDelay("Even if you say that it's impossible, if there is even a little bit of a chance,", 29000);
     sendMessageWithDelay("I want to believe that this heart is real", 34000);
     sendMessageWithDelay("Today's story is a page turner", 40000);
     sendMessageWithDelay("The power that I held hidden in my chest", 45000);
     sendMessageWithDelay("To a new world that is not listed in the route guide,", 50000);
     sendMessageWithDelay("Let's go!", 55000);
     sendMessageWithDelay("Metamorphose", 56900);
     sendMessageWithDelay("Hi~me, Hime!! H͎͎̫̠͚̭̪͜ì̡̦̙̠͎͙͔̕m̧̱̠̫̝̫̹͍̝̫͢e̶̢̛̻͔̯͕̙̪̪!̴̶̠̮̬̞̝͝!̨̥̝̪͜͟ ̫͎Ì̸̡̤̼̘̫͍̝̰̘ ̸̜̗̥̥̙ͅl̤̺̟o̞̰̻̤v̵̻͡è̡̹̱̰͍̱͖,̛̙̤͇̳̕ ͇̖͓͈͎̝̞̲l̸̸̼̜o̴̰̲̦v̶̷̫̮̤̙̫̦͚̲́e̸̬̳̣̖̪͉,҉̶̪̳ ͙̣͚͕̭̝l̶̠̝͖͚͙͎̦o̧͙̯̝v̢͕̯̱̞͙̠ͅè̸̺͖̼͎̝ ̵͇͉͈͚͈͠ỳ̶̛̭̹̬̭̹o҉̳̳̯͖̬̹́ų̫ ̹͉͓͝♥̧͕̰͙̙̳̗̻͢", 60000);
     sendMessageWithDelay("H̞̱͉̲̹̼ͅį̸̹͔͖͡m͚̠̙͈͔̟͟è̢͉̞͔̬̟́!̭̟̼̥͙!̡̰̭̪͙ ̶̬͍̯͉̗̲Ḩ̸̮͔̠͜i̸͚͍͎̪͈̜͢m̻̯̜̲̥̲͜e̴̩͈̕͟!̡͕̫̳!̛̫̳̟͇̜̣̩͞ ̮̭̪͓͕͙̕͝͝ͅS̸̢̥̯̞͜p̱͔̝͘͠͝a̶͎͚̣̳̪̟͖r̻̮̙̳̕k̀҉̘̞͍̝̲̺͇l̵̵̺̫̠̬̤̣̭͓̗̀è̼̝̭͇̪̘̤ͅ,͖̜̪̕ ̧̬̠̥͎̦̗̗̜͉s̞̟̙̖̪̬͍̤p̷̭̬̱̗a̷̫͕̭̰͘r̷̭̝̠̞͉̕ḱ͔̫͟͠l͏̢̧̩̪̳̦̤̤̟̜̥è̸͓̹̱͈̦̞̺͎͍ ̷̰̮̫͚̝̩͝ͅ☆͙", 63500);
     sendMessageWithDelay("Ą̴̧̮̮̩͚̪͔s͖̗̙̮͎͇͍̗͜ ̢̛̻͜l̢̰̻͔͔͍o̴̸̢̜̥̘̩̩͙̣̻n̮̭̝̙̥ģ̞̣̦̜̤͖̦́ ̢̢͓̮̜͍̫̳͈̻͍͜a̳͉͇͝s͠҉͉ͅ ͏̨̙̖̲̘̬̥͖͖Į̯͉̬̣̦͟ ̶̛̲̰̪̠͍h̵̶͎̯̤̺̥͞a̵̺̼̖̖̬̤̰͘v̬̣͓̻͡e̴̵̦̼͕͈ͅ ̸̡̱̥̦̖̰̳̟̫̺ý̵̸̱̩͓̫͉̖͈o̝̠̻͉͖̥̕̕u͔̗̣̝̟͓͙̹ ̼͚̬̬a̧̙͓̹̞͎͘ͅń͏̤̞͔͢ḑ̘̳̲̱̺̦͞ ̷̛͇̘̖̬͟a̶̹̹̝ͅl͇̹͈͜ḽ ̶͙͓̜̝͉͖ͅm̰̭̺̘̙̦̬̱̀́̕ỵ̨̩ͅ ̸̬͔̹͙̞f̰͕͙̠̫͈̮̜r̗͚̬͘͠͡ị̶̪͖̯é̸̪̤̪̯͕͔͔͠n̷͎͕͚̞͔͕͞͝d͇̮̰̥̀͝s̴͔̜͕̬̦̗̕͜,̡̬̖͉͈̖͚͙̳͘", 66500);
     sendMessageWithDelay("Í̫͎̲̝͙̪̞ͅ'̷͈̩̪̟̬͈̘͡m̰̭̰̤͉̖͘͞ ̴͉̬͔́i̴̥̹ͅn̤̟͘͜͞v̷̞͎̻̹̬͠ͅi̖̗͎͚̭̯̖̩̠̕͢ṋ̰͝c͕͕͢i̧̳̠̗͎̱̗͢b̨̯͟l̩͙̩̬̖͎͕̞͟e̴͓͔̭͍!̛͕", 68900);
     sendMessageWithDelay("H҉̴̫̖̠̻͍̙̕ị͚͎̻̗͈̤̺̗͔͟͢͜͝͠~̴̷̡͢҉̩̟̬͕̖͖̠̹̪̝͍m̶̱͖̗͚̭̭͙͉̲̖͍͉̠̮͜͟͢͝ͅͅͅe̵̷͇̘͙͉̝͓̦͎͈̖,̶̷̸̴̮̣̯̯̟̬̙̼̭͍̝̯̞̦̲͚̙̀ ̧̧̱̖̦̩̰͈͎͓͈̖͍͞͠H̘̮͙̜̫̩̤̠̰̙̻̰͓̳̮͕͟͡͞i҉̵҉̘̼̣̲̦͔̱̤͔̼̭͎ͅm̛̟̜͈͚̣̤͈͖̦͈̳̜̪͍̩͉̙͝͝e̵̙͉͓̠̗̜̱̻̰̥͖̤̝͍͇̯͡ͅ!͍͔̰̰͕̘͕͕̺̭͍͟͠!̞̣̦̬͈̼͖̝͚̖̩̕ͅͅ ̴̨҉̢̮̪͖̹͓͚̖͖͈͈̗̮͍̹̠ͅH̸̛̳̭͓͇̦̺͇̬̼̹̺̤̲͚͉͚͡͝ͅi͏̴̷̦̭̥̬̤̰͘m̨̗̼̱̟̫̮̤̤̬̙̥̹̜̘̹̮̺͓͉͡͞e͎͇̮̪̱͉̕͢!̷̸͓̲̬̲͔̯̰͖̜̟̱͖̭̪̱̞͞!̷̨͈͈̠̯̭̠̫̤̠̗͔ͅ ̧̰̠̭̥̟̫͕̯̼̜́̕͜I̶̸̝̠̫̠̙̖̮͘͟͞ ̴̛̥͓̪͔̗̫̫̬͎͈ͅl̷̨̞̠̭͔͔o͏̛̮͓̤͖̺͙̠͙̘͓ṿ̵̨͉̣͉̻̝͎͈͇͎̫̝̟̼̱͇͟ȩ̶̰̥̩͎͈̺͙̦͓͠͞,̶̗͈͓̼͉̹͖̣̮͓̭͙̫̝͜͞ͅ ̨̘̠͕̖̥͇̼͠͞l̷̨̮̦͎̮̜̬̫͞͝͡o̗͔̼͇͟͞v̴̗̳͔͖̪͍̀͜͝é̡́̕͏̲̯̫,̨̠̲͈͙̖͍̘̞͎͖̤̺͕̝̤̱̤͘͡ͅ ̛͝҉̢̟̰̤̫͍̳̲̳̩͞ͅļ̶͟͏͚̬͓͕̞̦̲̤͍̯͍͉o҉̢͔̝̤̻̳̯̮ͅv҉̵̝̬͙̝͙̯͉̪̹è̙̠͖̟̦͓̮͎͓̦̙̙͉͞ͅͅͅ ̸̴̧̼̮̭̬̼̭̗͕͢͡y̷̸̡̬̪̥͖̬ǫ̭͉͉͍͙͢u̧̥̥̣̻͚̙̫̪̘͈̕͟ ͏҉̧̭͈̮͕̫͇̦̭̝̥̗̟͓͎̥͟♥̰̬͈̣̤̪̱͔̲̰̤̳͈̗͢͞", 70750);
     sendMessageWithDelay("H̶̢̛͓͍̙̭̼͔͙͟͡ͅì̴͎͈͉̮̱͔̞͇̟͎͔̭͞͡m̷̸̥̥͍͔̞̞͟e͏̡̩̩͓͈͕̳̭̞̫̖̣̱!̶̞̬̘̻̜͘͡!͏͝҉͇̲̹̭̞͉̖̙̺̼͙̙͇͖̤̯͍͕ͅ ҉̙̻̜̦̬̰͎͎̺͉͇̝̠̺H̡̳̜̗͖̬̞̪̮̱͔̲̘̲̺͡ͅi҉̜̥̜̪͖̘̤͍̮̝̺̮͓̭̟̀ͅm҉̷̻̜̯̥͉̟͍̪̤̯͇̜è̛̪̱̺̣̘̫̜͈̹͟!̴̢̗͙͍̺͎̣͕̜̩͙͖̭̤!̷̶̸̣̬̳̞̜͇̭͘ ̛͔͍̥̺̦̟͖̭̘͍͇͍̭̤̕̕S̛̤͎̰̝͜p̸̦̝͇̩͓̞̞͙͖͞a̡̛̹͓̜̩̗̰͍̳̫͙͈̰̳͡r̶͝҉̘̩̺͇͚̻̰̫͇̯͍͠k̜̝͔͇͉͙̤̹͖̙̭̤̻̼͓̀͞ͅͅḷ̷̲̣̼̙͈͖̞̭͙͈̭͍̝͢͜é́҉̶͎̥̱̭̗̹̳̩̪̳͖͚,̷̟͓̩͇̤͓̜̣͚̠̰̕͝͞ ̷̛҉̩͈̟̙̯̬̻͚͇͜͞s̸̨̫͖̠̮̦̮̗̩͓͓̘̳͘͟͝p҉̴̵̛̯̗̝͝a̢͉̰̰̘̲̗̭͎̰r̸͏͙̱̟̙̘̝̜̼̤͕̳̫͖̥ͅk̵͔̣̳̺̳͖̲͙̖͢ĺ̷̦̖͖̭͔͓̺̭̹ͅȩ̶̡̭̦̮ ̧̛̪̮͖̭̗̱̰̦̺̲̺̼☆̪̱͖̦̖̬̰͇̬̱̮̩̝̼͝", 74000);
     sendMessageWithDelay("E̜̠͇̖̜̪̞̯͔͇̫̲̘̠̟̕v͚̙̦̲͙͉̥̜̞̰̦͢ȩ̡̭͍̘̠̻n҉̶̴̧͇̞̱̯̹̻̞̻͇̩̱͉̺̼̕ ̸̢͏̥͖̜̤̬͓̬̦̭̰̥̹͚̀w̶̢̧̡̱̲̱̥̥̯̘̲̘̹͖͟i͏̵̡҉̮̩̭̞̗̦͕͓͖̻t̷̀͏҉͏͓̪̙͉͕͔̭͎h̨͏̪̪̣̟̫̼͙̬ ̵͇̗͍͇̯̞͍̟͉̙̟̼̩̝̻̦̖̖̕͜͠à̛̯͚̭̬̺̯̠̳̩͓̠̤̩͙̻̙͢ͅ ̷̡̯̦̤͚̟͙̜̱̕ͅs̀҉̹͖̦̳̯̭̭͈͡͡p̸̸̠̱̱̺͘ȩ̠͈̲̫͙͓̞̹̜̝̥͚͔̩̰́͞ͅl̨̡͏̗̞̠̲̜͙̯̬̞͈̭ͅͅl̢̡͏̧̦͖̗͉͔͚̬̣̦͠ ͓͔̻̻̠͇̦̺̪͚̹͔̰͙̭͙̀́͡t̛̞̫̞̙͈̝̹͟͝o̻̪̟͕̪̖̕͡ ̵̡̡͚͈̮̤̼̺̘̲͍̺m̧͓̪͕̣͓̞͖̯̺̱͕̟̠̻̦̣̣͢͟͞a̸̛̤͖͉̙̦̠͖͉̻̻̙̯̙͜͝ͅk̼͚͉͍͎͇͈̱̮̘͓̙̣͉̤̭͟͞ͅę̴̲͙̫̪̤̲̝̜̝̻̩̣̫̥ ̸̧͓̼̼̠̯̪͝ţ̴̴̭̤̲̖̪͎̬̝͓̀̀h҉̝̘̰͉͕̼͖͖̗͕͚͍̠͜͢é̶̵͎̺͍̜̹̥̲͈͍̰̩̥͘͟m̛̟͖̪̮͈̥̜̼̀͢ ҉̠̰͈͉̱̫͢ͅb̶҉̸̵̧͖̱͍̞į̸̴̢̜͇̘͞ͅǵ̸̢͕̱̭̲̞͇̟̼̥̞̘͚͜g̨̳̥̭͉̟̫̭̠̹̰̝̠͎͇̼̪͈͜͝͞͝ͅe҉̫͕͍̬̰͘͠͝r̵̴̘̪̯̥̺͚̣̺̩̥̙͔͟ͅ,̡͏̸̶̞̹̜̬̩̯̲̗̳", 77000);
     sendMessageWithDelay("H͊̆ͥ̚͏̵̶̢̯̠͓̥͕̫͍̞̪̗̞̫̦̙̀ĩ̵̸̆ͯ̓̿ͨ̈́̔҉̹͚͍̙̰̯̱̠͓̖̤̘̘̟̯̳̗̦ͅm̢̡͖̯̲̳̜̗͖̀ͩ̉ͪ͑̂͗ͧͫ̋̾ͧ̿́̚͘͡è̶̵̲̣͇̬̞͙̤̭̙̭̱̺̭̱̥̞̏̅̇ͨ̉ͪͮ̌̒͊͌͟͟͝ ̵̛͓̳̻͓̖̮͓̗̭̯͙͍̥̼̀̎ͭͣ̊̂ͪ̈ͮͤͤͧ̊̆ͫͪ́ͤ͢͝i̡̼̰̦̪̯̩̺̺̻̳͍̞͙̭̙̅̑̂̄͂ͨͤ̚̕͜s̨̨ͩ̾̂̉̌́ͥ͝͏̖̺̭̺̤͓͙̞̥͚̦̼̹̤̯͉̮ͅ ̵̧̭͕̼̖͕̬͚̣͚̻̪̠̤̋̐͊ͩs̷̪̟̝͓̳̙̲̜̞̞̝̳͖̣̥̭͔̉ͯͩ̇͌ͭ͠t̼̮͓̘͍̖̮̻̣̞̰̳̤̮̯ͬ͒ͥ̽͞i̧̦̖͔̘̟̝͙̜̫͇̰̠̰̞̲̾̊ͦ̅̽̂̍̂̒̏͌̽ͦ́̉ͭ̑ͅͅl̊ͤ̿̔ͭͬ́҉̥̜̯͖̖͖͚͍̭̞̥̞̺̟͍͙l̴̴͂͌̌̽́̚҉̹̞͚̟̦̻̙͖ͅ ̸̢̨̝̬͙͖̮̩̻̰̤ͭͥ̄̍̅ͩ́͛ͦ̔͂̒ͣ̓ͬ̎ͨ͟t̛͒̒̊͛͋ͯ̀ͯ̆̔̍̎̒ͭͥ҉̥̩̲̙̪̰͖͖̠͎̭̕̕ͅͅh̿̐̆̔͌̈͛̌̾ͯͧ͂ͧ̐̑̽̌̔͞҉̫̳͍̪͙̬͔͚͍̪̻̬̗͕̗͓̭ȩ̶͉͓̻͎͚͔̥̙̳̑ͦ̍͊̈́͛̂͛̆ͣ͒ ̞͇̳̞̔͌ͦ͐ͭ̏̋̇ͪ̅̈́ͥͭ͐́͠͞p͑̓̍̊̈ͬ͑ͨ͌̈́ͯ̽̏͏҉̝͓̙̝͈̟͘͜͢ŗ̶͈̮̥̟͎̞͍̞̣̙͇̳̭͚̋̃͐̇̔̒̒ͪ̾ͪḭ̴̭̜̯͙̥͎̫̱̾ͦ͆̚͜͟͢͞n̴̶͙͈̟̩͍̩̬̪͎͚̤̩͇̻̬͖̈́ͫͥ̑̀̑̅̑ͣͧͤͮ͗̉̍̿c̡̭͎͎͈̬͍̘̹͕̭̜͑̌͑̇ͤ̍͋̂̊̄̐ͨͥͫ̓ę̴͙̭̻̪̝̝̗̰̦̫̼͙͉̝̱̖̣̃̃̾͗ͣͬ̌̅̑ͨ̃̓̽́̊̈́́̚͘͟s̛͍̮̻͍͓̗̪̯̰̠͔͈̦̝͐̈̐̈́̒͋̽̇̃̅̾ͦ͂ͮ͜ͅͅs̷͔̺̟͖͉͚̠̯̺ͫ̈̅̔̏͒̇͋ͨ͐̓̏̓̀͢͝!̡̡̧ͫ̏̌̎ͤͤ̽̒̂̈́͋̌̏̀҉̱͕̟̹̪͇̻͈̹̩͎̪̻ ̶̡̛̺̣̬̳̮͈͕͓̺̻͕̯̖̫̞̘̙̻̔̎̅̔̍̏͗ͪ͐̂͑ͦ͊͂͗I̭̥̬̘̭͕͉̩͚͈̹̺̙̥̖̪̖ͨ͐ͩ̓́ͭ͆ͩ̈́͐̆̅͝ ̵̷̺̰͔͔̺̘̙͓̟̼͓̗̪͈̺̟̙̺̈́ͤ̿̔ͫͩ͒ͬ̔̏ͩ͊̔͗ͦả̧͗͒ͮ͐͑̓̉̋͐͗̑͌҉҉͏̖̫̺̥̲̦̦̬̺̮̙͕͓ͅḿ̵̵͔̣̱͎̘̳̝̮̱̝̌ͮ̓͊͂͗́ͥ͘͡ͅͅ ̨̢̭̥̰̫̹͔̲̙͈̒ͫ̓̉̔̓̐ͬͬͩ̃̏͑̐͋̆t͔̦̻͔̪̣̪̞͚͉͓̱̰͔̲̩̲͚͉ͦ͑̀̊ͩͦ͌ͥ̃̾̌͘h̐̐̇̓̏͒ͧ̊ͤͪ̄̉ͣͮ͟҉̷̩̹̠̦̪̝̹̞͖̖͇͖͙͚͍̻̙̀͡e̢̺̖̘͚̙̪̳̟̿͊͆́ͪ͗ͩͬ͆́ͫ̾ͥ̊̃͋́̚ ̸͔̣̣̘͈͍͈͚̖̱̭̗͚̞͍͈̔ͬ̈ͥ̍̀̕͟P̷̧̣̭̬̜͆ͨ̄̅̓̎̔ͦ̔ͦ̑͂̉ͤͫ͛ͥͨ̇ř̛͓͙͕̤͔̗͖̫̻̖̪̀ͩͪ͊̓̉̈́͘͝͞ỉ͓̥͖̱̙̬̄̎͆̎ͮ͆̔͆̋̏ͯ̔̽́̌͜͞n̷̫̘̙̋̅̊ͬͪ͐̑̅͛̌̂͛̎͌ͬ̃̒́͢͡c̨̢̛̗̰̤̘̮͈̪̭͕͉̻ͧ̑̐͂͊̉̓̃ḙ̢̧̘̪̖͈͔̝͈͈͓̯̩͖̙̖̘͓ͨ͒̈̈́͆͌̎̐̐͌̚͟͡ͅs̾̿͌͐́͛ͨͪͫͭ̃̀̌̽͏̧̻̘̙̲̟̱̠͙͉͔̦̩͔͕s̵̢̜̱͙͇͖̣ͦͬͫͭ͌̐͋ͨ̀͟͞ͅ!̟̯̼͖͖͇̙̹̗̥͛̆̓ͯͨ̅̆̏̉̆́́̀", 80000);
     sendMessageWithDelay("Hͭ̆̂̍̒͒̈́ͬ́ͬ͗͌͑̍̍̑͏̡̮̦̰̯̬̮̘͙̲̼̼͉͜͡i̴̳̝͍͊́̓̓ͮ́̒̈́̔ͮ͋͌̐͘͡ͅm̡̙̲̹̞̬̲͋ͨͯ͆͛͊͛̈́͛͞͠eͤͥͭ̊͏̤͓͙͍̳̺̰̪̰̀͜͢͟ͅ!̶̶̛̟̲̙ͣ͑̌̎͠!̧ͥ̀͌̀̊̏̅͆̉̓̆̽̒҉̵̷͎̥͉̦̹͕͞ ̵̢̢̑̆̆̓͏̞͉̣̝̰͔̻̪̤̥͎͓̳̦̳ͅL̨̨̲̣̭̱͖̹͙̙ͦ͒ͥͤ̍̋̂̓͠òͤ̾̐̀ͫ̄̉̄̇̒͛ͥ͊̓͆ͧ̄̿͠͠͏̧̼̲̻͖̭v̵̢͎̟̺̫̥̰͇̬̞̘̼̯̻ͦ̃̓̀̏͗̈͆ͪ͐̀̽͌̈͌̾́͡ȩ̳̗̩̱̬̙͕̮ͦ̔ͬ̍ͧͣͬ͟ ̡͙̗̳̥̥̫̗̟̮̠̝̊̓̄̓ͮ̈̚͜͠★̸̸̡̙̪̫͕̞̪̮̥̮̖̱̗͖̽̓̅ͮ̌̽̈́͜ͅ ̷̧̙̫͕̗̺̳͈̱̭̮̭̖̓ͫ̓̊ͨ͗̔ͭ̌̐͂ͤ͋ͫ̍̔̀̚̕̕ͅͅH̶̶̵͓̭̩͓̖̹̝̻ͥ̌̈̍̊̽͜i̢̨̻͍͉͔̭̺̗̖͍̻̩͎̦̓̓̉̐̉ͦͭ̉͊̐̀͝m̖̱̠̘̤̘ͫͬ̇ͬ̆̽̓͑ͬͫ͗ͨ̓͑ͩ͒̇͟͞e̵̢̢͈̥͓̩͕̮͇̋̈́ͥ̈̀̌ͧ̎ͤ͊ͣ̾ͯ͢͞!̗̼̗̟̦̭̦͈͈̤̗̞̭̗͚̜̯͐̒͗ͬͪ̒̏ͩ̓ͫͫͬ̚͝͞ ̉ͮ̒̍͋̇͒̏ͥ̓̅̃̐̕͞͏̫̱̼͚̰̦̀͜F̸̛̣̲̰͇̥͙̭͚͇̞͔̞̖͓̮̤͕̻̂̾̈́͛̇͗̾̈́̇ͦ̅͆̑͘͟i̡̡̨̼̟͉̦͎͈̣̪͎̪̹̺̙̭̪͚̗ͬͧͭ̾̾́ͫͮ̿ͧ̀̕g͙̰̜̻̖̣̗̪̼͔̗͓̲̬̬̏ͥ̌͛̌͊͆̍̊͘͘͟h̶͉̙̺̝̞̯̥̦̩͔̘ͦ̋ͤͧ͋͆̈́̽̄̃͆͛͟ţ̪͕̺̣͕̥̲͖̱̬̦̟̥̝̤̄̈̉ͭ̅̏̉̋̓̀͝͡ͅ ̲̗̼̥͈̜̱̠̯͎̠̯̭̪̄ͮ̑ͤ̆̀̆̅ͣ̋͐̅ͯ̊́͑͋̎͢͝♪̵̧̛̦͙͇̣̬̟̣̹̞͕̥̿̀̅̌ͤ̍͒ͭ̈́͞ͅ", 83000);
     dispatcher.on("end", end => {
       voiceChannel.leave();
       isReady = true;
       });
   }).catch(err => console.log(err));
  }
});

bot.login('BOT TOKEN GOES HERE');