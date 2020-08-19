import getSearchResults from './get-search-results';

const resultsDiv = document.getElementById('search-results')

export const handleSearch = async term => {
    
    
    const spinner = document.createElement('img');
    spinner.setAttribute('src','loader.gif');
    resultsDiv.innerHTML = '';
    resultsDiv.append(spinner) 
    const results = await getSearchResults(term)
    resultsDiv.removeChild(spinner)
    results.forEach(item => {
        const link = document.createElement('a');
        link.setAttribute('id', 'thumb')
        link.setAttribute('href', item.original)
        link.innerHTML = `<img src="${item.thumb}" />`
        resultsDiv.append(link)
          
    });
}
// have to pass this a function func
export const resultClicked = fn => {
    

    resultsDiv.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.nodeName === 'IMG'){
            return fn(e.target.parentElement.href);   
        }
    });
   
};
