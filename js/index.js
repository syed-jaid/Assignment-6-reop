console.log('allah')
// main div of card and details
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
    // if input Value is correct
    if (datacall == true) {
        // using foreach to get all inner data of array 
        phonearray.slice(0, 20).forEach(info => {
            // div create 
            const childDiv = document.createElement('div');
            childDiv.classList.add('col');
            // div inner HTML
            childDiv.innerHTML = `
        <div id="card-div" class="card p-2 shadow rounded-3 mx-auto h-100 w-75">
          <img src="${info.image}" class=" card-img-top h-75 w-100" alt="...">
          <div class="card-body">
            <h4 class="card-title"><span class="fw-bold">Name : </span> ${info.phone_name}</h4>
            <h4 class="card-title"><span class="fw-bold">Brand : </span> ${info.brand}</h4>
            <button type="button" onclick="phoneDetails('${info.slug}')" id="button-details" class="btn">Details</button>
          </div>
        </div>`;
            // appending  Child to the main div 
            mainDiv.appendChild(childDiv);
        });
    }
    // if input Value is not correct
    else {
        const mainDetails = document.getElementById('main-div');
        const childh1 = document.createElement('h1');
        childh1.classList.add('class="text-center')
        childh1.innerHTML = `Sorry no phone found`
        mainDetails.appendChild(childh1);
    }
    // show all button  to the div
    const buttonDiv = document.createElement('div')
    buttonDiv.innerHTML = `
    <button type="button" onclick="displayall()" class="btn btn-info ps-3 pe-3 mx-auto d-block">Show all</button>`
    // appendChild condtion 
    if (datacall == true) {
        mainDiv.appendChild(buttonDiv)
    }

}
const phoneDetails = (id) => {
    //    loading data of phone details 
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}
// display Details to the Header 
const displayDetails = (data) => {
    mainDetails.innerHTML = '';
    const phoneInfo = data.data;
    // creating the div 
    const childDiv2 = document.createElement('div');
    console.log(phoneInfo.mainFeatures.displaySize);
    // if release date is empty string 
    if (phoneInfo.releaseDate == '') {
        // seting inner HTML to the details div     
        childDiv2.innerHTML = `
    <div class="border border-white">
        <div>
    <img src="${phoneInfo.image}" class="card-img-top p-2" alt="...">
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
            <span><span class="fw-bold">displaySize:</span>
            ${phoneInfo.mainFeatures.displaySize}</span>
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
    </div>
    </div>`
        mainDetails.appendChild(childDiv2);

    }
    // if release date is string 
    else {
        // seting inner HTML to the details div   
        childDiv2.innerHTML = `
    <div class="border border-white">
            <div>
            <img src="${phoneInfo.image}" class="card-img-top p-2" alt="...">
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
                <span><span class="fw-bold">displaySize:</span>
                ${phoneInfo.mainFeatures.displaySize}</span>
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
        </div>
    </div>`
        mainDetails.appendChild(childDiv2);
    }
}
// showing all phone to the div 
const displayall = () => {
    mainDiv.innerHTML = '';
    mainDetails.innerHTML = '';
    // loding phone data 
    const inputValue = document.getElementById('input-fild').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayallCard(data))
}
// display phone info in Card
const displayallCard = (data) => {
    const phonearray = data.data;
    // using foreach to get all inner data of array  
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
