
  async function allData(event) {
    try {
      let ele = document.getElementById('search').value;
      console.log(ele);
      let data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${ele}&per_page=6`)
      let res = await data.json();
      console.log(res);
      document.querySelector('.data_area').innerHTML = '';
      for (let x of res) {
        let child = `<p class="list">Name : ${x.name}</p>
        <p class="list">Type : ${x.brewery_type}</p>
        <p class="list">Address : ${x.street}</p>
        <p class="list" >Website : <a target="_blank" href="${x.website_url}">Check our Website</a></p>
        <p class="list">Phone : ${x.phone}</p>
        <p class="list">city : ${x.city}</p>`;
  
        let contentdiv = document.createElement('div');
        contentdiv.setAttribute('class', 'content-parent');
        contentdiv.innerHTML = child;
        document.querySelector('.data_area').append(contentdiv);
      }
    } 
    catch (err) 
    {
      console.log(err);
    }
  }
  

