
const key = "your api key";

export default async search => {
    const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}${search}&limit=25&offset=0&rating=g&lang=en`);
    const searchResults = await result.json();
    //console.log(searchResults);
    const images = searchResults.data.map(item => {
        return {original: item.images.original.url, thumb: item.images.downsized_still.url}
    });

    return images;
};
