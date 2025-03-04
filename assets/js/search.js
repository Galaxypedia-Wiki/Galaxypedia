document.addEventListener('DOMContentLoaded', async function () {
    const searchbar = document.getElementById('searchbar');
    let results = document.getElementById('results');
    const pagefind = await import(window.location.origin + "/pagefind/pagefind.js");
    pagefind.init();
    const defaultBorderColor = searchbar.style.borderColor

    searchbar.addEventListener('input', async function () {
        let data;
        try {
            let response = await fetch('https://localhost:9200/galaxypedia/_search', {
                method: 'POST',
                body: JSON.stringify({
                    query: {
                        multi_match: {
                            query: searchbar.value,
                            type: "bool_prefix",
                            fuzziness: "AUTO",
                            fields: ['title^2', 'content']
                        }
                    }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ZWxhc3RpYzpzdWdvbmRlc2U='
                }
            });
            data = await response.json();
            searchbar.style.borderColor = defaultBorderColor
            searchbar.removeAttribute("title");
        } catch (error) {
            console.error("Error fetching data from elasticsearch. Falling back to pagefind for this request\n" + error);
            searchbar.style.borderColor = 'red';
            searchbar.setAttribute("title", "High quality search results are currently unavailable. Searching will be performed on-device until the issue is resolved.");

            const search = await pagefind.search(searchbar.value);
            const fiveResults = await Promise.all(search.results.slice(0, 5).map(r => r.data()));

            data = {
                hits: {
                    hits: fiveResults.map(r => ({
                        _source: {
                            title: r.meta.title,
                            href: r.url
                        }
                    })
                    )
                }
            }
        }

        results.innerHTML = '';

        let hits = data.hits.hits;
        var i = 0;
        for (let hit of hits) {
            if (i >= 5) {
                break;
            }
            let a = document.createElement('a');
            a.href = (window.location.origin + hit._source.uri).replace(/\s+/g, '-').replace('(', '').replace(')', '').toLowerCase();
            a.textContent = hit._source.title;
            results.appendChild(a);
            setTimeout(() => {
                a.style.opacity = "1";
                a.style.transform = "translateX(0)";
            }, (75 * (i+1)));
            results.appendChild(document.createElement('br'));
            i++;
        }

        if (hits.length > 0) {
            results.appendChild(document.createElement('hr'));
        }
    });

    searchbar.addEventListener("keydown", function(event) {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();

        let firstResult = results.querySelector('a');
        if (firstResult) {
            window.location.href = firstResult.href;
        }
    });
});
