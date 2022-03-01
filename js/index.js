console.log('allah')
// main div 
const mainDiv = document.getElementById('main-div')
const mainDetails = document.getElementById('details-div')
// api load 
const loadApi = () => {
    mainDiv.innerHTML = '';
    mainDetails.innerHTML = '';
    const inputValue = document.getElementById('input-fild').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayPhoneCard(data))
}

// display phone info in Card
const displayPhoneCard = (data) => {
    const datacall = data.status;
    const phonearray = data.data;
    if (datacall == true) {
        phonearray.slice(0, 20).forEach(info => {
            const childDiv = document.createElement('div');
            childDiv.classList.add('col');
            childDiv.innerHTML = `
        <div id="card-div" class="card  mx-auto h-100 w-75">
          <img src="${info.image}" class=" card-img-top h-75 w-100" alt="...">
          <div class="card-body">
            <h4 class="card-title"><span class="fw-bold">Name : </span> ${info.phone_name}</h4>
            <h4 class="card-title"><span class="fw-bold">Brand : </span> ${info.brand}</h4>
            <button type="button" onclick="phoneDetails('${info.slug}')" id="button-details" class="btn">Details</button>
          </div>
        </div>`;
            mainDiv.appendChild(childDiv);
        });
    }
    else {
        const mainDetails = document.getElementById('main-div');
        const childh1 = document.createElement('h1');
        childh1.classList.add('class="text-center')
        childh1.innerHTML = `Sorry no phone found`
        mainDetails.appendChild(childh1);
    }
    const buttonDiv = document.createElement('div')
    buttonDiv.innerHTML = `<button onclick="displayall()">Show all</button>`
    if (datacall == true) {
        mainDiv.appendChild(buttonDiv)
    }

}
const phoneDetails = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

const displayDetails = (data) => {
    mainDetails.innerHTML = '';
    const phoneInfo = data.data;
    const childDiv2 = document.createElement('div');
    if (phoneInfo.releaseDate == '') {
        childDiv2.innerHTML = `
    <div>
    <img src="${phoneInfo.image}" class="card-img-top" alt="...">
    </div>

    <div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="fw-bold fs-5">Name : </span>${phoneInfo.name}</li>
        <li class="list-group-item"><span class="fw-bold fs-5">Brand : </span>${phoneInfo.brand}</li>
        <li class="list-group-item"><span class="fw-bold fs-5">releaseDate : </span>No releaseDate </li>
        <li class="list-group-item">
            <span class="fs-5 fw-bold">mainFeatures</span>
            <br>
            <span><span class="fw-bold">storage:</span>${phoneInfo.mainFeatures.storage}</span>
            <br>
            <span><span class="fw-bold">chipSet:</span>${phoneInfo.mainFeatures.chipSet}</span>
            <br>
            <span><span class="fw-bold">memory:</span>${phoneInfo.mainFeatures.memory}</span>
        </li>
        <li class="list-group-item">
            <span class="fs-5 fw-bold">Sensors:</span>
            <br>
            <span><span class="fw-bold"></span>
            ${phoneInfo.mainFeatures.sensors}</span>
        </li>
    </ul>
    </div>`
        mainDetails.appendChild(childDiv2);

    }
    else {
        childDiv2.innerHTML = `
    <div>
    <img src="${phoneInfo.image}" class="card-img-top" alt="...">
    </div>

    <div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="fw-bold fs-5">Name : </span>${phoneInfo.name}</li>
        <li class="list-group-item"><span class="fw-bold fs-5">Brand : </span>${phoneInfo.brand}</li>
        <li class="list-group-item"><span class="fw-bold fs-5">releaseDate : </span>${phoneInfo.releaseDate}</li>
        <li class="list-group-item">
            <span class="fs-5 fw-bold">mainFeatures</span>
            <br>
            <span><span class="fw-bold">storage:</span>${phoneInfo.mainFeatures.storage}</span>
            <br>
            <span><span class="fw-bold">chipSet:</span>${phoneInfo.mainFeatures.chipSet}</span>
            <br>
            <span><span class="fw-bold">memory:</span>${phoneInfo.mainFeatures.memory}</span>
        </li>
        <li class="list-group-item">
            <span class="fs-5 fw-bold">Sensors:</span>
            <br>
            <span><span class="fw-bold"></span>
            ${phoneInfo.mainFeatures.sensors}</span>
        </li>
    </ul>
    </div>`
        mainDetails.appendChild(childDiv2);
    }


}
const displayall = () => {

    mainDiv.innerHTML = '';
    mainDetails.innerHTML = '';
    const inputValue = document.getElementById('input-fild').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayallCard(data))
}
// display phone info in Card
const displayallCard = (data) => {
    const phonearray = data.data;
    phonearray.forEach(info => {
        const childDiv = document.createElement('div');
        childDiv.classList.add('col');
        childDiv.innerHTML = `
            <div id="card-div" class="card  mx-auto h-100 w-75">
              <img src="${info.image}" class=" card-img-top h-75 w-100" alt="...">
              <div class="card-body">
                <h4 class="card-title"><span class="fw-bold">Name : </span> ${info.phone_name}</h4>
                <h4 class="card-title"><span class="fw-bold">Brand : </span> ${info.brand}</h4>
                <button type="button" onclick="phoneDetails('${info.slug}')" id="button-details" class="btn">Details</button>
              </div>
            </div>`;
        mainDiv.appendChild(childDiv);
    });
}
