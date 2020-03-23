const setEditModal = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/company/${id}`, false);
    xhttp.send();

    const company = JSON.parse(xhttp.responseText);

    const {
        name,
        address,
        city,
        country,
        email,
        phone
    } = company;

    document.getElementById('name').value = name;
    document.getElementById('address').value = address;
    document.getElementById('city').value = city;
    document.getElementById('country').value = country;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    document.getElementById('id').value = id;

    document.getElementById('editForm').action = `http://localhost:3000/company/${id}`;
}

const deleteCompany = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/company/${id}`, false);
    xhttp.send();

    location.reload();
}

const loadCompanies = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/company`, false);
    xhttp.send();

    const companies = JSON.parse(xhttp.responseText);
    
    for (let company of companies) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${company.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${company.id}</h6>

                        <div>City: ${company.city}</div>
                        <div>Email: ${company.email}</div>
                        <div>Phone: ${company.phone}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editCompanyModal" onClick="setEditModal(${company.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `
        document.getElementById('companies').innerHTML = document.getElementById('companies').innerHTML + x;
    }
}

loadCompanies();