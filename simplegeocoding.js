// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


// ジオコーディング

const geocoding = async (q) => {
    const response = await fetch(
        `https://geocode.csis.u-tokyo.ac.jp/cgi-bin/simple_geocode.cgi?addr=${encodeURIComponent(q)}`
    );
    if (!response.ok) {
        return undefined;
    }

    const addressSearch = await response.text();

    return addressSearch;
    // return addressSearch.map((x) => JSON.stringify({ title: x.properties.title, lat: x.geometry.coordinates[1], lon: x.geometry.coordinates[0] })).join(',');
};
