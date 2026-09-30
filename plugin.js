const MI_CANAL = {
    id: "mi_canal_fijo_01",
    title: "Mi Canal de TV",
    banner: "https://placehold.co",
    type: "live",
    url: "http://201.182.249"
};

kino.onHome(async () => {
    return [
        {
            title: "Televisión en Vivo",
            items: [MI_CANAL]
        }
    ];
});

kino.onPlay(async (item) => {
    return {
        url: item.url
    };
});
