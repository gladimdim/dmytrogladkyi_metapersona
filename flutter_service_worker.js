'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39603be222a03e070b2ef6db299dd1c9",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/profile/green_round_avatar.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/Merriweather-Black.ttf": "bfc959a1d3a785caff07d85f82f3e513",
"assets/google_fonts/Merriweather-BlackItalic.ttf": "2282b0c9c8dea275e854273c968b20d7",
"assets/google_fonts/Merriweather-Bold.ttf": "9ccb885c9cf8e503d557f15e0b2cbf24",
"assets/google_fonts/Merriweather-BoldItalic.ttf": "63e1f06ea6bf31c8f3143c143e7e6c2a",
"assets/google_fonts/Merriweather-Italic.ttf": "498bf4ee4ac9fab22ad9f814839173b2",
"assets/google_fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0",
"assets/google_fonts/Merriweather-LightItalic.ttf": "4deed44b6913721447f062c9fa8caac6",
"assets/google_fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/google_fonts/OFL.txt": "8dee0af9dd63fb6c75c9b85d35eddbe8",
"assets/NOTICES": "361e8a0d4d02504d34117df8cd20ab39",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"catalog/catalog.json": "2bf97a2bb6177bd3f135b50231287995",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/content.md": "9be91cfd247b0bfc3e0c778b4d01a563",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/post.json": "8fe5f36d64dbad00fcb9c33b422c93b6",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/screen1.png": "ef8cf4a246e4a93dfa199fa9dd9ee82b",
"catalog/posts/cracking-the-coding-interview-in-flutter-design-the-call-center/screen2.gif": "983e329292d0859ca1a93252f85c9e5b",
"catalog/posts/dart_how_to_test_async_methods/content.md": "674ccffc9b6fe0bc2aa5d1e7fcc3b418",
"catalog/posts/dart_how_to_test_async_methods/post.json": "eb92f433bd25eaf8b30d3dcfd41927c3",
"catalog/posts/dart_how_to_test_async_methods/thumbnail.png": "fb4ccadad23adbb5bfa7212efa74cf35",
"catalog/posts/dead_simple_example_using_keys/animation.gif": "06c851da8f467cd18f7f9322feda6dc8",
"catalog/posts/dead_simple_example_using_keys/content.md": "8944a8e5a91729476e13e2446532e51f",
"catalog/posts/dead_simple_example_using_keys/post.json": "5d692c5c01163781ac7231c00f783f26",
"catalog/posts/dead_simple_example_using_keys/thumbnail.png": "215778a341f0bfa3ee73834b576c3aee",
"catalog/posts/decode-and-encode-json-in-reasonml/content.md": "2cee6997a321666fb7be8fdec8f88936",
"catalog/posts/decode-and-encode-json-in-reasonml/post.json": "498641401c482e518ef4bb1c4d700d8c",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/content.md": "d966241dd6db79a26e56bb06eee611a4",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/post.json": "1723cf85954d34e4693c43e0a12f92c7",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen1.jpeg": "17d605fcc79c565dbeb5d5fcf713d7f0",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen2.jpeg": "22fcefc00fc6dc80d3ed24d33859bccf",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen3.jpeg": "c133b24403a48cd0b98a98b66e581206",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen4.jpeg": "d03166b9bc77b7774113fae79d0d9e38",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen5.jpeg": "65b3b96d8b0858d3466a1171e91bad08",
"catalog/posts/do-not-quit-or-how-i-resurrected-my-7-years-old-idea/screen6.jpeg": "fd11a950a5aefb84d9d55369903dbf8c",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/content.md": "198d00ae5a54ed72bb1854dfcae8e560",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/post.json": "a6a0db4c4d6ec1ab911c2b55a1f35e13",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen1.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen2.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen3.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen4.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-creating-custom-scaffold-with-app-bar/screen5.gif": "12a18839eefe2a6ff2e61fadc31378d4",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/content.md": "b04305592a6617a7f15428c94ae14f7f",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/post.json": "0e6b0537cc0ab1b08d462cf6d62b44ef",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen1.png": "0a4888460d640de93a200df2a05b744a",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen10.png": "e11cf9cdb8f2871db0ebe024b00fc640",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen11.png": "efa3cb808f0de626424ed2b85f3047d3",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen12.png": "0cd7f7b7843d150488a9efa1bbd85f2e",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen13.png": "e35a39c8be18e5dc425020c66e9fea15",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen14.png": "e874c63d441f5aeff381aa9896416b2f",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen15.png": "2622eee4ac35f13ec73a510aa5dfc25c",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen16.png": "6b0881bf5b4364d1436ec1ce5fe725a7",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen17.png": "b884ab36a4a7f82a292ad7f65293bc29",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen18.png": "c6d02fa1abf6d38d2736112d7dbb37d1",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen19.png": "fb24234e8eaa8f8bfc81af1c41e3ee59",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen2.png": "51f1543fd6427d251acf3fca517ac342",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen20.gif": "a6c630138cfefa29e3470c8e85d91f58",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen3.png": "54df949f941c451fdd8ef0007fba132a",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen4.png": "b2827669d1d3dc8e80e221807e236cda",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen5.png": "a72f09ba6b9d67e78e7ef37ffdac98b9",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen6.png": "e38a199a33d32aed235a629060a1cac3",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen7.png": "5b398c7e9239201536739e2652cdb209",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen8.png": "a4e346c3a493840747896ec56115a4fb",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/screen9.png": "bfaae227428d373233d58dd70f1905f7",
"catalog/posts/flutter-spravzhnij-cross-platform-ios-android-web-macos-linux-windows/thumbnail.jpg": "88064004a531f23339afbe6c23b56bf1",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/content.md": "7820b35b7b5df5b01bd6f5327a72fac6",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/post.json": "fb1711a61c68ddd0f6e366b0c87bd3a5",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen1.gif": "2b96162e1d2f58cf782ea1b470172530",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen2.gif": "d8d4ce1271aa3143967bb6535d24d164",
"catalog/posts/flutter-stvorennya-svogo-scaffold-vidzheta-z-vipadayuchim-menyu/screen3.gif": "12a18839eefe2a6ff2e61fadc31378d4",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/content.md": "47354595879fa7cc9d259b572fc94960",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/post.json": "1e27cc383ce42a45a2ad1f68c067c5f2",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/screen1.gif": "0276d3b0139f0f3c1e0af2ded776f352",
"catalog/posts/flutter-tips-connect-two-pageview-widgets-for-navigation/screen2.gif": "3cc37ad3e839d4c74c215a4365f1f1f7",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/content.md": "236d40faf0d64999d32abbfc100441aa",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/post.json": "c2fa7dff354362f74bc812f55811de65",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/screen1.gif": "563fa6417eb19149bd3ba08494ea5ee9",
"catalog/posts/flutter-tips-how-to-avoid-blinking-of-images-when-they-are-loaded-for-the-first-time/screen2.gif": "7ef6974ac4437d65975ea170ce0a9e9d",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/content.md": "e191735735de5a149b01ecf30a3c636f",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/post.json": "ad8995ea872ea0e3c32fea514ec246e4",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/screen1.jpeg": "a0de3e65de0d2721d409a62c573a2856",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/screen2.gif": "03fa670590e9b3ae48e2608123594a9c",
"catalog/posts/flutter-unblocking-ui-thread-with-isolates-compute-function/thumbnail.jpg": "156ea9ca120bc33d1236d86eb6ba7911",
"catalog/posts/flutter_add_sound_to_game/content.md": "f4030b4efa2721f543f6fdb582b16342",
"catalog/posts/flutter_add_sound_to_game/post.json": "d33ca21dd4ee8f68b3b05781c95a2771",
"catalog/posts/flutter_animate_interactive_viewer_as_map/animation.gif": "a8e228974362c68488630ea97ab4aae7",
"catalog/posts/flutter_animate_interactive_viewer_as_map/content.md": "d1509142b4875b4a32826905cb1495a2",
"catalog/posts/flutter_animate_interactive_viewer_as_map/final_animation.gif": "a30aebb783b0840eb0d2b13101a18aba",
"catalog/posts/flutter_animate_interactive_viewer_as_map/post.json": "8ff8d71f10908957ba4c42d5df31b5a3",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_1.jpeg": "45d873fd89c1a9f8f1028c19ec3610f2",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_2.png": "39440e59b1fe9b58efae9765903fd0ec",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_3.png": "78886e8f45f74352d70136b880031e65",
"catalog/posts/flutter_animate_interactive_viewer_as_map/thumbnail.png": "ab9abe64f88235603d4716297f5236bf",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/animation_map.gif": "2646e31a6a64a6f70f272cbede1c1da9",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/content.md": "b66fac657e4e121e4fb3329a3b634914",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/final_animation.gif": "1778e18bac5637672d2dc4b1ad621bf5",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/post.json": "8602eb2d0b479e83aa5e8f11ac498bd8",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_1.png": "8743a809fd7db715b9ff5d77e64168e0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_2.png": "b840746eac514f9422234f91ce91fa89",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_3.png": "ac7b17b42aeeda9a08f5648eea5d9a05",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_4.png": "a478f4222b7e1882e5369bbc3c1eab96",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/thumbnail.png": "cb5ad29d7c9276c73081f456a7e82ef0",
"catalog/posts/flutter_design-and-implementation-of-event-system/content.md": "124f601e3fa346fec13b62ce2dc6cad1",
"catalog/posts/flutter_design-and-implementation-of-event-system/post.json": "c0e284f4abfd4371c4d7a468e09a9cad",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen1.png": "d34249fa0819f041e645b5045415ad74",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen2.png": "2f74c496aaa3b4d30c908c74ccff9097",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen3.png": "6eb28606cbdf23f5ec1199538069adc1",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen4.gif": "8afafcc53427c884bb8f9339a0dce098",
"catalog/posts/flutter_design-and-implementation-of-event-system/screen5.png": "8d14f098c36dd4ec97facba99ee4c8f9",
"catalog/posts/flutter_design-and-implementation-of-event-system/thumbnail.png": "7a8870c67a2cf44ab6b0b48eab0eab2c",
"catalog/posts/flutter_fog_of_war/content.md": "3c484405715b4270e21c19f804b8a4d5",
"catalog/posts/flutter_fog_of_war/post.json": "1a19f6aa6e184f3d106eddd3a776f538",
"catalog/posts/flutter_fog_of_war/screen.jpeg": "c185d25e2a0df0dd93df1b8146950f7d",
"catalog/posts/flutter_fog_of_war/screen1.jpeg": "1337e523b397b4a773716823555a6e64",
"catalog/posts/flutter_fog_of_war/screen10.png": "cb1a188698a47ec35cac7c958684feb9",
"catalog/posts/flutter_fog_of_war/screen2.jpeg": "300fb87f1f93b9e7e50b0bb0ae6881d0",
"catalog/posts/flutter_fog_of_war/screen3.jpeg": "d26ed3a0284fb3b67bc9f95d8286f22a",
"catalog/posts/flutter_fog_of_war/screen4.jpeg": "d3959128d359c9c0878af0a8d8976f0a",
"catalog/posts/flutter_fog_of_war/screen5.jpeg": "3aedc6917d04923bb796f4c445a5cbd8",
"catalog/posts/flutter_fog_of_war/screen6.jpeg": "6d3598fb40e873079f6a7b90e7ee4629",
"catalog/posts/flutter_fog_of_war/screen7.png": "f114308871da4efb093b1a07f76c097c",
"catalog/posts/flutter_fog_of_war/screen8.png": "a3b901a418a9bf94bb715f0cac0c9183",
"catalog/posts/flutter_fog_of_war/thumbnail.jpg": "496a250fcde2ab543795bba2243186f9",
"catalog/posts/flutter_generation_and_render_2d_map_part1/content.md": "58179881fb984446ea56b05a067d5bed",
"catalog/posts/flutter_generation_and_render_2d_map_part1/post.json": "2a11ddc6d01f7e2d715ee717ae14be49",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen1.png": "a921c740edae028c89b295e038813952",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen2.png": "61e716cce1bd6fee4d3a2f16e86b39b6",
"catalog/posts/flutter_generation_and_render_2d_map_part1/screen3.png": "a921c740edae028c89b295e038813952",
"catalog/posts/flutter_generation_and_render_2d_map_part1/thumbnail.png": "cabee2c65cf35e5043d7df5de6434922",
"catalog/posts/flutter_generation_and_render_2d_map_part2/content.md": "b30b81890d0d7f892120e3643ecccc33",
"catalog/posts/flutter_generation_and_render_2d_map_part2/post.json": "72603c4232318f2011f47ca78d921b79",
"catalog/posts/flutter_generation_and_render_2d_map_part2/screen1.png": "cc08110d9debd268ffa0348a628fd5ab",
"catalog/posts/flutter_generation_and_render_2d_map_part2/screen2.png": "0f11398017e21d1d24568f41ef677edf",
"catalog/posts/flutter_generation_and_render_2d_map_part2/thumbnail.png": "bc342a87886ad79551235d2052a65a0a",
"catalog/posts/flutter_generation_and_render_2d_map_part3/content.md": "92a2b2e91e692fc761ef436bc390f178",
"catalog/posts/flutter_generation_and_render_2d_map_part3/post.json": "50c4e517b80b021064dc4b54685e795f",
"catalog/posts/flutter_generation_and_render_2d_map_part3/screen1.png": "717028f7d99d6bedb1dc3a862abdb899",
"catalog/posts/flutter_generation_and_render_2d_map_part3/screen2.png": "6d7b5eba7334139153d9c2114cefc7da",
"catalog/posts/flutter_generation_and_render_2d_map_part3/thumbnail.png": "a606ef69ec92ef72d9e7a686c009ad0f",
"catalog/posts/flutter_generation_and_render_2d_map_part4/content.md": "377b3d5774b4f647244345ba63cfa4e5",
"catalog/posts/flutter_generation_and_render_2d_map_part4/post.json": "e49dad952509ffae522c2d543591a9b8",
"catalog/posts/flutter_generation_and_render_2d_map_part4/thumbnail.png": "614be6d1ca15722c15b48c109e785269",
"catalog/posts/flutter_implement_and_design_researches_in_game/content.md": "630bd5a58eafbeb8adaa43109d32d48f",
"catalog/posts/flutter_implement_and_design_researches_in_game/post.json": "ed4ee4fb0d9580a15ef2acc5115f129d",
"catalog/posts/flutter_implement_and_design_researches_in_game/screen1.png": "c2e12589c71d82542783d66a3f8f8e92",
"catalog/posts/flutter_implement_and_design_researches_in_game/thumbnail.png": "0b447734477d1e14f0f24bc04cf8325f",
"catalog/posts/flutter_in_game_notifications/content.md": "9a35a12c288a2784d0743360a39ca075",
"catalog/posts/flutter_in_game_notifications/post.json": "97c4e16e89e48b3878b9d523239f91d8",
"catalog/posts/flutter_in_game_notifications/screen1.png": "df33a4baff0e692b08c4d166a5daa002",
"catalog/posts/flutter_in_game_notifications/screen2.gif": "54dad6c90d36850288580b737449ab17",
"catalog/posts/flutter_in_game_notifications/thumbnail.jpg": "687d618e88b36cfa58f275005a398988",
"catalog/posts/locadeserta_sloboda_whatsnew_305/content.md": "a8fccdaa08607c13e1026bff75039bae",
"catalog/posts/locadeserta_sloboda_whatsnew_305/post.json": "21716841a43bbb0f1c928e64033e872e",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen1.png": "ed2538e99d6c96384cee9ceb0dc243da",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen2.png": "75df0a0c3726653b2e2818581f817b19",
"catalog/posts/locadeserta_sloboda_whatsnew_305/thumbnail.png": "1bad7ac6fbd2842aab098063154e2dae",
"catalog/posts/personal_huge_milestone/content.md": "38056ca25707f3458d1688a9540a01bf",
"catalog/posts/personal_huge_milestone/post.json": "55135e034ab0ba7c50c26f01c30ef434",
"catalog/posts/personal_huge_milestone/screen1.png": "3dfef2cd1d08c024a29929886bf23c5d",
"catalog/posts/personal_huge_milestone/screen2.png": "3d07c00fff2a74010373f985eef7b440",
"catalog/posts/personal_huge_milestone/screen3.png": "2b30e8e604acea3b1d32303ef42858d7",
"catalog/posts/reasonml-create-bindings-for-npm-package/content.md": "f8c844541feb148d7a695c17c7933679",
"catalog/posts/reasonml-create-bindings-for-npm-package/post.json": "b6eac0e93d30b278e32a417da266e120",
"catalog/posts/reasonml-create-bindings-for-npm-package/screen2.png": "c8369b1fd4a6345de16af05fbf0de78e",
"catalog/posts/reasonml-create-bindings-for-npm-package/thumbnail.jpg": "794cae66453388dcad1bc4548779e48b",
"catalog/posts/retro_of_my_3_years/content.md": "e930e8987d4058be9b7db2989ae6d9c7",
"catalog/posts/retro_of_my_3_years/post.json": "ad058da0233f4ef09a4258d96e9097a8",
"catalog/posts/retro_of_my_3_years/thumbnail.png": "fe27fe5346c54e70737433f4977f7c55",
"catalog/posts/review_dou_1/content.md": "05c77264f76192fd6b123f3a67d13b37",
"catalog/posts/review_dou_1/dou0.png": "2701e87f8f52e0970c80f4337f345ed3",
"catalog/posts/review_dou_1/dou1.png": "555da43888deff331419af04b208c26f",
"catalog/posts/review_dou_1/dou2.png": "b8ec15271f9e12aeb65448f321a42581",
"catalog/posts/review_dou_1/dou3.png": "10d8384596cc961db2cd881361e5d236",
"catalog/posts/review_dou_1/post.json": "9607efd30d7a4546e8eebadb7ac578c1",
"catalog/posts/review_dou_1/thumbnail.png": "2701e87f8f52e0970c80f4337f345ed3",
"catalog/posts/road-to-flutter-and-dart/content.md": "5c7d68c9672dc3296ec20bbb538875d3",
"catalog/posts/road-to-flutter-and-dart/post.json": "8e0e73c6c121ed95a2a15a8ba6f616c8",
"catalog/posts/road-to-flutter-and-dart/screen1.gif": "a9115d44c436fafad1775db5513453be",
"catalog/posts/road-to-flutter-and-dart/thumbnail.png": "e74815c80ea0fcabe5c0ac04dc355ab0",
"catalog/posts/sloboda_3_update/content.md": "d209e38e57a58f741fb2834b88d298ca",
"catalog/posts/sloboda_3_update/post.json": "0df5bedad4f74a0f23b70e73ea5140ee",
"catalog/posts/sloboda_3_update/screen1.png": "780845dc9224e704c983d10fd53e3065",
"catalog/posts/sloboda_3_update/screen10.png": "ba12eb93c7fe6b6d19aaceab0f08e8d4",
"catalog/posts/sloboda_3_update/screen11.png": "461df98ec0d7510facc5099b02fdd7b7",
"catalog/posts/sloboda_3_update/screen12.jpg": "af2f9ed5b327b211ad78012e17f84771",
"catalog/posts/sloboda_3_update/screen12.png": "fe6cbbb45cbdfd39305871620e830dc9",
"catalog/posts/sloboda_3_update/screen2.png": "e79758d520524ccf2d7b63fe79d55a3f",
"catalog/posts/sloboda_3_update/screen3.png": "5aff620ea30b17d4701df953237e01fd",
"catalog/posts/sloboda_3_update/screen4.png": "75b2187c09475b6685085157d8a70f41",
"catalog/posts/sloboda_3_update/screen5.png": "04c0187dc1f8c887b1e3f9aef06d502d",
"catalog/posts/sloboda_3_update/screen6.png": "3ca8384a46b5b9ba8fae8268a7a2c93f",
"catalog/posts/sloboda_3_update/screen7.png": "8a799cd13fe998c3add119207ecae996",
"catalog/posts/sloboda_3_update/screen8.png": "ab5428f191ffd7e4e7a5034b00fa816b",
"catalog/posts/sloboda_3_update/screen9.png": "59faa5720bcfc606339aac2e580254fe",
"catalog/posts/sloboda_3_update/thumbnail.png": "cf615ae4175cef53a5221e395624bce8",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/content.md": "1b4e886a245f3a1368eee208a623cc94",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/post.json": "89cf87bad46242002f13a4144430a945",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen1.png": "f97c40c84999c83dfc8f4e526598c4ab",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen2.png": "c1a095435adda4d29b2c0dae9a84e7d3",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen3.png": "33d7ef589c016f49ab00e49460eb4a2c",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen4.png": "c4c26b6c18a70eb36bfa9eca520f9afb",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen5.png": "cac5f0bd15238b33a35a2e560d4b31a3",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen6.png": "7a8089892179f0799ff39a09eb26c04b",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen7.png": "caba301c139857bdb9b47a35944f3fc5",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen8.png": "2420a4c5e83a31849fe36f42e46c94b8",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/screen9.png": "0ac44e09d9cf02ea1dde9ff32391f671",
"catalog/posts/sloboda_dizajn-ta-implementaciya-igrovoyi-mehaniki/thumbnail.png": "0907072763c93cc7bce24749899268f4",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/content.md": "99520744100a28190d9a2fc7fdaa7eda",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/post.json": "459582436b9d29907435d080c707fa2a",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen1.png": "a4c61db0b190d6d3c3c97b708e37a4c6",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen2.png": "9288a69e3c24ae1253adc19e4d814ed4",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen3.png": "a06eac4f18b39098d91469040537f195",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen4.gif": "cdd3b32cf0f9435695255371b88bdbc9",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/screen5.png": "8d14f098c36dd4ec97facba99ee4c8f9",
"catalog/posts/sloboda_dizajn-ta-realizaciya-mehanizmu-podij-v-pokrokovij-gri/thumbnail.png": "99b66ca67eeb371ab3871ac103e04965",
"catalog/posts/sloboda_versiya-290-doslidzhennya/content.md": "32772613912d9b144a1d32ae706d0a33",
"catalog/posts/sloboda_versiya-290-doslidzhennya/post.json": "82b1ad214d6ff7cf939ca8521f4c59cf",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen0.jpeg": "b00d8daabb3b2a47328fbbf2ee49c1ad",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen1.jpeg": "741cef5f8d7cb0c4e0f8a9c5a6cf0e96",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen10.jpeg": "bd366279c182c078221c8a9dea8cb7ce",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen11.jpeg": "f5534db9ecc9677c88f6b7dc907f5097",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen2.jpeg": "ea84da6b001ae1f5523f272f43b9cd26",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen3.jpeg": "0c5e6877f5e17a49e3650a02af2177f5",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen4.jpeg": "071d320c62ad12f0063489915299775d",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen5.jpeg": "dc2efc4715b4188e4fc16d282e68cc9c",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen6.jpeg": "f4b9012bba13de5c1e31ba24403dd5ae",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen7.jpeg": "78efdae197d7f0bf5bd3e68fae463494",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen8.jpeg": "ace192eb20a8946858d8bf092e70b235",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen9.jpeg": "28001381715d6567450891027b080e65",
"catalog/posts/sloboda_versiya-290-doslidzhennya/thumbnail.png": "885842e81ddea902ad2ec7f7f6dd88d2",
"catalog/posts/sloboda_versiya_285_update/content.md": "3adff54a47cd7238a1ef13ec27351c4f",
"catalog/posts/sloboda_versiya_285_update/post.json": "05d5273ca7f1f18af3035bc075ab311b",
"catalog/posts/sloboda_versiya_285_update/screen1.png": "e2f13e1912190162bf87cd6e34bdb8ae",
"catalog/posts/sloboda_versiya_285_update/screen10.png": "e2c76056d3ea8696aa11d0c6fcf471b4",
"catalog/posts/sloboda_versiya_285_update/screen2.png": "9ebc2f13b4b7a12d73181e6fd2e1cde6",
"catalog/posts/sloboda_versiya_285_update/screen3.png": "9628c49fc66654f392d237198e326927",
"catalog/posts/sloboda_versiya_285_update/screen4.png": "c5b1988a5a34103fedb3460cd105d4fc",
"catalog/posts/sloboda_versiya_285_update/screen5.png": "17af09278beec49949509a0b28d03f67",
"catalog/posts/sloboda_versiya_285_update/screen6.png": "630c2337a30fb1051d0261a301f9d445",
"catalog/posts/sloboda_versiya_285_update/screen7.png": "19b304acfa7ea0caa4fbec7e2f607133",
"catalog/posts/sloboda_versiya_285_update/screen8.png": "4e40ef1d613fc5ca37158c8d881804f0",
"catalog/posts/sloboda_versiya_285_update/screen9.png": "d9ac954b3adf35a267e049200e75fcd0",
"catalog/posts/sloboda_versiya_285_update/thumbnail.png": "da593a6eb01a758a59b21dc9086ae93d",
"catalog/posts/why_education/content.md": "7afbfbb5e171fa3a4372a27ccd657ff4",
"catalog/posts/why_education/kpi_logo.png": "9604e6fefa6559002b25c1a11da4e51f",
"catalog/posts/why_education/post.json": "07469467274dd7ebfc27597527f2dbad",
"catalog/posts/why_education/screen1.png": "abb457e2a7ed6056b471bd0fb47e694a",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/content.md": "f3ba888625e406ec692ec7fb7d96313c",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/post.json": "0b16f31ed3b4fffe01989fdb9d5055be",
"catalog/posts/year-2020-fluttercalypsis-or-how-google-wiped-frameworks-of-the-web-app-dark-age/thumbnail.jpg": "71bb942bf7200539f98ff64b429ee00a",
"icons/android-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/android-icon-192x192.png": "c02917dffc36a1ba13fd9af7372cdb2d",
"icons/android-icon-36x36.png": "74eef8a5c5d7a8ce2ca1af41d28c8a17",
"icons/android-icon-48x48.png": "1fd1fd3ccba4b2ddd433a9e8db488e6a",
"icons/android-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/android-icon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/apple-icon-114x114.png": "08d2ae07a3d35a8cda5eb9b61691174e",
"icons/apple-icon-120x120.png": "fba30b4db378bb09dd236100df45fc47",
"icons/apple-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-152x152.png": "3903f894e655aae98aa5336ee8c486fe",
"icons/apple-icon-180x180.png": "87f1ff9a7c3f030e8905e5c0f0e7ac85",
"icons/apple-icon-57x57.png": "4260aa0624d2bbc17c6a6a670023f65e",
"icons/apple-icon-60x60.png": "10259acbd8ac1092f921f599c22f3dc6",
"icons/apple-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/apple-icon-76x76.png": "18e21d77c753495d9246eb24595bc129",
"icons/apple-icon-precomposed.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon.png": "56ab85c401edebc121a96e04637f60d3",
"icons/avatar_green.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"icons/favicon-16x16.png": "e227003dbc7fe1092cb6258d650c6b0a",
"icons/favicon-32x32.png": "64658662466bb987f195f4f14a9ee51a",
"icons/favicon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/favicon.ico": "44ac55191a7281a9347d3e80f5aed6a4",
"icons/ms-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/ms-icon-150x150.png": "150d8334e5125ecf9bc9bb41dc27e5bf",
"icons/ms-icon-310x310.png": "da4a70e84c0559eef338fbc83be96df9",
"icons/ms-icon-70x70.png": "bb48fa09a12f6c49c38a8cda9503a481",
"index.html": "5413a3f6be5c40cf2193afe466422c2d",
"/": "5413a3f6be5c40cf2193afe466422c2d",
"main.dart.js": "8f76eba9f19ea5fba8d71e7a2fb4842d",
"main.dart.js_1.part.js": "8e2359d5f8f3cd09f79dfaa5c2e106fb",
"main.dart.js_2.part.js": "d55cbd148d0f4c3f16cdd1a9f6784670",
"manifest.json": "552b63626b9b177d944a4b5c7b463bd8",
"micro/micros.json": "76cbc5d302dcd7659df7696da5167515",
"micro/storage/3.png": "fdb0cf5fccff324d6f291a5b332102d0",
"micro/storage/4.png": "18512aae6093bbbebd28d24f3258da57",
"micro/storage/google_play_stats.png": "cf49f4cb5ddcc98b1ce568725a039825",
"micro/storage/kpi_logo.png": "9604e6fefa6559002b25c1a11da4e51f",
"micro/storage/screen_md.png": "09ef5a04277efd78470ccd75b3fdcf0d",
"micro/storage/sloboda_unity_pick.png": "54492d9c5f3b251796dbe222d613a9b4",
"profile/experience/experiences.json": "98a576fceddf699052e3f46bd31d62cf",
"profile/profile.json": "5cf08ad82cde8ce520a96022f49e1fa8",
"version.json": "88032042c819bd8b16c3a76b2bef1b5d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
