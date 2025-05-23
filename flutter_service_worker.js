'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "micro/micros.json": "c71f89a62e1a804459dec74d5cf3b3a0",
"micro/storage/sloboda_unity_pick.png": "54492d9c5f3b251796dbe222d613a9b4",
"micro/storage/google_play_stats.png": "cf49f4cb5ddcc98b1ce568725a039825",
"micro/storage/kpi_logo.png": "9604e6fefa6559002b25c1a11da4e51f",
"micro/storage/podcast_4.png": "f349e995157d4731986988e2662e0c6b",
"micro/storage/telegram_bot.jpg": "8af057db85031e73a783c6655343cfdc",
"micro/storage/4.png": "18512aae6093bbbebd28d24f3258da57",
"micro/storage/3.png": "fdb0cf5fccff324d6f291a5b332102d0",
"micro/storage/screen_md.png": "09ef5a04277efd78470ccd75b3fdcf0d",
"version.json": "88032042c819bd8b16c3a76b2bef1b5d",
"index.html": "7e146d0e1d2daf0fad8afe62e27e16d7",
"/": "7e146d0e1d2daf0fad8afe62e27e16d7",
"styles.css": "e3783bb610dd5a676d5f094af0f3dfa0",
"main.dart.js": "3dbe057b38d26ca8e83924f7b18c68de",
"catalog/posts/unity_monobehaviour_events_magic/content.md": "ca0f57413ccd983e3da12399f5a8e1c8",
"catalog/posts/unity_monobehaviour_events_magic/mono_behaviour.png": "74e217c147e6bae5d5dba701800356bd",
"catalog/posts/unity_monobehaviour_events_magic/thumbnail.png": "bad0a540183783a5abe34cd60a0aa950",
"catalog/posts/unity_monobehaviour_events_magic/post.json": "b3f5cff1c54acbeb73a2fb2ed68daabf",
"catalog/posts/games_marketing/content.md": "288d9efd4be7bbe50867bc45e387226d",
"catalog/posts/games_marketing/thumbnail.png": "73d1e6ad5cda036a3afb2b626b9f8ab3",
"catalog/posts/games_marketing/post.json": "b953fbe2022e9546d7b6dea595da404a",
"catalog/posts/personal_huge_milestone/screen1.png": "3dfef2cd1d08c024a29929886bf23c5d",
"catalog/posts/personal_huge_milestone/screen2.png": "3d07c00fff2a74010373f985eef7b440",
"catalog/posts/personal_huge_milestone/content.md": "9f0fb423352015504140bb23ea9d41be",
"catalog/posts/personal_huge_milestone/screen3.png": "2b30e8e604acea3b1d32303ef42858d7",
"catalog/posts/personal_huge_milestone/post.json": "a0ab3a23d5ace5db4afcd3a729daa03f",
"catalog/posts/dash-memo-leak/email.png": "fa6f01f1470a276a2d28b638e179b4ad",
"catalog/posts/dash-memo-leak/code.png": "9d80e41882d513ac27f60e21af3be2ce",
"catalog/posts/dash-memo-leak/content.md": "8596adb5879cdca571d47ce736aefafc",
"catalog/posts/dash-memo-leak/thumbnail.png": "b014c13dca908031c78a206bb49cca7e",
"catalog/posts/dash-memo-leak/pwa.png": "8dc4c08cb0a7fc86044a57feda3fe253",
"catalog/posts/dash-memo-leak/dart_memo_leaker.jpg": "68ac65bc721779b4b65f5bbb4bd7363c",
"catalog/posts/dash-memo-leak/post.json": "9e7966953b0a19d87b9a03e6870429b7",
"catalog/posts/decode-and-encode-json-in-reasonml/content.md": "0b9b8fec00f370392874be90336a245a",
"catalog/posts/decode-and-encode-json-in-reasonml/post.json": "52eca3d60ca6563ed38c00e7f19f0451",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/final_animation.gif": "1778e18bac5637672d2dc4b1ad621bf5",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/content.md": "2a05114d014c6c5a2654e5aa2a5482cc",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_4.png": "a478f4222b7e1882e5369bbc3c1eab96",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_2.png": "b840746eac514f9422234f91ce91fa89",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_3.png": "ac7b17b42aeeda9a08f5648eea5d9a05",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_1.png": "8743a809fd7db715b9ff5d77e64168e0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/thumbnail.png": "cb5ad29d7c9276c73081f456a7e82ef0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/animation_map.gif": "2646e31a6a64a6f70f272cbede1c1da9",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/post.json": "b4dc34776580c286081dd481fdf2168d",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen3.jpeg": "c133b24403a48cd0b98a98b66e581206",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen2.jpeg": "22fcefc00fc6dc80d3ed24d33859bccf",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/content.md": "650be5341af6de8edcbd4b74ee884310",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen5.jpeg": "65b3b96d8b0858d3466a1171e91bad08",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen4.jpeg": "d03166b9bc77b7774113fae79d0d9e38",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen6.jpeg": "fd11a950a5aefb84d9d55369903dbf8c",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen1.jpeg": "17d605fcc79c565dbeb5d5fcf713d7f0",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/post.json": "badfd100cf55d886959e53d2d5b843bc",
"catalog/posts/flutter_in_game_notifications/screen1.png": "df33a4baff0e692b08c4d166a5daa002",
"catalog/posts/flutter_in_game_notifications/content.md": "bc80b2d2186a993bdb65f7c78f1146d7",
"catalog/posts/flutter_in_game_notifications/thumbnail.jpg": "687d618e88b36cfa58f275005a398988",
"catalog/posts/flutter_in_game_notifications/screen2.gif": "54dad6c90d36850288580b737449ab17",
"catalog/posts/flutter_in_game_notifications/post.json": "ade224f254fdfb991fe409f89f2adfc1",
"catalog/posts/ukrtwi_tragedy/content.md": "40fb23e6112a8951269db40b36875179",
"catalog/posts/ukrtwi_tragedy/chumaki.png": "1e92851446c68aecc4608c14836cfc69",
"catalog/posts/ukrtwi_tragedy/thumbnail.png": "a71d22c9fc799b429e642450397ee7dc",
"catalog/posts/ukrtwi_tragedy/tweeter_whore.png": "1c351bf6ed997661b535764eeded4d3a",
"catalog/posts/ukrtwi_tragedy/garbage3.png": "b38d82eec8df172d9ba6acabac28ad3f",
"catalog/posts/ukrtwi_tragedy/garbage2.png": "76ae69d3700df36e4544f8c4bc55f280",
"catalog/posts/ukrtwi_tragedy/post.json": "7ca35902f0e4f53caea029f6766958e4",
"catalog/posts/ukrtwi_tragedy/garbage1.png": "d3110ddc82b2763df2458e2da7877d7c",
"catalog/posts/unity_replace_coroutine_with_tap/in_game_2.png": "36aff74eb04cce76530d161650f26c75",
"catalog/posts/unity_replace_coroutine_with_tap/screen_coroutine_time.png": "dddbcdc4c2b9192bf64595303027c22e",
"catalog/posts/unity_replace_coroutine_with_tap/content.md": "b520d92f0a3a2e38a8239276dcdb3cdc",
"catalog/posts/unity_replace_coroutine_with_tap/thumbnail.png": "770b7e96da41dda5cd8c6fc3ca19cf29",
"catalog/posts/unity_replace_coroutine_with_tap/post.json": "0bfa1f6e1e7e0b73cc4f9c23397297ab",
"catalog/posts/unity_replace_coroutine_with_tap/profile_after.png": "b30f78e1e601adeffcd099c45f5151bc",
"catalog/posts/unity_replace_coroutine_with_tap/progress_async2.gif": "ed834359a20b1c659db42bac5d0a38cb",
"catalog/posts/road-to-flutter-and-dart/content.md": "bbdfb42854b1dc2239b962e4ffdeefe0",
"catalog/posts/road-to-flutter-and-dart/screen1.gif": "a9115d44c436fafad1775db5513453be",
"catalog/posts/road-to-flutter-and-dart/thumbnail.png": "e74815c80ea0fcabe5c0ac04dc355ab0",
"catalog/posts/road-to-flutter-and-dart/post.json": "ee5b2cbb0b00b08d26da9373d4cd20b3",
"catalog/posts/flutter_add_sound_to_game/content.md": "72a6a4acec5cbdf31a00575a819753c5",
"catalog/posts/flutter_add_sound_to_game/post.json": "e62ea150874e6f1dffd0cc3e7be3fcad",
"catalog/posts/dart_process_exceptions_in_isolates/content.md": "c3170843f28fe4ac205ffa90e1c0509b",
"catalog/posts/dart_process_exceptions_in_isolates/thumbnail.png": "60a637909f0e86f248187bdb8f13bc71",
"catalog/posts/dart_process_exceptions_in_isolates/post.json": "18680e079b47e65661ec248939e4bc96",
"catalog/posts/flutter_implement_and_design_researches_in_game/screen1.png": "c2e12589c71d82542783d66a3f8f8e92",
"catalog/posts/flutter_implement_and_design_researches_in_game/content.md": "8e4d8cd851d6525adbbff08c6c0ca1b7",
"catalog/posts/flutter_implement_and_design_researches_in_game/thumbnail.png": "0b447734477d1e14f0f24bc04cf8325f",
"catalog/posts/flutter_implement_and_design_researches_in_game/post.json": "b95a693b5da6bdde0194b1cb41d41897",
"catalog/posts/flutter_animate_interactive_viewer_as_map/final_animation.gif": "a30aebb783b0840eb0d2b13101a18aba",
"catalog/posts/flutter_animate_interactive_viewer_as_map/content.md": "cbdbd2478421d37df3864ddb2a104d0c",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_2.png": "39440e59b1fe9b58efae9765903fd0ec",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_3.png": "78886e8f45f74352d70136b880031e65",
"catalog/posts/flutter_animate_interactive_viewer_as_map/thumbnail.png": "ab9abe64f88235603d4716297f5236bf",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_1.jpeg": "45d873fd89c1a9f8f1028c19ec3610f2",
"catalog/posts/flutter_animate_interactive_viewer_as_map/animation.gif": "a8e228974362c68488630ea97ab4aae7",
"catalog/posts/flutter_animate_interactive_viewer_as_map/post.json": "434046414ea2f11b294fc5b62c202d16",
"catalog/posts/sloboda_versiya_285_update/screen7.png": "19b304acfa7ea0caa4fbec7e2f607133",
"catalog/posts/sloboda_versiya_285_update/screen6.png": "630c2337a30fb1051d0261a301f9d445",
"catalog/posts/sloboda_versiya_285_update/screen4.png": "c5b1988a5a34103fedb3460cd105d4fc",
"catalog/posts/sloboda_versiya_285_update/screen5.png": "17af09278beec49949509a0b28d03f67",
"catalog/posts/sloboda_versiya_285_update/screen1.png": "e2f13e1912190162bf87cd6e34bdb8ae",
"catalog/posts/sloboda_versiya_285_update/screen2.png": "9ebc2f13b4b7a12d73181e6fd2e1cde6",
"catalog/posts/sloboda_versiya_285_update/content.md": "294ba99f5aff3ff09a410467c956e04a",
"catalog/posts/sloboda_versiya_285_update/screen3.png": "9628c49fc66654f392d237198e326927",
"catalog/posts/sloboda_versiya_285_update/screen10.png": "e2c76056d3ea8696aa11d0c6fcf471b4",
"catalog/posts/sloboda_versiya_285_update/thumbnail.png": "da593a6eb01a758a59b21dc9086ae93d",
"catalog/posts/sloboda_versiya_285_update/screen8.png": "4e40ef1d613fc5ca37158c8d881804f0",
"catalog/posts/sloboda_versiya_285_update/screen9.png": "d9ac954b3adf35a267e049200e75fcd0",
"catalog/posts/sloboda_versiya_285_update/post.json": "4a8a30abcd499dbca6741f828748185f",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen1.png": "ed2538e99d6c96384cee9ceb0dc243da",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen2.png": "75df0a0c3726653b2e2818581f817b19",
"catalog/posts/locadeserta_sloboda_whatsnew_305/content.md": "de936930ae6e14c67e0d125971c9895b",
"catalog/posts/locadeserta_sloboda_whatsnew_305/thumbnail.png": "1bad7ac6fbd2842aab098063154e2dae",
"catalog/posts/locadeserta_sloboda_whatsnew_305/post.json": "d472e245bd8da3490041276a4ee3930e",
"catalog/posts/flutter_fog_of_war/screen7.png": "f114308871da4efb093b1a07f76c097c",
"catalog/posts/flutter_fog_of_war/screen3.jpeg": "d26ed3a0284fb3b67bc9f95d8286f22a",
"catalog/posts/flutter_fog_of_war/screen2.jpeg": "300fb87f1f93b9e7e50b0bb0ae6881d0",
"catalog/posts/flutter_fog_of_war/content.md": "b494375ace421448f573c1b5dabf580d",
"catalog/posts/flutter_fog_of_war/screen5.jpeg": "3aedc6917d04923bb796f4c445a5cbd8",
"catalog/posts/flutter_fog_of_war/screen.jpeg": "c185d25e2a0df0dd93df1b8146950f7d",
"catalog/posts/flutter_fog_of_war/screen4.jpeg": "d3959128d359c9c0878af0a8d8976f0a",
"catalog/posts/flutter_fog_of_war/screen10.png": "cb1a188698a47ec35cac7c958684feb9",
"catalog/posts/flutter_fog_of_war/thumbnail.jpg": "496a250fcde2ab543795bba2243186f9",
"catalog/posts/flutter_fog_of_war/screen6.jpeg": "6d3598fb40e873079f6a7b90e7ee4629",
"catalog/posts/flutter_fog_of_war/screen1.jpeg": "1337e523b397b4a773716823555a6e64",
"catalog/posts/flutter_fog_of_war/screen8.png": "a3b901a418a9bf94bb715f0cac0c9183",
"catalog/posts/flutter_fog_of_war/post.json": "a59174a238edb1735533a34ab89027c7",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen11.jpeg": "f5534db9ecc9677c88f6b7dc907f5097",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen3.jpeg": "0c5e6877f5e17a49e3650a02af2177f5",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen2.jpeg": "ea84da6b001ae1f5523f272f43b9cd26",
"catalog/posts/sloboda_versiya-290-doslidzhennya/content.md": "8e517daf54fc44d45802a3ee199a589b",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen10.jpeg": "bd366279c182c078221c8a9dea8cb7ce",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen5.jpeg": "dc2efc4715b4188e4fc16d282e68cc9c",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen9.jpeg": "28001381715d6567450891027b080e65",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen8.jpeg": "ace192eb20a8946858d8bf092e70b235",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen4.jpeg": "071d320c62ad12f0063489915299775d",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen7.jpeg": "78efdae197d7f0bf5bd3e68fae463494",
"catalog/posts/sloboda_versiya-290-doslidzhennya/thumbnail.png": "885842e81ddea902ad2ec7f7f6dd88d2",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen6.jpeg": "f4b9012bba13de5c1e31ba24403dd5ae",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen1.jpeg": "741cef5f8d7cb0c4e0f8a9c5a6cf0e96",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen0.jpeg": "b00d8daabb3b2a47328fbbf2ee49c1ad",
"catalog/posts/sloboda_versiya-290-doslidzhennya/post.json": "69aeec2fe1e86423fcae2ba08df612dd",
"catalog/posts/flutter_generation_and_render_2d_map_part2/screen1.png": "cc08110d9debd268ffa0348a628fd5ab",
"catalog/posts/flutter_generation_and_render_2d_map_part2/screen2.png": "0f11398017e21d1d24568f41ef677edf",
"catalog/posts/flutter_generation_and_render_2d_map_part2/content.md": "4e122f6cf3d351ce6fcdb2512e9b23a0",
"catalog/posts/flutter_generation_and_render_2d_map_part2/thumbnail.png": "bc342a87886ad79551235d2052a65a0a",
"catalog/posts/flutter_generation_and_render_2d_map_part2/post.json": "c2e488b85a32913bc58e5a2084bac7f1",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen5.png": "8d14f098c36dd4ec97facba99ee4c8f9",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen1.png": "d34249fa0819f041e645b5045415ad74",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen2.png": "2f74c496aaa3b4d30c908c74ccff9097",
"catalog/posts/flutter_design-and-implementation-of-event-system/content.md": "7e324ab0449aaa623aafc753e97720c2",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen3.png": "6eb28606cbdf23f5ec1199538069adc1",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen4.gif": "8afafcc53427c884bb8f9339a0dce098",
"catalog/posts/flutter_design-and-implementation-of-event-system/thumbnail.png": "7a8870c67a2cf44ab6b0b48eab0eab2c",
"catalog/posts/flutter_design-and-implementation-of-event-system/post.json": "b39f78d6843dc0d7be3c95d0e21d1b88",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/content.md": "83019f42f1937f371187bddb90bb6791",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen1.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen2.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen3.gif": "12a18839eefe2a6ff2e61fadc31378d4",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/post.json": "11911313f536087a2861bda46e34312f",
"catalog/posts/flutter_generation_and_render_2d_map_part4/content.md": "166dc501b10e2b9b7228e96727f34155",
"catalog/posts/flutter_generation_and_render_2d_map_part4/thumbnail.png": "614be6d1ca15722c15b48c109e785269",
"catalog/posts/flutter_generation_and_render_2d_map_part4/post.json": "09497dee6b31bab88a9d34edf722a318",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen7.png": "5b398c7e9239201536739e2652cdb209",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen6.png": "e38a199a33d32aed235a629060a1cac3",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen4.png": "b2827669d1d3dc8e80e221807e236cda",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen5.png": "a72f09ba6b9d67e78e7ef37ffdac98b9",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen1.png": "0a4888460d640de93a200df2a05b744a",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen2.png": "51f1543fd6427d251acf3fca517ac342",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/content.md": "fa6f6db436601d4151f6fe3edf0b0f02",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen3.png": "54df949f941c451fdd8ef0007fba132a",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen18.png": "c6d02fa1abf6d38d2736112d7dbb37d1",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen19.png": "fb24234e8eaa8f8bfc81af1c41e3ee59",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen12.png": "0cd7f7b7843d150488a9efa1bbd85f2e",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen13.png": "e35a39c8be18e5dc425020c66e9fea15",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen11.png": "efa3cb808f0de626424ed2b85f3047d3",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen10.png": "e11cf9cdb8f2871db0ebe024b00fc640",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen14.png": "e874c63d441f5aeff381aa9896416b2f",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen15.png": "2622eee4ac35f13ec73a510aa5dfc25c",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen17.png": "b884ab36a4a7f82a292ad7f65293bc29",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/thumbnail.jpg": "88064004a531f23339afbe6c23b56bf1",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen16.png": "6b0881bf5b4364d1436ec1ce5fe725a7",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen8.png": "a4e346c3a493840747896ec56115a4fb",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen20.gif": "a6c630138cfefa29e3470c8e85d91f58",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen9.png": "bfaae227428d373233d58dd70f1905f7",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/post.json": "585ff4843c1cb62f9fbd232c0ccfcf6f",
"catalog/posts/flutter_generation_and_render_2d_map_part3/screen1.png": "717028f7d99d6bedb1dc3a862abdb899",
"catalog/posts/flutter_generation_and_render_2d_map_part3/screen2.png": "6d7b5eba7334139153d9c2114cefc7da",
"catalog/posts/flutter_generation_and_render_2d_map_part3/content.md": "8d817c1d925b4057d27f61a43bdede99",
"catalog/posts/flutter_generation_and_render_2d_map_part3/thumbnail.png": "a606ef69ec92ef72d9e7a686c009ad0f",
"catalog/posts/flutter_generation_and_render_2d_map_part3/post.json": "0532156541b71e60902ab37a81f217ac",
"catalog/posts/review_dou_1/content.md": "eee45ef5faf9a1c51760c5a1fd486576",
"catalog/posts/review_dou_1/dou3.png": "10d8384596cc961db2cd881361e5d236",
"catalog/posts/review_dou_1/dou2.png": "b8ec15271f9e12aeb65448f321a42581",
"catalog/posts/review_dou_1/dou0.png": "2701e87f8f52e0970c80f4337f345ed3",
"catalog/posts/review_dou_1/dou1.png": "555da43888deff331419af04b208c26f",
"catalog/posts/review_dou_1/thumbnail.png": "2701e87f8f52e0970c80f4337f345ed3",
"catalog/posts/review_dou_1/post.json": "e2314d38467c9a531dd33cdb979f58b5",
"catalog/posts/sloboda2_whats_new_sep/treasure.png": "aef5b0fc61276b7e9bf5fc2da7d23e57",
"catalog/posts/sloboda2_whats_new_sep/content.md": "10f1d2c6b3a7ba9d559ce4549723b954",
"catalog/posts/sloboda2_whats_new_sep/kobzar.png": "38175f0f472ee38f6b9137e68b1c112f",
"catalog/posts/sloboda2_whats_new_sep/camp.png": "e4cc37a2979210b54c22e4314f0d9534",
"catalog/posts/sloboda2_whats_new_sep/advices.jpg": "a1191082c3e5b808a5be43a41f6ddc8f",
"catalog/posts/sloboda2_whats_new_sep/new_church.png": "3693116ee1531fdaceeefb2605bc1159",
"catalog/posts/sloboda2_whats_new_sep/thumbnail.png": "69db217e7d2f75f3202bfd67f82ea605",
"catalog/posts/sloboda2_whats_new_sep/new_axe.png": "2aafeb22f3e98cfb1b568450583ea36d",
"catalog/posts/sloboda2_whats_new_sep/iron_mine.png": "80e2ea1f520ad7b4096558e5b16d45e3",
"catalog/posts/sloboda2_whats_new_sep/post.json": "c353da4c2bb8d975d6b5a19392734a85",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen5.png": "8d14f098c36dd4ec97facba99ee4c8f9",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen1.png": "a4c61db0b190d6d3c3c97b708e37a4c6",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen2.png": "9288a69e3c24ae1253adc19e4d814ed4",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/content.md": "ee783542235a49a35aa06ee3111c2cb5",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen3.png": "a06eac4f18b39098d91469040537f195",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen4.gif": "cdd3b32cf0f9435695255371b88bdbc9",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/thumbnail.png": "99b66ca67eeb371ab3871ac103e04965",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/post.json": "7902f051054e5e1527c56a291c881efe",
"catalog/posts/reasonml-create-bindings-for-npm-package/screen2.png": "c8369b1fd4a6345de16af05fbf0de78e",
"catalog/posts/reasonml-create-bindings-for-npm-package/content.md": "fca3e5d0cecf72ebbebb8e365e0c9c90",
"catalog/posts/reasonml-create-bindings-for-npm-package/thumbnail.jpg": "794cae66453388dcad1bc4548779e48b",
"catalog/posts/reasonml-create-bindings-for-npm-package/post.json": "d393b22f09aea1d69a3c2c24aba6beea",
"catalog/posts/independent_states/content.md": "fcbed855db21f152bf2cf5b6472158db",
"catalog/posts/independent_states/thumbnail.jpg": "42cf84ec0a83b692edda11c06abf8ce7",
"catalog/posts/independent_states/post.json": "c877b76512eb6fe5bf8a351b3cef6f1a",
"catalog/posts/sloboda_3_update/screen7.png": "8a799cd13fe998c3add119207ecae996",
"catalog/posts/sloboda_3_update/screen6.png": "3ca8384a46b5b9ba8fae8268a7a2c93f",
"catalog/posts/sloboda_3_update/screen4.png": "75b2187c09475b6685085157d8a70f41",
"catalog/posts/sloboda_3_update/screen5.png": "04c0187dc1f8c887b1e3f9aef06d502d",
"catalog/posts/sloboda_3_update/screen1.png": "780845dc9224e704c983d10fd53e3065",
"catalog/posts/sloboda_3_update/screen2.png": "e79758d520524ccf2d7b63fe79d55a3f",
"catalog/posts/sloboda_3_update/content.md": "21685c349381ba767aa5467e369b3518",
"catalog/posts/sloboda_3_update/screen3.png": "5aff620ea30b17d4701df953237e01fd",
"catalog/posts/sloboda_3_update/screen12.png": "fe6cbbb45cbdfd39305871620e830dc9",
"catalog/posts/sloboda_3_update/screen12.jpg": "af2f9ed5b327b211ad78012e17f84771",
"catalog/posts/sloboda_3_update/screen11.png": "461df98ec0d7510facc5099b02fdd7b7",
"catalog/posts/sloboda_3_update/screen10.png": "ba12eb93c7fe6b6d19aaceab0f08e8d4",
"catalog/posts/sloboda_3_update/thumbnail.png": "cf615ae4175cef53a5221e395624bce8",
"catalog/posts/sloboda_3_update/screen8.png": "ab5428f191ffd7e4e7a5034b00fa816b",
"catalog/posts/sloboda_3_update/screen9.png": "59faa5720bcfc606339aac2e580254fe",
"catalog/posts/sloboda_3_update/post.json": "2ff7275b3897589196b9d1ed7353bf97",
"catalog/posts/retro_of_my_3_years/content.md": "733e67bef962634d61ef49f6e7d456d3",
"catalog/posts/retro_of_my_3_years/thumbnail.png": "fe27fe5346c54e70737433f4977f7c55",
"catalog/posts/retro_of_my_3_years/post.json": "b0b681074b13efbb363486d8d1aca257",
"catalog/posts/dead_simple_example_using_keys/content.md": "238fac9e69899a1e8fc7f022b875a405",
"catalog/posts/dead_simple_example_using_keys/thumbnail.png": "215778a341f0bfa3ee73834b576c3aee",
"catalog/posts/dead_simple_example_using_keys/animation.gif": "06c851da8f467cd18f7f9322feda6dc8",
"catalog/posts/dead_simple_example_using_keys/post.json": "ff9f7003d53ac67fa22d7f56839affc2",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/screen1.png": "ef8cf4a246e4a93dfa199fa9dd9ee82b",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/content.md": "947dbe8d6cc66d683844f71cba2871c8",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/screen2.gif": "983e329292d0859ca1a93252f85c9e5b",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/post.json": "d8e8cf2754a4ad7aad239813e06efca4",
"catalog/posts/flutter_web_showcase_1/sander.png": "bbbb4d3af418d818a85a5d8b8d3e3f86",
"catalog/posts/flutter_web_showcase_1/elias.png": "de91d993eee259d163a73f78f220d4ff",
"catalog/posts/flutter_web_showcase_1/kumar.png": "ade8daa0ec1d6adeb2a28e76e899c6f8",
"catalog/posts/flutter_web_showcase_1/content.md": "58c6aece009ac9ef694cb7dc1402f1af",
"catalog/posts/flutter_web_showcase_1/chumaki.jpg": "6537c194714d93bea0dda3fe24ea96d8",
"catalog/posts/flutter_web_showcase_1/hex.jpg": "7aac0423f4b928fe92b35d18d380be36",
"catalog/posts/flutter_web_showcase_1/alberto.png": "9439550a39b39d741330e2f52dcb75ad",
"catalog/posts/flutter_web_showcase_1/thumbnail.png": "66143777b8f6abc0f258741988708245",
"catalog/posts/flutter_web_showcase_1/sloboda.jpg": "c74b00943ab400617d2c6e1ad66534f5",
"catalog/posts/flutter_web_showcase_1/dmytrogladkyi.jpg": "4533781df02da9fa894b54e98654a0be",
"catalog/posts/flutter_web_showcase_1/abhilash.png": "e82781a8b03107248d31f0b537e28443",
"catalog/posts/flutter_web_showcase_1/mike.png": "189bb24e41c7f32a175354c7306b62b9",
"catalog/posts/flutter_web_showcase_1/post.json": "0e09feb5a147c5b2ccd40a681c4bad26",
"catalog/posts/mezha-media-interview/quest_giver.png": "c0995ec332ae056a42d707bc63e4d7d0",
"catalog/posts/mezha-media-interview/loading-tip.png": "43b797dded9926d8d00a6ca8dca6b81e",
"catalog/posts/mezha-media-interview/content.md": "d1778cc44c7f3431ab138e429766bdee",
"catalog/posts/mezha-media-interview/corsairs.png": "c5508af499bcaf80f941a2208262e642",
"catalog/posts/mezha-media-interview/panoramic_view_2.png": "633a2015e45ba7d2f922cd789eca1965",
"catalog/posts/mezha-media-interview/main_camp.png": "ed0b58828569f298303c89b984cabf7e",
"catalog/posts/mezha-media-interview/tower.png": "d886296812b89b9ac84117e983462205",
"catalog/posts/mezha-media-interview/thumbnail.png": "41095aa0a4e9c5d9b8314f459907d0ef",
"catalog/posts/mezha-media-interview/helpers.png": "5cfdfd3949cdd46dccf755063483f198",
"catalog/posts/mezha-media-interview/post.json": "d0ea197533ce93eb8081dd3b2e5d425c",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/content.md": "5a4471ca8c12dc03eca017d33e99d17d",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/thumbnail.jpg": "71bb942bf7200539f98ff64b429ee00a",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/post.json": "df6e2fcb29d23d901440444039bc0e8b",
"catalog/posts/aborigeni/content.md": "d0d142b1f21a337833c454722bf39b05",
"catalog/posts/aborigeni/thumbnail.jpg": "2073a66171a9e2c392f4b35d243a9ff3",
"catalog/posts/aborigeni/post.json": "99f1dc44871ab7768e6ecefe10573e87",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/content.md": "5995df1a1b8912a9d173a4cebc4cbda4",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen4.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen5.gif": "12a18839eefe2a6ff2e61fadc31378d4",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen1.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen2.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen3.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/post.json": "f7392e65dbf27bf7f51df4d1baf55f7a",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/content.md": "a0ffca3e3b4615810005de32b430c0f8",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/screen1.gif": "0276d3b0139f0f3c1e0af2ded776f352",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/screen2.gif": "3cc37ad3e839d4c74c215a4365f1f1f7",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/post.json": "f9ec3040a2110fc79f42ea9f62da4659",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/content.md": "e332adf60d7b8baeb80694ba25541b35",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/thumbnail.jpg": "156ea9ca120bc33d1236d86eb6ba7911",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/screen2.gif": "03fa670590e9b3ae48e2608123594a9c",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/screen1.jpeg": "a0de3e65de0d2721d409a62c573a2856",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/post.json": "b113f67b947cfef5d914375773d1b8fa",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen7.png": "caba301c139857bdb9b47a35944f3fc5",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen6.png": "7a8089892179f0799ff39a09eb26c04b",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen4.png": "c4c26b6c18a70eb36bfa9eca520f9afb",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen5.png": "cac5f0bd15238b33a35a2e560d4b31a3",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen1.png": "f97c40c84999c83dfc8f4e526598c4ab",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen2.png": "c1a095435adda4d29b2c0dae9a84e7d3",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/content.md": "0dcbcbbe6dc66e9acc273881066755b1",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen3.png": "33d7ef589c016f49ab00e49460eb4a2c",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/thumbnail.png": "0907072763c93cc7bce24749899268f4",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen8.png": "2420a4c5e83a31849fe36f42e46c94b8",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen9.png": "0ac44e09d9cf02ea1dde9ff32391f671",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/post.json": "b8f8dfd6cea030108a93c4a408f86d92",
"catalog/posts/finishing_sloboda_2/stats_ua.png": "27c17c58bdd703850c091f60a5d35c2d",
"catalog/posts/finishing_sloboda_2/camp_ua.png": "75e4ac86cf7e721d002ddfbc301846dd",
"catalog/posts/finishing_sloboda_2/content.md": "e7f5500dcabe62b5f12a53ff898a3304",
"catalog/posts/finishing_sloboda_2/corsairs.png": "c5508af499bcaf80f941a2208262e642",
"catalog/posts/finishing_sloboda_2/panoramic_view_2.png": "633a2015e45ba7d2f922cd789eca1965",
"catalog/posts/finishing_sloboda_2/sich_view_0.jpg": "466ab88995204a5ed90560b1b643c5a8",
"catalog/posts/finishing_sloboda_2/thumbnail.png": "4f0067e69edfa066151b2a7edab887de",
"catalog/posts/finishing_sloboda_2/ortho_camp.png": "55fe263486791815d242dd496f0b780a",
"catalog/posts/finishing_sloboda_2/post.json": "7ea18be04b9dfeb0a02fa60d2e5083de",
"catalog/posts/dart_how_to_test_async_methods/content.md": "7a6ef497b572217579db1651fda85fb5",
"catalog/posts/dart_how_to_test_async_methods/thumbnail.png": "fb4ccadad23adbb5bfa7212efa74cf35",
"catalog/posts/dart_how_to_test_async_methods/post.json": "e4a3ab57ac8bfc0292383233f6598dc8",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/content.md": "d681193c64602c8da419e3c8261abf87",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/screen1.gif": "563fa6417eb19149bd3ba08494ea5ee9",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/screen2.gif": "7ef6974ac4437d65975ea170ce0a9e9d",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/post.json": "b1a4697d5845f9e33e3672b60d030415",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen1.png": "a921c740edae028c89b295e038813952",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen2.png": "61e716cce1bd6fee4d3a2f16e86b39b6",
"catalog/posts/flutter_generation_and_render_2d_map_part1/content.md": "ffd2fd4a4ef9a6862a050737a368b544",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen3.png": "a921c740edae028c89b295e038813952",
"catalog/posts/flutter_generation_and_render_2d_map_part1/thumbnail.png": "cabee2c65cf35e5043d7df5de6434922",
"catalog/posts/flutter_generation_and_render_2d_map_part1/post.json": "696624050afef310f8497b41008aa6b2",
"catalog/posts/gothic_remake_sich/content.md": "74364c80c5423da962adfd7c07838525",
"catalog/posts/gothic_remake_sich/general.jpeg": "3b0a51bee3753a4eeb4d4110009ece38",
"catalog/posts/gothic_remake_sich/first_quest.jpg": "dabd12e6ba52a2e9a06f25658e92bc9e",
"catalog/posts/gothic_remake_sich/thumbnail.jpeg": "b2c2f0b3473ba17f31a6521829fb4991",
"catalog/posts/gothic_remake_sich/post.json": "bce6501fd7f9ea22e3253e8394961865",
"catalog/posts/performance_improvements_in_mobile_unity/blue_spikes.jpg": "422446d5dd2b5a50ad2b36387269d188",
"catalog/posts/performance_improvements_in_mobile_unity/nokia_61_object_instantiate_spikes.png": "4f3c0332ce652115b338bf5cc355f453",
"catalog/posts/performance_improvements_in_mobile_unity/note_8_no_terrain_layers_60fps.png": "6728832ff05369b756540d18cf13942b",
"catalog/posts/performance_improvements_in_mobile_unity/content.md": "328087b0cb5fe79f350bf6be887b72dd",
"catalog/posts/performance_improvements_in_mobile_unity/note_8_4_terrain_layers_60fps.png": "5144b8a70f0868c0f7fa9b5bc9f851dc",
"catalog/posts/performance_improvements_in_mobile_unity/ingame.png": "3bad5a057a083af7029830d5ce2e3a10",
"catalog/posts/performance_improvements_in_mobile_unity/nokia_61_without_datetimenow.png": "db04c4ea801666c10315a4a0b8fac264",
"catalog/posts/performance_improvements_in_mobile_unity/terrain_layers.png": "2aaed2a1aa193dfd9763dbc964023296",
"catalog/posts/performance_improvements_in_mobile_unity/note_8_fix_without_fix.png": "a9635906ef1b41af870badf5af06d0ae",
"catalog/posts/performance_improvements_in_mobile_unity/nokia_61_object_pooling_all_objects_cached.png": "0573fe6fca4d99debf1e70cc9662e1ea",
"catalog/posts/performance_improvements_in_mobile_unity/sich_screen.png": "605e985ef31a0156966ab90da972e698",
"catalog/posts/performance_improvements_in_mobile_unity/post.json": "ad8d7802d7a6c59c9206e4ddee2b7f1d",
"catalog/posts/why_education/screen1.png": "abb457e2a7ed6056b471bd0fb47e694a",
"catalog/posts/why_education/content.md": "f56b33703ae87bc7f82d77bd4704b4ab",
"catalog/posts/why_education/kpi_logo.png": "9604e6fefa6559002b25c1a11da4e51f",
"catalog/posts/why_education/post.json": "24fd4e07a0e5c78f08f8b9ea25aaf63f",
"catalog/posts/review_dou_2/img_1.png": "7f673c0be72bd89987c690687d65d8fa",
"catalog/posts/review_dou_2/screen6.png": "dd25764d4f18cf3026465ba5592f9dee",
"catalog/posts/review_dou_2/screen4.png": "0de56f75054503ff794d2018cd35e026",
"catalog/posts/review_dou_2/screen5.png": "e2f310197d88b69b48b7868e1feb8030",
"catalog/posts/review_dou_2/screen1.png": "9225faca36e628fb3f384fe1d276cd39",
"catalog/posts/review_dou_2/screen2.png": "052c8389d1e1efe39979c47dc2825df3",
"catalog/posts/review_dou_2/content.md": "65894447ef2e48bba22e0764c4ff1217",
"catalog/posts/review_dou_2/screen3.png": "98e7460f0dcbf66a1e3690b4342b7fe3",
"catalog/posts/review_dou_2/thumbnail.png": "8e3aecf45202bf05b53b80c6607a97f2",
"catalog/posts/review_dou_2/post.json": "812233d27b9d49d88f984ba499957422",
"catalog/catalog.json": "77c384b48da7b1943a9d16ef32623f0e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"profile/experience/experiences.json": "5e4975f9a9bfb9fda897d18510f8229c",
"profile/green_round_avatar.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"profile/profile.json": "093eed74acb66f55254c475ccef24520",
"icons/favicon-16x16.png": "e227003dbc7fe1092cb6258d650c6b0a",
"icons/favicon.ico": "44ac55191a7281a9347d3e80f5aed6a4",
"icons/apple-icon.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/android-icon-192x192.png": "c02917dffc36a1ba13fd9af7372cdb2d",
"icons/apple-icon-precomposed.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon-114x114.png": "08d2ae07a3d35a8cda5eb9b61691174e",
"icons/ms-icon-310x310.png": "da4a70e84c0559eef338fbc83be96df9",
"icons/ms-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-57x57.png": "4260aa0624d2bbc17c6a6a670023f65e",
"icons/apple-icon-152x152.png": "3903f894e655aae98aa5336ee8c486fe",
"icons/ms-icon-150x150.png": "150d8334e5125ecf9bc9bb41dc27e5bf",
"icons/android-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/android-icon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/android-icon-36x36.png": "74eef8a5c5d7a8ce2ca1af41d28c8a17",
"icons/apple-icon-180x180.png": "87f1ff9a7c3f030e8905e5c0f0e7ac85",
"icons/favicon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/android-icon-48x48.png": "1fd1fd3ccba4b2ddd433a9e8db488e6a",
"icons/apple-icon-76x76.png": "18e21d77c753495d9246eb24595bc129",
"icons/apple-icon-60x60.png": "10259acbd8ac1092f921f599c22f3dc6",
"icons/avatar_green.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"icons/android-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/apple-icon-120x120.png": "fba30b4db378bb09dd236100df45fc47",
"icons/favicon-32x32.png": "64658662466bb987f195f4f14a9ee51a",
"icons/ms-icon-70x70.png": "bb48fa09a12f6c49c38a8cda9503a481",
"manifest.json": "cd36c0a7efb2c54c7033ef449a703c38",
"main.dart.js_1.part.js": "d75127d8726c2c06325b81326bf8ad81",
"assets/AssetManifest.json": "39603be222a03e070b2ef6db299dd1c9",
"assets/NOTICES": "70386f3cf1f0684d33929e6290c255bf",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "0ee1458ae50d25f11d76887bbb034961",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/profile/green_round_avatar.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"assets/google_fonts/Merriweather-Bold.ttf": "9ccb885c9cf8e503d557f15e0b2cbf24",
"assets/google_fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/google_fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0",
"assets/google_fonts/Merriweather-BoldItalic.ttf": "63e1f06ea6bf31c8f3143c143e7e6c2a",
"assets/google_fonts/Merriweather-BlackItalic.ttf": "2282b0c9c8dea275e854273c968b20d7",
"assets/google_fonts/OFL.txt": "d862a53cf5c87918824f1a5be5dd7cb9",
"assets/google_fonts/Merriweather-Italic.ttf": "498bf4ee4ac9fab22ad9f814839173b2",
"assets/google_fonts/Merriweather-Black.ttf": "bfc959a1d3a785caff07d85f82f3e513",
"assets/google_fonts/Merriweather-LightItalic.ttf": "4deed44b6913721447f062c9fa8caac6",
"main.dart.js_2.part.js": "55fc6e19de357e698391a178293c9200",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
