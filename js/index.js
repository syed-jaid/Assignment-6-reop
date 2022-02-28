console.log('allah')
// main div 
const mainDiv = document.getElementById('main-div')
// api load 
const loadApi = () => {
    mainDiv.innerHTML = '';
    const inputValue = document.getElementById('input-fild').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayPhoneCard(data))
}

// display phone info in Card
const displayPhoneCard = (data) => {
    const phonearray = data.data;
    // console.log(phonearray)
    phonearray.slice(0, 20).forEach(info => {
        // console.log(info);
        const childDiv = document.createElement('div');
        childDiv.classList.add('col');
        childDiv.innerHTML = `
        <div id="card-div" class="card  mx-auto h-100 w-75">
          <img src="${info.image}" class=" card-img-top h-75 w-100" alt="...">
          <div class="card-body">
            <h4 class="card-title">${info.phone_name}</h4>
            <h4 class="card-title">${info.brand}</h4>
            <button type="button" onclick="phoneDetails('${info.slug}')" id="button-details" class="btn">Details</button>
          </div>
        </div>`;
        mainDiv.appendChild(childDiv);
    });
}
const phoneDetails = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

const displayDetails = (data) => {
    console.log(data.data);
    const mainDetails = document.getElementById('details-div')
    const phoneInfo = data.data;
    const childDiv2 = document.createElement('div');
    childDiv2.innerHTML = `
    <img src="${phoneInfo.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4>name${phoneInfo.name}</h4>
    <h4>brand${phoneInfo.brand}</h4>
    <h6>${phoneInfo.releaseDate}</h6>
    <p>storage:${phoneInfo.mainFeatures.storage}
    <br>
    displaySize:${phoneInfo.mainFeatures.displaySize}
    chipSet:${phoneInfo.mainFeatures.chipSet}
    memory:${phoneInfo.mainFeatures.memory}
    memory:${phoneInfo.mainFeatures.sensors[2]}
    </p>
    </div>`
    mainDetails.appendChild(childDiv2);

}
