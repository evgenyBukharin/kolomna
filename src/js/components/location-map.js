let markerCoords = [38.75541973287151, 55.069505614028074];
initMap();

async function initMap() {
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

	let map = new YMap(
		document.getElementById("location-map"),
		{
			location: {
				center: markerCoords,
				zoom: 15,
			},
		},
		[new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer()]
	);

	const markerContainer = document.createElement("div");
	markerContainer.className = "location__container-marker";
	markerContainer.innerHTML = `
		<img
			src="./img/location-marker.webp"
			class="image location__marker"
			width="46"
			height="56"
			alt="Маркер на карте"
		/>
		<p class="location__text">улица Астахова, 2</p>
	`;
	map.addChild(new YMapMarker({ coordinates: markerCoords }, markerContainer));
}
