console.log('allah')
// main div 
const mainDiv = document.getElementById('main-div')
// api load 
const loadApi = () => {
    const inputValue = document.getElementById('input-fild').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then((res) => res.json())
        .then(data => displayPhoneCard(data))
}
// display phone info in Card
const displayPhoneCard = (data) => {
    // console.log(data)
    const phonearray = data.data;
    console.log(phonearray);
    phonearray.forEach(info => {
        console.log(info)
        const childDiv = document.createElement('div');
        childDiv.classList.add('col');
        childDiv.innerHTML = `
        <div id="card-div" class="card mx-auto h-100 w-75">
          <img src="${info.image}" class="card-img-top h-75 w-100" alt="...">
          <div class="card-body">
            <h3 class="card-title">${info.phone_name}</h3>
            <h3 class="card-title">${info.brand}</h3>
            <button type="button" id="button-details" class="btn">Details</button>
          </div>
        </div>`;
        mainDiv.appendChild(childDiv);
    });

}
