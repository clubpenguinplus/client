import BaseContainer from '@scenes/base/BaseContainer'

import {SimpleButton, Interactive, ShowHint, Button} from '@components/components'

import IglooMap from './igloo_map/IglooMap'

/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Container} */
        this.places_container;
        /** @type {Phaser.GameObjects.Container} */
        this.games_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arcade;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counters;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jitsu;
        /** @type {Phaser.GameObjects.Sprite} */
        this.surfer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancecontest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.soundstudio;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydro;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzatron;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rescue;
        /** @type {Phaser.GameObjects.Sprite} */
        this.roundup;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pufflescape;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoothie;
        /** @type {Phaser.GameObjects.Container} */
        this.shops_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.catchinwavesupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costumetrunk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydrohopperupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.icefishingupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.martialartworks;
        /** @type {Phaser.GameObjects.Sprite} */
        this.musiccatalog;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguinstyle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.petfurniture;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sledraceupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowandsports;
        /** @type {Phaser.GameObjects.Container} */
        this.puffle_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.places_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.games_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shops_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pets_btn;
        /** @type {IglooMap} */
        this.iglooMap;
        /** @type {Phaser.GameObjects.Sprite} */
        this.overlay;
        /** @type {Phaser.GameObjects.Sprite} */
        this.close_btn;


        // bg
        const bg = scene.add.sprite(0, 0, "map", "map/bg");
        this.add(bg);

        // map_places_dojo
        const map_places_dojo = scene.add.image(160, -214, "map", "map/places/dojo");
        this.add(map_places_dojo);

        // map_fg
        const map_fg = scene.add.image(3, 100, "map", "map/fg");
        this.add(map_fg);

        // map_places_skihill
        const map_places_skihill = scene.add.image(-442, -121, "map", "map/places/skihill");
        this.add(map_places_skihill);

        // map_left_snow
        const map_left_snow = scene.add.image(-610, 51, "map", "map/left_snow");
        this.add(map_left_snow);

        // map_snow_mound
        const map_snow_mound = scene.add.image(-279, -34, "map", "map/snow_mound");
        this.add(map_snow_mound);

        // map_snow
        const map_snow = scene.add.image(-194, 47, "map", "map/snow");
        this.add(map_snow);

        // map_places_lighthouse
        const map_places_lighthouse = scene.add.image(-691, 124, "map", "map/places/lighthouse");
        this.add(map_places_lighthouse);

        // map_places_dock
        const map_places_dock = scene.add.image(-460, 319, "map", "map/places/dock");
        this.add(map_places_dock);

        // map_places_igloos
        const map_places_igloos = scene.add.image(-152, 263, "map", "map/places/igloos");
        this.add(map_places_igloos);

        // map_places_igloo
        const map_places_igloo = scene.add.image(-25, 184, "map", "map/places/igloo");
        this.add(map_places_igloo);

        // map_places_town
        const map_places_town = scene.add.image(-186, 92, "map", "map/places/town");
        this.add(map_places_town);

        // map_places_pufflewild
        const map_places_pufflewild = scene.add.image(-231, -102, "map", "map/places/pufflewild");
        this.add(map_places_pufflewild);

        // map_places_rink
        const map_places_rink = scene.add.image(-99, -92, "map", "map/places/rink");
        this.add(map_places_rink);

        // map_left_trees
        const map_left_trees = scene.add.image(-179, -11, "map", "map/left_trees");
        this.add(map_left_trees);

        // map_places_shack
        const map_places_shack = scene.add.image(409, -10, "map", "map/places/shack");
        this.add(map_places_shack);

        // map_right_trees
        const map_right_trees = scene.add.image(330, 20, "map", "map/right_trees");
        this.add(map_right_trees);

        // map_places_skivillage
        const map_places_skivillage = scene.add.image(-329, -10, "map", "map/places/skivillage");
        this.add(map_places_skivillage);

        // map_places_forts
        const map_places_forts = scene.add.image(12, 47, "map", "map/places/forts");
        this.add(map_places_forts);

        // map_places_pufflepark
        const map_places_pufflepark = scene.add.image(163, -16, "map", "map/places/pufflepark");
        this.add(map_places_pufflepark);

        // map_places_plaza
        const map_places_plaza = scene.add.image(228, 107, "map", "map/places/plaza");
        this.add(map_places_plaza);

        // map_places_forest
        const map_places_forest = scene.add.image(421, 136, "map", "map/places/forest");
        this.add(map_places_forest);

        // map_places_skatepark
        const map_places_skatepark = scene.add.image(618, 7, "map", "map/places/skatepark");
        this.add(map_places_skatepark);

        // map_places_cove
        const map_places_cove = scene.add.image(657, 164, "map", "map/places/cove");
        this.add(map_places_cove);

        // map_places_iceberg
        const map_places_iceberg = scene.add.image(674, -62, "map", "map/places/iceberg");
        this.add(map_places_iceberg);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.alpha = 0.4;
        block.isFilled = true;
        this.add(block);

        // places_container
        const places_container = scene.add.container(-691, -214);
        this.add(places_container);

        // map_places_cove_1
        const map_places_cove_1 = scene.add.image(1349, 385, "map", "map/places_outline/cove_outline");
        places_container.add(map_places_cove_1);

        // map_places_skatepark_1
        const map_places_skatepark_1 = scene.add.image(1309, 221, "map", "map/places_outline/skatepark_outline");
        places_container.add(map_places_skatepark_1);

        // map_places_forest_1
        const map_places_forest_1 = scene.add.image(1110, 349, "map", "map/places_outline/forest_outline");
        places_container.add(map_places_forest_1);

        // map_places_plaza_1
        const map_places_plaza_1 = scene.add.image(919.5, 321, "map", "map/places_outline/plaza_outline");
        places_container.add(map_places_plaza_1);

        // map_places_pufflepark_1
        const map_places_pufflepark_1 = scene.add.image(853, 200, "map", "map/places_outline/pufflepark_outline");
        places_container.add(map_places_pufflepark_1);

        // map_places_forts_1
        const map_places_forts_1 = scene.add.image(703, 261, "map", "map/places_outline/forts_outline");
        places_container.add(map_places_forts_1);

        // map_places_shack_1
        const map_places_shack_1 = scene.add.image(1100, 203, "map", "map/places_outline/shack_outline");
        places_container.add(map_places_shack_1);

        // map_places_pufflewild_1
        const map_places_pufflewild_1 = scene.add.image(461, 117, "map", "map/places_outline/pufflewild_outline");
        places_container.add(map_places_pufflewild_1);

        // map_places_town_1
        const map_places_town_1 = scene.add.image(506, 306.5, "map", "map/places_outline/town_outline");
        places_container.add(map_places_town_1);

        // map_places_igloo_1
        const map_places_igloo_1 = scene.add.image(676, 400, "map", "map/places_outline/igloo_outline");
        places_container.add(map_places_igloo_1);

        // map_places_rink_1
        const map_places_rink_1 = scene.add.image(593, 123, "map", "map/places_outline/rink_outline");
        places_container.add(map_places_rink_1);

        // map_places_igloos_1
        const map_places_igloos_1 = scene.add.image(540, 475, "map", "map/places_outline/igloos_outline");
        places_container.add(map_places_igloos_1);

        // map_places_dock_1
        const map_places_dock_1 = scene.add.image(232, 531, "map", "map/places_outline/dock_outline");
        places_container.add(map_places_dock_1);

        // map_places_lighthouse_1
        const map_places_lighthouse_1 = scene.add.image(0, 337, "map", "map/places_outline/lighthouse_outline");
        places_container.add(map_places_lighthouse_1);

        // map_places_dojo_1
        const map_places_dojo_1 = scene.add.image(851, 0, "map", "map/places_outline/dojo_outline");
        places_container.add(map_places_dojo_1);

        // map_places_skihill_1
        const map_places_skihill_1 = scene.add.image(261.5, 92.5, "map", "map/places_outline/skihill_outline");
        places_container.add(map_places_skihill_1);

        // map_places_skivillage_1
        const map_places_skivillage_1 = scene.add.image(363, 205, "map", "map/places_outline/skivillage_outline");
        places_container.add(map_places_skivillage_1);

        // map_places_iceberg_1
        const map_places_iceberg_1 = scene.add.image(1365, 152, "map", "map/places/iceberg");
        places_container.add(map_places_iceberg_1);

        // games_container
        const games_container = scene.add.container(-623, -272);
        games_container.visible = false;
        this.add(games_container);

        // aqua
        const aqua = scene.add.sprite(1230, 204, "map", "map/games/aquagrabber");
        games_container.add(aqua);

        // arcade
        const arcade = scene.add.sprite(450, 309, "map", "map/games/arcadegames");
        games_container.add(arcade);

        // counters
        const counters = scene.add.sprite(302, 379, "map", "map/games/beancounters");
        games_container.add(counters);

        // jitsu
        const jitsu = scene.add.sprite(789, 50, "map", "map/games/cardjitsu");
        jitsu.visible = false;
        games_container.add(jitsu);

        // surfer
        const surfer = scene.add.sprite(1071, 227, "map", "map/games/cartsurfer");
        games_container.add(surfer);

        // waves
        const waves = scene.add.sprite(1219, 458, "map", "map/games/catchinwaves");
        waves.visible = false;
        games_container.add(waves);

        // dancecontest
        const dancecontest = scene.add.sprite(558, 373, "map", "map/games/dancecontest");
        games_container.add(dancecontest);

        // soundstudio
        const soundstudio = scene.add.sprite(448, 444, "map", "map/games/dj3ksoundstudio");
        soundstudio.visible = false;
        games_container.add(soundstudio);

        // hydro
        const hydro = scene.add.sprite(124, 577, "map", "map/games/hydrohopper");
        games_container.add(hydro);

        // fishing
        const fishing = scene.add.sprite(182, 225, "map", "map/games/icefishing");
        games_container.add(fishing);

        // jetpack
        const jetpack = scene.add.sprite(6, 341, "map", "map/games/jetpackadventure");
        games_container.add(jetpack);

        // pizzatron
        const pizzatron = scene.add.sprite(954, 394, "map", "map/games/pizzatron");
        games_container.add(pizzatron);

        // cannon
        const cannon = scene.add.sprite(749, 423, "map", "map/games/pufflelaunch");
        games_container.add(cannon);

        // rescue
        const rescue = scene.add.sprite(916, 240, "map", "map/games/pufflerescue");
        games_container.add(rescue);

        // roundup
        const roundup = scene.add.sprite(740, 285, "map", "map/games/puffleroundup");
        games_container.add(roundup);

        // pufflescape
        const pufflescape = scene.add.sprite(855, 491, "map", "map/games/pufflescape");
        pufflescape.visible = false;
        games_container.add(pufflescape);

        // sled
        const sled = scene.add.sprite(153, 89, "map", "map/games/sledracing");
        games_container.add(sled);

        // smoothie
        const smoothie = scene.add.sprite(322, 529, "map", "map/games/smoothiesmash");
        smoothie.visible = false;
        games_container.add(smoothie);

        // shops_container
        const shops_container = scene.add.container(-590, -202);
        shops_container.visible = false;
        this.add(shops_container);

        // catchinwavesupgrades
        const catchinwavesupgrades = scene.add.sprite(1192, 415, "map", "map/shops/catchinwavesupgrades");
        catchinwavesupgrades.visible = false;
        shops_container.add(catchinwavesupgrades);

        // costumetrunk
        const costumetrunk = scene.add.sprite(916, 320, "map", "map/shops/costumetrunk");
        costumetrunk.visible = false;
        shops_container.add(costumetrunk);

        // hydrohopperupgrades
        const hydrohopperupgrades = scene.add.sprite(172, 514, "map", "map/shops/hydrohopperupgrades");
        hydrohopperupgrades.visible = false;
        shops_container.add(hydrohopperupgrades);

        // icefishingupgrades
        const icefishingupgrades = scene.add.sprite(170, 241, "map", "map/shops/icefishingupgrades");
        shops_container.add(icefishingupgrades);

        // martialartworks
        const martialartworks = scene.add.sprite(746, 33, "map", "map/shops/martialartworks");
        martialartworks.visible = false;
        shops_container.add(martialartworks);

        // musiccatalog
        const musiccatalog = scene.add.sprite(0, 386, "map", "map/shops/musiccatalog");
        shops_container.add(musiccatalog);

        // penguinstyle
        const penguinstyle = scene.add.sprite(505, 349, "map", "map/shops/penguinstyle");
        shops_container.add(penguinstyle);

        // petfurniture
        const petfurniture = scene.add.sprite(747, 311, "map", "map/shops/petfurniture");
        petfurniture.visible = false;
        shops_container.add(petfurniture);

        // sledraceupgrades
        const sledraceupgrades = scene.add.sprite(123, 71, "map", "map/shops/sledracerupgrades");
        sledraceupgrades.visible = false;
        shops_container.add(sledraceupgrades);

        // snowandsports
        const snowandsports = scene.add.sprite(544, 172, "map", "map/shops/snowandsports");
        snowandsports.visible = false;
        shops_container.add(snowandsports);

        // puffle_container
        const puffle_container = scene.add.container(-255, -111);
        puffle_container.visible = false;
        this.add(puffle_container);

        // map_puffles_adopt
        const map_puffles_adopt = scene.add.image(427, 190, "map", "map/puffles/adopt");
        map_puffles_adopt.visible = false;
        puffle_container.add(map_puffles_adopt);

        // map_puffles_rainbow
        const map_puffles_rainbow = scene.add.image(559, 193, "map", "map/puffles/rainbow");
        map_puffles_rainbow.visible = false;
        puffle_container.add(map_puffles_rainbow);

        // map_puffles_rescue
        const map_puffles_rescue = scene.add.image(534, 58, "map", "map/puffles/rescue");
        puffle_container.add(map_puffles_rescue);

        // map_puffles_roundup
        const map_puffles_roundup = scene.add.image(333, 75, "map", "map/puffles/roundup");
        puffle_container.add(map_puffles_roundup);

        // map_puffles_wild
        const map_puffles_wild = scene.add.image(0, 0, "map", "map/puffles/wild");
        map_puffles_wild.visible = false;
        puffle_container.add(map_puffles_wild);

        // map_puffles_arcade
        const map_puffles_arcade = scene.add.image(84, 119, "map", "map/puffles/arcade");
        puffle_container.add(map_puffles_arcade);

        // map_puffles_launch
        const map_puffles_launch = scene.add.image(281, 208, "map", "map/puffles/launch");
        puffle_container.add(map_puffles_launch);

        // map_puffles_pufflescape
        const map_puffles_pufflescape = scene.add.image(371, 314, "map", "map/puffles/pufflescape");
        map_puffles_pufflescape.visible = false;
        puffle_container.add(map_puffles_pufflescape);

        // map_puffles_shop
        const map_puffles_shop = scene.add.image(511, 308, "map", "map/puffles/shop");
        map_puffles_shop.visible = false;
        puffle_container.add(map_puffles_shop);

        // map_puffles_care
        const map_puffles_care = scene.add.image(147, 371, "map", "map/puffles/care");
        map_puffles_care.visible = false;
        puffle_container.add(map_puffles_care);

        // image
        const image = scene.add.image(-467, -383, "map", "map/overlay/categories_bg");
        this.add(image);

        // places_btn
        const places_btn = scene.add.sprite(-649, -401, "map", "map/overlay/places_btn");
        this.add(places_btn);

        // places_txt
        const places_txt = scene.add.text(-649, -327, "", {});
        places_txt.setOrigin(0.5, 0.5);
        places_txt.text = "Places";
        places_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(places_txt);

        // games_btn
        const games_btn = scene.add.sprite(-520, -401, "map", "map/overlay/games_btn");
        this.add(games_btn);

        // games_txt
        const games_txt = scene.add.text(-520, -327, "", {});
        games_txt.setOrigin(0.5, 0.5);
        games_txt.text = "Games";
        games_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(games_txt);

        // shops_btn
        const shops_btn = scene.add.sprite(-393, -401, "map", "map/overlay/shops_btn");
        this.add(shops_btn);

        // shops_txt
        const shops_txt = scene.add.text(-393, -327, "", {});
        shops_txt.setOrigin(0.5, 0.5);
        shops_txt.text = "Shops";
        shops_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(shops_txt);

        // pets_btn
        const pets_btn = scene.add.sprite(-266, -401, "map", "map/overlay/puffles_btn");
        this.add(pets_btn);

        // shops_txt_1
        const shops_txt_1 = scene.add.text(-266, -327, "", {});
        shops_txt_1.setOrigin(0.5, 0.5);
        shops_txt_1.text = "Pets";
        shops_txt_1.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(shops_txt_1);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // overlay
        const overlay = scene.add.sprite(0, 0, "map", "map/overlay/overlay");
        this.add(overlay);

        // close_btn
        const close_btn = scene.add.sprite(717, -439, "main", "grey-button");
        this.add(close_btn);

        // image_1
        const image_1 = scene.add.image(717, -441, "main", "grey-x");
        this.add(image_1);

        // bg (components)
        new Interactive(bg);

        // map_places_dojo (components)
        const map_places_dojoButton = new Button(map_places_dojo);
        map_places_dojoButton.spriteName = "map/places/dojo";
        map_places_dojoButton.callback = () => this.onRoomClick(321);
        map_places_dojoButton.activeFrame = false;
        const map_places_dojoShowHint = new ShowHint(map_places_dojo);
        map_places_dojoShowHint.text = "dojoext";

        // map_places_skihill (components)
        const map_places_skihillButton = new Button(map_places_skihill);
        map_places_skihillButton.spriteName = "map/places/skihill";
        map_places_skihillButton.callback = () => this.onRoomClick(230);
        map_places_skihillButton.activeFrame = false;
        const map_places_skihillShowHint = new ShowHint(map_places_skihill);
        map_places_skihillShowHint.text = "mtn";

        // map_places_lighthouse (components)
        const map_places_lighthouseButton = new Button(map_places_lighthouse);
        map_places_lighthouseButton.spriteName = "map/places/lighthouse";
        map_places_lighthouseButton.callback = () => this.onRoomClick(400);
        map_places_lighthouseButton.activeFrame = false;
        const map_places_lighthouseShowHint = new ShowHint(map_places_lighthouse);
        map_places_lighthouseShowHint.text = "beach";

        // map_places_dock (components)
        const map_places_dockButton = new Button(map_places_dock);
        map_places_dockButton.spriteName = "map/places/dock";
        map_places_dockButton.callback = () => this.onRoomClick(800);
        map_places_dockButton.activeFrame = false;
        const map_places_dockShowHint = new ShowHint(map_places_dock);
        map_places_dockShowHint.text = "dock";

        // map_places_igloos (components)
        const map_places_igloosButton = new Button(map_places_igloos);
        map_places_igloosButton.spriteName = "map/places/igloos";
        map_places_igloosButton.callback = () => this.iglooMap.visible = true;
        map_places_igloosButton.activeFrame = false;
        const map_places_igloosShowHint = new ShowHint(map_places_igloos);
        map_places_igloosShowHint.text = "igloos";

        // map_places_igloo (components)
        const map_places_iglooButton = new Button(map_places_igloo);
        map_places_iglooButton.spriteName = "map/places/igloo";
        map_places_iglooButton.callback = () => this.shell.client.sendJoinIgloo(this.shell.client.id);
        map_places_iglooButton.activeFrame = false;
        const map_places_iglooShowHint = new ShowHint(map_places_igloo);
        map_places_iglooShowHint.text = "urigloo";

        // map_places_town (components)
        const map_places_townButton = new Button(map_places_town);
        map_places_townButton.spriteName = "map/places/town";
        map_places_townButton.callback = () => this.onRoomClick(100);
        map_places_townButton.activeFrame = false;
        const map_places_townShowHint = new ShowHint(map_places_town);
        map_places_townShowHint.text = "town";

        // map_places_pufflewild (components)
        const map_places_pufflewildButton = new Button(map_places_pufflewild);
        map_places_pufflewildButton.spriteName = "map/places/pufflewild";
        map_places_pufflewildButton.callback = () => this.onRoomClick(230);
        map_places_pufflewildButton.activeFrame = false;
        const map_places_pufflewildShowHint = new ShowHint(map_places_pufflewild);
        map_places_pufflewildShowHint.text = "pufflewild";

        // map_places_rink (components)
        const map_places_rinkButton = new Button(map_places_rink);
        map_places_rinkButton.spriteName = "map/places/rink";
        map_places_rinkButton.callback = () => this.onRoomClick(802);
        map_places_rinkButton.activeFrame = false;
        const map_places_rinkShowHint = new ShowHint(map_places_rink);
        map_places_rinkShowHint.text = "rink";

        // map_places_shack (components)
        const map_places_shackButton = new Button(map_places_shack);
        map_places_shackButton.spriteName = "map/places/shack";
        map_places_shackButton.callback = () => this.onRoomClick(807);
        map_places_shackButton.activeFrame = false;
        const map_places_shackShowHint = new ShowHint(map_places_shack);
        map_places_shackShowHint.text = "shack";

        // map_places_skivillage (components)
        const map_places_skivillageButton = new Button(map_places_skivillage);
        map_places_skivillageButton.spriteName = "map/places/skivillage";
        map_places_skivillageButton.callback = () => this.onRoomClick(200);
        map_places_skivillageButton.activeFrame = false;
        const map_places_skivillageShowHint = new ShowHint(map_places_skivillage);
        map_places_skivillageShowHint.text = "village";

        // map_places_forts (components)
        const map_places_fortsButton = new Button(map_places_forts);
        map_places_fortsButton.spriteName = "map/places/forts";
        map_places_fortsButton.callback = () => this.onRoomClick(801);
        map_places_fortsButton.activeFrame = false;
        const map_places_fortsShowHint = new ShowHint(map_places_forts);
        map_places_fortsShowHint.text = "forts";

        // map_places_pufflepark (components)
        const map_places_puffleparkButton = new Button(map_places_pufflepark);
        map_places_puffleparkButton.spriteName = "map/places/pufflepark";
        map_places_puffleparkButton.callback = () => this.onRoomClick(230);
        map_places_puffleparkButton.activeFrame = false;
        const map_places_puffleparkShowHint = new ShowHint(map_places_pufflepark);
        map_places_puffleparkShowHint.text = "park";

        // map_places_plaza (components)
        const map_places_plazaButton = new Button(map_places_plaza);
        map_places_plazaButton.spriteName = "map/places/plaza";
        map_places_plazaButton.callback = () => this.onRoomClick(300);
        map_places_plazaButton.activeFrame = false;
        const map_places_plazaShowHint = new ShowHint(map_places_plaza);
        map_places_plazaShowHint.text = "plaza";

        // map_places_forest (components)
        const map_places_forestButton = new Button(map_places_forest);
        map_places_forestButton.spriteName = "map/places/forest";
        map_places_forestButton.callback = () => this.onRoomClick(809);
        map_places_forestButton.activeFrame = false;
        const map_places_forestShowHint = new ShowHint(map_places_forest);
        map_places_forestShowHint.text = "forest";

        // map_places_skatepark (components)
        const map_places_skateparkButton = new Button(map_places_skatepark);
        map_places_skateparkButton.spriteName = "map/places/skatepark";
        map_places_skateparkButton.callback = () => this.onRoomClick(230);
        map_places_skateparkButton.activeFrame = false;
        const map_places_skateparkShowHint = new ShowHint(map_places_skatepark);
        map_places_skateparkShowHint.text = "skatepark";

        // map_places_cove (components)
        const map_places_coveButton = new Button(map_places_cove);
        map_places_coveButton.spriteName = "map/places/cove";
        map_places_coveButton.callback = () => this.onRoomClick(810);
        map_places_coveButton.activeFrame = false;
        const map_places_coveShowHint = new ShowHint(map_places_cove);
        map_places_coveShowHint.text = "cove";

        // map_places_iceberg (components)
        const map_places_icebergShowHint = new ShowHint(map_places_iceberg);
        map_places_icebergShowHint.text = "berg";
        const map_places_icebergSimpleButton = new SimpleButton(map_places_iceberg);
        map_places_icebergSimpleButton.callback = () => this.onRoomClick(805);

        // block (components)
        new Interactive(block);

        // map_places_cove_1 (components)
        const map_places_cove_1Button = new Button(map_places_cove_1);
        map_places_cove_1Button.spriteName = "map/places_outline/cove_outline";
        map_places_cove_1Button.callback = () => this.onRoomClick(810);
        map_places_cove_1Button.activeFrame = false;
        const map_places_cove_1ShowHint = new ShowHint(map_places_cove_1);
        map_places_cove_1ShowHint.text = "cove";

        // map_places_skatepark_1 (components)
        const map_places_skatepark_1Button = new Button(map_places_skatepark_1);
        map_places_skatepark_1Button.spriteName = "map/places_outline/skatepark_outline";
        map_places_skatepark_1Button.callback = () => this.onRoomClick(435);
        map_places_skatepark_1Button.activeFrame = false;
        const map_places_skatepark_1ShowHint = new ShowHint(map_places_skatepark_1);
        map_places_skatepark_1ShowHint.text = "skatepark";

        // map_places_forest_1 (components)
        const map_places_forest_1Button = new Button(map_places_forest_1);
        map_places_forest_1Button.spriteName = "map/places_outline/forest_outline";
        map_places_forest_1Button.callback = () => this.onRoomClick(809);
        map_places_forest_1Button.activeFrame = false;
        const map_places_forest_1ShowHint = new ShowHint(map_places_forest_1);
        map_places_forest_1ShowHint.text = "forest";

        // map_places_plaza_1 (components)
        const map_places_plaza_1Button = new Button(map_places_plaza_1);
        map_places_plaza_1Button.spriteName = "map/places_outline/plaza_outline";
        map_places_plaza_1Button.callback = () => this.onRoomClick(300);
        map_places_plaza_1Button.activeFrame = false;
        const map_places_plaza_1ShowHint = new ShowHint(map_places_plaza_1);
        map_places_plaza_1ShowHint.text = "plaza";

        // map_places_pufflepark_1 (components)
        const map_places_pufflepark_1Button = new Button(map_places_pufflepark_1);
        map_places_pufflepark_1Button.spriteName = "map/places_outline/pufflepark_outline";
        map_places_pufflepark_1Button.callback = () => this.onRoomClick(230);
        map_places_pufflepark_1Button.activeFrame = false;
        const map_places_pufflepark_1ShowHint = new ShowHint(map_places_pufflepark_1);
        map_places_pufflepark_1ShowHint.text = "park";

        // map_places_forts_1 (components)
        const map_places_forts_1Button = new Button(map_places_forts_1);
        map_places_forts_1Button.spriteName = "map/places_outline/forts_outline";
        map_places_forts_1Button.callback = () => this.onRoomClick(801);
        map_places_forts_1Button.activeFrame = false;
        const map_places_forts_1ShowHint = new ShowHint(map_places_forts_1);
        map_places_forts_1ShowHint.text = "forts";

        // map_places_shack_1 (components)
        const map_places_shack_1Button = new Button(map_places_shack_1);
        map_places_shack_1Button.spriteName = "map/places_outline/shack_outline";
        map_places_shack_1Button.callback = () => this.onRoomClick(807);
        map_places_shack_1Button.activeFrame = false;
        const map_places_shack_1ShowHint = new ShowHint(map_places_shack_1);
        map_places_shack_1ShowHint.text = "shack";

        // map_places_pufflewild_1 (components)
        const map_places_pufflewild_1Button = new Button(map_places_pufflewild_1);
        map_places_pufflewild_1Button.spriteName = "map/places_outline/pufflewild_outline";
        map_places_pufflewild_1Button.callback = () => this.onRoomClick(230);
        map_places_pufflewild_1Button.activeFrame = false;
        const map_places_pufflewild_1ShowHint = new ShowHint(map_places_pufflewild_1);
        map_places_pufflewild_1ShowHint.text = "pufflewild";

        // map_places_town_1 (components)
        const map_places_town_1Button = new Button(map_places_town_1);
        map_places_town_1Button.spriteName = "map/places_outline/town_outline";
        map_places_town_1Button.callback = () => this.onRoomClick(100);
        map_places_town_1Button.activeFrame = false;
        const map_places_town_1ShowHint = new ShowHint(map_places_town_1);
        map_places_town_1ShowHint.text = "town";

        // map_places_igloo_1 (components)
        const map_places_igloo_1Button = new Button(map_places_igloo_1);
        map_places_igloo_1Button.spriteName = "map/places_outline/igloo_outline";
        map_places_igloo_1Button.callback = () => this.shell.client.sendJoinIgloo(this.shell.client.id);
        map_places_igloo_1Button.activeFrame = false;
        const map_places_igloo_1ShowHint = new ShowHint(map_places_igloo_1);
        map_places_igloo_1ShowHint.text = "urigloo";

        // map_places_rink_1 (components)
        const map_places_rink_1Button = new Button(map_places_rink_1);
        map_places_rink_1Button.spriteName = "map/places_outline/rink_outline";
        map_places_rink_1Button.callback = () => this.onRoomClick(802);
        map_places_rink_1Button.activeFrame = false;
        const map_places_rink_1ShowHint = new ShowHint(map_places_rink_1);
        map_places_rink_1ShowHint.text = "rink";

        // map_places_igloos_1 (components)
        const map_places_igloos_1Button = new Button(map_places_igloos_1);
        map_places_igloos_1Button.spriteName = "map/places_outline/igloos_outline";
        map_places_igloos_1Button.callback = () => this.iglooMap.visible = true;
        map_places_igloos_1Button.activeFrame = false;
        const map_places_igloos_1ShowHint = new ShowHint(map_places_igloos_1);
        map_places_igloos_1ShowHint.text = "igloos";

        // map_places_dock_1 (components)
        const map_places_dock_1Button = new Button(map_places_dock_1);
        map_places_dock_1Button.spriteName = "map/places_outline/dock_outline";
        map_places_dock_1Button.callback = () => this.onRoomClick(800);
        map_places_dock_1Button.activeFrame = false;
        const map_places_dock_1ShowHint = new ShowHint(map_places_dock_1);
        map_places_dock_1ShowHint.text = "dock";

        // map_places_lighthouse_1 (components)
        const map_places_lighthouse_1Button = new Button(map_places_lighthouse_1);
        map_places_lighthouse_1Button.spriteName = "map/places_outline/lighthouse_outline";
        map_places_lighthouse_1Button.callback = () => this.onRoomClick(400);
        map_places_lighthouse_1Button.activeFrame = false;
        const map_places_lighthouse_1ShowHint = new ShowHint(map_places_lighthouse_1);
        map_places_lighthouse_1ShowHint.text = "beach";

        // map_places_dojo_1 (components)
        const map_places_dojo_1Button = new Button(map_places_dojo_1);
        map_places_dojo_1Button.spriteName = "map/places_outline/dojo_outline";
        map_places_dojo_1Button.callback = () => this.onRoomClick(321);
        map_places_dojo_1Button.activeFrame = false;
        const map_places_dojo_1ShowHint = new ShowHint(map_places_dojo_1);
        map_places_dojo_1ShowHint.text = "dojoext";

        // map_places_skihill_1 (components)
        const map_places_skihill_1Button = new Button(map_places_skihill_1);
        map_places_skihill_1Button.spriteName = "map/places_outline/skihill_outline";
        map_places_skihill_1Button.callback = () => this.onRoomClick(230);
        map_places_skihill_1Button.activeFrame = false;
        const map_places_skihill_1ShowHint = new ShowHint(map_places_skihill_1);
        map_places_skihill_1ShowHint.text = "mtn";

        // map_places_skivillage_1 (components)
        const map_places_skivillage_1Button = new Button(map_places_skivillage_1);
        map_places_skivillage_1Button.spriteName = "map/places_outline/skivillage_outline";
        map_places_skivillage_1Button.callback = () => this.onRoomClick(200);
        map_places_skivillage_1Button.activeFrame = false;
        const map_places_skivillage_1ShowHint = new ShowHint(map_places_skivillage_1);
        map_places_skivillage_1ShowHint.text = "village";

        // map_places_iceberg_1 (components)
        const map_places_iceberg_1ShowHint = new ShowHint(map_places_iceberg_1);
        map_places_iceberg_1ShowHint.text = "berg";
        const map_places_iceberg_1SimpleButton = new SimpleButton(map_places_iceberg_1);
        map_places_iceberg_1SimpleButton.callback = () => this.onRoomClick(805);

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.callback = () => this.onRoomClick(805);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "aquagrabber";

        // arcade (components)
        const arcadeSimpleButton = new SimpleButton(arcade);
        arcadeSimpleButton.callback = () => this.onRoomClick(121);
        const arcadeShowHint = new ShowHint(arcade);
        arcadeShowHint.text = "arcade";

        // counters (components)
        const countersSimpleButton = new SimpleButton(counters);
        countersSimpleButton.callback = () => this.onRoomClick(110);
        const countersShowHint = new ShowHint(counters);
        countersShowHint.text = "beancounters";

        // jitsu (components)
        const jitsuShowHint = new ShowHint(jitsu);
        jitsuShowHint.text = "card";

        // surfer (components)
        const surferSimpleButton = new SimpleButton(surfer);
        surferSimpleButton.callback = () => this.onRoomClick(808);
        const surferShowHint = new ShowHint(surfer);
        surferShowHint.text = "cartsurfer";

        // waves (components)
        const wavesShowHint = new ShowHint(waves);
        wavesShowHint.text = "catchinwaves";

        // dancecontest (components)
        const dancecontestSimpleButton = new SimpleButton(dancecontest);
        dancecontestSimpleButton.callback = () => this.onRoomClick(120);
        const dancecontestShowHint = new ShowHint(dancecontest);
        dancecontestShowHint.text = "dancecontest";

        // soundstudio (components)
        const soundstudioShowHint = new ShowHint(soundstudio);
        soundstudioShowHint.text = "soundstudio";

        // hydro (components)
        const hydroSimpleButton = new SimpleButton(hydro);
        hydroSimpleButton.callback = () => this.onRoomClick(800);
        const hydroShowHint = new ShowHint(hydro);
        hydroShowHint.text = "hydrohopper";

        // fishing (components)
        const fishingSimpleButton = new SimpleButton(fishing);
        fishingSimpleButton.callback = () => this.onRoomClick(220);
        const fishingShowHint = new ShowHint(fishing);
        fishingShowHint.text = "icefishing";

        // jetpack (components)
        const jetpackSimpleButton = new SimpleButton(jetpack);
        jetpackSimpleButton.callback = () => this.onRoomClick(411);
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "jetpackadventure";

        // pizzatron (components)
        const pizzatronSimpleButton = new SimpleButton(pizzatron);
        pizzatronSimpleButton.callback = () => this.onRoomClick(330);
        const pizzatronShowHint = new ShowHint(pizzatron);
        pizzatronShowHint.text = "pizzatron";

        // cannon (components)
        const cannonSimpleButton = new SimpleButton(cannon);
        cannonSimpleButton.callback = () => this.onRoomClick(310);
        const cannonShowHint = new ShowHint(cannon);
        cannonShowHint.text = "pufflelaunch";

        // rescue (components)
        const rescueSimpleButton = new SimpleButton(rescue);
        rescueSimpleButton.callback = () => this.onRoomClick(808);
        const rescueShowHint = new ShowHint(rescue);
        rescueShowHint.text = "pufflerescue";

        // roundup (components)
        const roundupSimpleButton = new SimpleButton(roundup);
        roundupSimpleButton.callback = () => this.onRoomClick(310);
        const roundupShowHint = new ShowHint(roundup);
        roundupShowHint.text = "puffleroundup";

        // pufflescape (components)
        const pufflescapeShowHint = new ShowHint(pufflescape);
        pufflescapeShowHint.text = "pufflescape";

        // sled (components)
        const sledSimpleButton = new SimpleButton(sled);
        sledSimpleButton.callback = () => this.onRoomClick(230);
        const sledShowHint = new ShowHint(sled);
        sledShowHint.text = "sled";

        // smoothie (components)
        const smoothieShowHint = new ShowHint(smoothie);
        smoothieShowHint.text = "smoothie";

        // catchinwavesupgrades (components)
        new SimpleButton(catchinwavesupgrades);
        const catchinwavesupgradesShowHint = new ShowHint(catchinwavesupgrades);
        catchinwavesupgradesShowHint.text = "gameupgrade";

        // costumetrunk (components)
        new SimpleButton(costumetrunk);
        const costumetrunkShowHint = new ShowHint(costumetrunk);
        costumetrunkShowHint.text = "costumecatalog";

        // hydrohopperupgrades (components)
        new SimpleButton(hydrohopperupgrades);
        const hydrohopperupgradesShowHint = new ShowHint(hydrohopperupgrades);
        hydrohopperupgradesShowHint.text = "gameupgrade";

        // icefishingupgrades (components)
        const icefishingupgradesSimpleButton = new SimpleButton(icefishingupgrades);
        icefishingupgradesSimpleButton.callback = () => this.onRoomClick(220);
        const icefishingupgradesShowHint = new ShowHint(icefishingupgrades);
        icefishingupgradesShowHint.text = "gameupgrade";

        // martialartworks (components)
        new SimpleButton(martialartworks);
        const martialartworksShowHint = new ShowHint(martialartworks);
        martialartworksShowHint.text = "martialartworks";

        // musiccatalog (components)
        const musiccatalogSimpleButton = new SimpleButton(musiccatalog);
        musiccatalogSimpleButton.callback = () => this.onRoomClick(410);
        const musiccatalogShowHint = new ShowHint(musiccatalog);
        musiccatalogShowHint.text = "musiccatalog";

        // penguinstyle (components)
        const penguinstyleSimpleButton = new SimpleButton(penguinstyle);
        penguinstyleSimpleButton.callback = () => this.onRoomClick(130);
        const penguinstyleShowHint = new ShowHint(penguinstyle);
        penguinstyleShowHint.text = "clothingcatalog";

        // petfurniture (components)
        new SimpleButton(petfurniture);
        const petfurnitureShowHint = new ShowHint(petfurniture);
        petfurnitureShowHint.text = "petfurniture";

        // sledraceupgrades (components)
        new SimpleButton(sledraceupgrades);
        const sledraceupgradesShowHint = new ShowHint(sledraceupgrades);
        sledraceupgradesShowHint.text = "gameupgrade";

        // snowandsports (components)
        new SimpleButton(snowandsports);
        const snowandsportsShowHint = new ShowHint(snowandsports);
        snowandsportsShowHint.text = "sportscatalog";

        // map_puffles_adopt (components)
        new SimpleButton(map_puffles_adopt);
        const map_puffles_adoptShowHint = new ShowHint(map_puffles_adopt);
        map_puffles_adoptShowHint.text = "puffleadopt";

        // map_puffles_rainbow (components)
        new SimpleButton(map_puffles_rainbow);
        const map_puffles_rainbowShowHint = new ShowHint(map_puffles_rainbow);
        map_puffles_rainbowShowHint.text = "rainbowquest";

        // map_puffles_rescue (components)
        const map_puffles_rescueSimpleButton = new SimpleButton(map_puffles_rescue);
        map_puffles_rescueSimpleButton.callback = () => this.onRoomClick(808);
        const map_puffles_rescueShowHint = new ShowHint(map_puffles_rescue);
        map_puffles_rescueShowHint.text = "pufflerescue";

        // map_puffles_roundup (components)
        const map_puffles_roundupSimpleButton = new SimpleButton(map_puffles_roundup);
        map_puffles_roundupSimpleButton.callback = () => this.onRoomClick(310);
        const map_puffles_roundupShowHint = new ShowHint(map_puffles_roundup);
        map_puffles_roundupShowHint.text = "puffleroundup";

        // map_puffles_wild (components)
        new SimpleButton(map_puffles_wild);
        const map_puffles_wildShowHint = new ShowHint(map_puffles_wild);
        map_puffles_wildShowHint.text = "pufflewild";

        // map_puffles_arcade (components)
        const map_puffles_arcadeSimpleButton = new SimpleButton(map_puffles_arcade);
        map_puffles_arcadeSimpleButton.callback = () => this.onRoomClick(121);
        const map_puffles_arcadeShowHint = new ShowHint(map_puffles_arcade);
        map_puffles_arcadeShowHint.text = "arcade";

        // map_puffles_launch (components)
        const map_puffles_launchSimpleButton = new SimpleButton(map_puffles_launch);
        map_puffles_launchSimpleButton.callback = () => this.onRoomClick(310);
        const map_puffles_launchShowHint = new ShowHint(map_puffles_launch);
        map_puffles_launchShowHint.text = "pufflelaunch";

        // map_puffles_pufflescape (components)
        new SimpleButton(map_puffles_pufflescape);
        const map_puffles_pufflescapeShowHint = new ShowHint(map_puffles_pufflescape);
        map_puffles_pufflescapeShowHint.text = "pufflescape";

        // map_puffles_shop (components)
        new SimpleButton(map_puffles_shop);
        const map_puffles_shopShowHint = new ShowHint(map_puffles_shop);
        map_puffles_shopShowHint.text = "petfurniture";

        // map_puffles_care (components)
        new SimpleButton(map_puffles_care);
        const map_puffles_careShowHint = new ShowHint(map_puffles_care);
        map_puffles_careShowHint.text = "pufflecare";

        // places_btn (components)
        const places_btnButton = new Button(places_btn);
        places_btnButton.spriteName = "map/overlay/places_btn";
        places_btnButton.callback = () => this.changeMode("places");

        // games_btn (components)
        const games_btnButton = new Button(games_btn);
        games_btnButton.spriteName = "map/overlay/games_btn";
        games_btnButton.callback = () => this.changeMode("games");

        // shops_btn (components)
        const shops_btnButton = new Button(shops_btn);
        shops_btnButton.spriteName = "map/overlay/shops_btn";
        shops_btnButton.callback = () => this.changeMode("shops");

        // pets_btn (components)
        const pets_btnButton = new Button(pets_btn);
        pets_btnButton.spriteName = "map/overlay/puffles_btn";
        pets_btnButton.callback = () => this.changeMode("puffles");

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.spriteName = "grey-button";
        close_btnButton.callback = () => { this.visible = false };

        this.bg = bg;
        this.block = block;
        this.places_container = places_container;
        this.games_container = games_container;
        this.aqua = aqua;
        this.arcade = arcade;
        this.counters = counters;
        this.jitsu = jitsu;
        this.surfer = surfer;
        this.waves = waves;
        this.dancecontest = dancecontest;
        this.soundstudio = soundstudio;
        this.hydro = hydro;
        this.fishing = fishing;
        this.jetpack = jetpack;
        this.pizzatron = pizzatron;
        this.cannon = cannon;
        this.rescue = rescue;
        this.roundup = roundup;
        this.pufflescape = pufflescape;
        this.sled = sled;
        this.smoothie = smoothie;
        this.shops_container = shops_container;
        this.catchinwavesupgrades = catchinwavesupgrades;
        this.costumetrunk = costumetrunk;
        this.hydrohopperupgrades = hydrohopperupgrades;
        this.icefishingupgrades = icefishingupgrades;
        this.martialartworks = martialartworks;
        this.musiccatalog = musiccatalog;
        this.penguinstyle = penguinstyle;
        this.petfurniture = petfurniture;
        this.sledraceupgrades = sledraceupgrades;
        this.snowandsports = snowandsports;
        this.puffle_container = puffle_container;
        this.places_btn = places_btn;
        this.games_btn = games_btn;
        this.shops_btn = shops_btn;
        this.pets_btn = pets_btn;
        this.iglooMap = iglooMap;
        this.overlay = overlay;
        this.close_btn = close_btn;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    mode = 'places'

    changeMode(newMode) {
        if (newMode == 'places') {
            if (this.mode == 'places') {
                this.block.visible = false
                this.places_container.visible = false
                this.mode = 'none'
            } else {
                this.places_container.visible = true
                this.games_container.visible = false
                this.shops_container.visible = false
                this.puffle_container.visible = false
                this.block.visible = true
                this.mode = 'places'
            }
        } else if (newMode == 'games') {
            if (this.mode == 'games') {
                this.block.visible = false
                this.games_container.visible = false
                this.mode = 'none'
            } else {
                this.shops_container.visible = false
                this.places_container.visible = false
                this.games_container.visible = true
                this.puffle_container.visible = false
                this.block.visible = true
                this.mode = 'games'
            }
        } else if (newMode == 'shops') {
            if (this.mode == 'shops') {
                this.block.visible = false
                this.shops_container.visible = false
                this.mode = 'none'
            } else {
                this.games_container.visible = false
                this.places_container.visible = false
                this.shops_container.visible = true
                this.puffle_container.visible = false
                this.block.visible = true
                this.mode = 'shops'
            }
        } else if (newMode == 'puffles') {
            if (this.mode == 'puffles') {
                this.block.visible = false
                this.puffle_container.visible = false
                this.mode = 'none'
            } else {
                this.places_container.visible = false
                this.games_container.visible = false
                this.shops_container.visible = false
                this.puffle_container.visible = true
                this.block.visible = true
                this.mode = 'puffles'
            }
        }
    }

    onRoomClick(id) {
        let room = this.crumbs.scenes.rooms[id]
        if (this.shell.room.key == room.key) return

        this.visible = false

        this.shell.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
