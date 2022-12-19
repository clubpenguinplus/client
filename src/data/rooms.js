const rooms = {
    100: {
        key: 'Town',
        scene: require('@rooms/town/merrywalrus/Town').default,
        x: 760,
        y: 660,
    },
    110: {
        key: 'Coffee',
        scene: require('@rooms/coffee/Coffee').default,
        x: 640,
        y: 480,
    },
    111: {
        key: 'Book',
        scene: require('@rooms/book/Book').default,
        x: 1260,
        y: 560,
    },
    120: {
        key: 'Dance',
        scene: require('@rooms/dance/Dance').default,
        x: 360,
        y: 560,
    },
    121: {
        key: 'Arcade',
        scene: require('@rooms/arcade/Arcade').default,
        x: 1260,
        y: 570,
    },
    122: {
        key: 'School',
        scene: require('@rooms/school/School').default,
        x: 1120,
        y: 640,
    },
    130: {
        key: 'Shop',
        scene: require('@rooms/shop/Shop').default,
        x: 1000,
        y: 560,
    },
    200: {
        key: 'Village',
        scene: require('@rooms/village/Village').default,
        x: 800,
        y: 640,
    },
    212: {
        key: 'Agentlobby',
        scene: require('@rooms/agentlobby/Agentlobby').default,
        x: 170,
        y: 450,
    },
    220: {
        key: 'Lodge',
        scene: require('@rooms/lodge/Lodge').default,
        x: 330,
        y: 450,
    },
    221: {
        key: 'Attic',
        scene: require('@rooms/attic/Attic').default,
        x: 966,
        y: 560,
    },
    230: {
        key: 'Mtn',
        scene: require('@rooms/mtn/Mtn').default,
        x: 760,
        y: 440,
    },
    300: {
        key: 'Plaza',
        scene: require('@rooms/plaza/Plaza').default,
        x: 760,
        y: 680,
    },
    310: {
        key: 'Pet',
        scene: require('@rooms/pet/Pet').default,
        x: 828,
        y: 520,
    },
    320: {
        key: 'Dojo',
        scene: require('@rooms/dojo/Dojo').default,
        x: 780,
        y: 790,
    },
    321: {
        key: 'DojoExt',
        scene: require('@rooms/dojoext/DojoExt').default,
        x: 810,
        y: 800,
    },
    330: {
        key: 'Pizza',
        scene: require('@rooms/pizza/Pizza').default,
        x: 780,
        y: 790,
    },
    340: {
        key: 'Mall',
        scene: require('@rooms/mall/Mall').default,
        x: 250,
        y: 700,
    },
    400: {
        key: 'Beach',
        scene: require('@rooms/beach/Beach').default,
        x: 840,
        y: 680,
    },
    410: {
        key: 'Lighthouse',
        scene: require('@rooms/lighthouse/Lighthouse').default,
        x: 840,
        y: 680,
    },
    411: {
        key: 'Beacon',
        scene: require('@rooms/beacon/Beacon').default,
        x: 410,
        y: 800,
    },
    420: {
        key: 'Ship',
        scene: require('@rooms/ship/Ship').default,
        x: 900,
        y: 600,
    },
    421: {
        key: 'Shiphold',
        scene: require('@rooms/shiphold/Shiphold').default,
        x: 1120,
        y: 730,
    },
    423: {
        key: 'Shipnest',
        scene: require('@rooms/shipnest/Shipnest').default,
        x: 860,
        y: 580,
    },
    /*
    430: {
        key: 'HotelLobby',
        scene: require('@rooms/hotellobby/HotelLobby').default,
        x: 800,
        y: 350,
    },
    */
    435: {
        key: 'Skate',
        scene: require('@rooms/skate/Skate').default,
        x: 760,
        y: 480,
    },
    436: {
        key: 'Wild',
        scene: require('@rooms/wild/Wild').default,
        x: 760,
        y: 480,
    },
    800: {
        key: 'Dock',
        scene: require('@rooms/dock/Dock').default,
        x: 800,
        y: 400,
    },
    801: {
        key: 'Forts',
        scene: require('@rooms/forts/Forts').default,
        x: 960,
        y: 610,
    },
    802: {
        key: 'Rink',
        scene: require('@rooms/rink/Rink').default,
        x: 770,
        y: 400,
    },
    804: {
        key: 'Boiler',
        scene: require('@rooms/boiler/Boiler').default,
        x: 770,
        y: 400,
    },
    805: {
        key: 'Berg',
        scene: require('@rooms/berg/Berg').default,
        x: 652,
        y: 448,
    },
    806: {
        key: 'Cave',
        scene: require('@rooms/cave/Cave').default,
        x: 780,
        y: 700,
    },
    807: {
        key: 'Shack',
        scene: require('@rooms/shack/Shack').default,
        x: 760,
        y: 680,
    },
    808: {
        key: 'Mine',
        scene: require('@rooms/mine/Mine').default,
        x: 760,
        y: 680,
    },
    809: {
        key: 'Forest',
        scene: require('@rooms/forest/Forest').default,
        x: 760,
        y: 430,
    },
    810: {
        key: 'Cove',
        scene: require('@rooms/cove/Cove').default,
        x: 840,
        y: 480,
    },
    811: {
        key: 'BoxDimension',
        scene: require('@rooms/boxdimension/BoxDimension').default,
        x: 1180,
        y: 260,
    },
    813: {
        key: 'Cavemine',
        scene: require('@rooms/cavemine/Cavemine').default,
        x: 840,
        y: 480,
    },
    814: {
        key: 'Lake',
        scene: require('@rooms/lake/Lake').default,
        x: 840,
        y: 480,
    },
    815: {
        key: 'Underwater',
        scene: require('@rooms/underwater/Underwater').default,
        x: 840,
        y: 480,
    },
    916: {
        key: 'AquaGrabber',
        scene: require('@games/aquagrabber/AquaGrabber').default,
    },
    900: {
        key: 'AstroBarrier',
        scene: require('@games/astrobarrier/AstroBarrier').default,
    },
    905: {
        key: 'CartSurfer',
        scene: require('@games/cartsurfer/CartSurfer').default,
    },
    924: {
        key: 'HydroHopper',
        scene: require('@games/hydrohopper/HydroHopper').default,
    },
    904: {
        key: 'IceFishing',
        scene: require('@games/icefishing/IceFishing').default,
    },
    910: {
        key: 'Pizzatron',
        scene: require('@games/pizzatron/Pizzatron').default,
    },
    925: {
        key: 'PuffleRoundup',
        scene: require('@games/puffleroundup/PuffleRoundup').default,
    },
    926: {
        key: 'JetPackAdventure',
        scene: require('@games/jetpackadventure/JetPackAdventure').default,
    },
    927: {
        key: 'PuffleRescue',
        scene: require('@games/pufflerescue/PuffleRescue').default,
    },
    909: {
        key: 'ThinIce',
        scene: require('@games/thinice/ThinIce').default,
    },
    908: {
        key: 'BeanCounters',
        scene: require('@games/beancounters/BeanCounters').default,
    },
    928: {
        key: 'PuffleLaunch',
        scene: require('@games/pufflelaunch/PuffleLaunch').default,
    },
    940: {
        key: 'SoundStudio',
        scene: require('@games/soundstudio/SoundStudio').default,
    },
    998: {
        key: 'Card',
        scene: require('@games/card/Card').default,
    },
    999: {
        key: 'Sled',
        scene: require('@games/sled/Sled').default,
    },
}

export default rooms
