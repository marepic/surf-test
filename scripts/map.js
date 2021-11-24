(function () {
    let myMap;

    const init = () => {
        myMap = new ymaps.Map("map", {
            center: [59.935274, 30.312388],
            zoom: 12,
            controls: []
        });

        const coords = [
            [59.976517, 30.217296],
            [59.924957, 30.239763],
            [59.933248, 30.324375],
            [59.910735, 30.324600]
        ];

        const myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './img/icons/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-35, -52]
        });

        coords.forEach(coord => {
            myCollection.add(new ymaps.Placemark(coord));
        });

        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }

    ymaps.ready(init);

}());