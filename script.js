// Global variables
let allCountries = [];
const countriesContainer = document.querySelector('.countries-container');
const filterSpan = document.querySelector('.filter');
const regionsDiv = document.querySelector('.regions');
const searchInput = document.getElementById('search-input');
const searchTrigger = document.getElementById('search-trigger');

// Toggle dropdown visibility
filterSpan.addEventListener('click', function(e) {
    e.stopPropagation();
    regionsDiv.style.display = regionsDiv.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    regionsDiv.style.display = 'none';
});

// Prevent dropdown from closing when clicking inside
regionsDiv.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Function to fetch countries from the API
async function fetchCountries() {
    try {
        console.log('Fetching countries...');
        const response = await fetch('https://restcountries.com/v3.1/all');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Countries fetched:', data.length);
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        // If API fails, use mock data for demonstration
        return getMockCountries();
    }
}

// Mock data fallback
function getMockCountries() {
    console.log('Using mock data...');
    return [
        // Africa
        {
            name: { common: "Rwanda" },
            flags: { png: "https://flagcdn.com/w320/rw.png" },
            population: 12952218,
            region: "Africa",
            capital: ["Kigali"],
            languages: { eng: "English", fra: "French", kin: "Kinyarwanda" }
        },
        {
            name: { common: "Nigeria" },
            flags: { png: "https://flagcdn.com/w320/ng.png" },
            population: 206139589,
            region: "Africa",
            capital: ["Abuja"],
            languages: { eng: "English" }
        },
        {
            name: { common: "South Africa" },
            flags: { png: "https://flagcdn.com/w320/za.png" },
            population: 59308690,
            region: "Africa",
            capital: ["Cape Town", "Pretoria", "Bloemfontein"],
            languages: { afr: "Afrikaans", eng: "English", zul: "Zulu" }
        },
        {
            name: { common: "Kenya" },
            flags: { png: "https://flagcdn.com/w320/ke.png" },
            population: 53771296,
            region: "Africa",
            capital: ["Nairobi"],
            languages: { eng: "English", swa: "Swahili" }
        },
        {
            name: { common: "Ethiopia" },
            flags: { png: "https://flagcdn.com/w320/et.png" },
            population: 114963588,
            region: "Africa",
            capital: ["Addis Ababa"],
            languages: { amh: "Amharic" }
        },
        {
            name: { common: "Ghana" },
            flags: { png: "https://flagcdn.com/w320/gh.png" },
            population: 31072940,
            region: "Africa",
            capital: ["Accra"],
            languages: { eng: "English" }
        },
        {
            name: { common: "Egypt" },
            flags: { png: "https://flagcdn.com/w320/eg.png" },
            population: 102334404,
            region: "Africa",
            capital: ["Cairo"],
            languages: { ara: "Arabic" }
        },
        {
            name: { common: "Morocco" },
            flags: { png: "https://flagcdn.com/w320/ma.png" },
            population: 36910560,
            region: "Africa",
            capital: ["Rabat"],
            languages: { ara: "Arabic", ber: "Berber" }
        },
        {
            name: { common: "Uganda" },
            flags: { png: "https://flagcdn.com/w320/ug.png" },
            population: 45741007,
            region: "Africa",
            capital: ["Kampala"],
            languages: { eng: "English", swa: "Swahili" }
        },
        {
            name: { common: "Tanzania" },
            flags: { png: "https://flagcdn.com/w320/tz.png" },
            population: 59734218,
            region: "Africa",
            capital: ["Dodoma"],
            languages: { eng: "English", swa: "Swahili" }
        },
        
        // Europe
        {
            name: { common: "United Kingdom" },
            flags: { png: "https://flagcdn.com/w320/gb.png" },
            population: 67886011,
            region: "Europe",
            capital: ["London"],
            languages: { eng: "English" }
        },
        {
            name: { common: "France" },
            flags: { png: "https://flagcdn.com/w320/fr.png" },
            population: 65273511,
            region: "Europe",
            capital: ["Paris"],
            languages: { fra: "French" }
        },
        {
            name: { common: "Germany" },
            flags: { png: "https://flagcdn.com/w320/de.png" },
            population: 83783942,
            region: "Europe",
            capital: ["Berlin"],
            languages: { deu: "German" }
        },
        {
            name: { common: "Italy" },
            flags: { png: "https://flagcdn.com/w320/it.png" },
            population: 60461826,
            region: "Europe",
            capital: ["Rome"],
            languages: { ita: "Italian" }
        },
        {
            name: { common: "Spain" },
            flags: { png: "https://flagcdn.com/w320/es.png" },
            population: 46754778,
            region: "Europe",
            capital: ["Madrid"],
            languages: { spa: "Spanish" }
        },
        {
            name: { common: "Netherlands" },
            flags: { png: "https://flagcdn.com/w320/nl.png" },
            population: 17134872,
            region: "Europe",
            capital: ["Amsterdam"],
            languages: { nld: "Dutch" }
        },
        {
            name: { common: "Switzerland" },
            flags: { png: "https://flagcdn.com/w320/ch.png" },
            population: 8654622,
            region: "Europe",
            capital: ["Bern"],
            languages: { deu: "German", fra: "French", ita: "Italian", roh: "Romansh" }
        },
        {
            name: { common: "Sweden" },
            flags: { png: "https://flagcdn.com/w320/se.png" },
            population: 10099265,
            region: "Europe",
            capital: ["Stockholm"],
            languages: { swe: "Swedish" }
        },
        
        // Asia
        {
            name: { common: "Japan" },
            flags: { png: "https://flagcdn.com/w320/jp.png" },
            population: 126476461,
            region: "Asia",
            capital: ["Tokyo"],
            languages: { jpn: "Japanese" }
        },
        {
            name: { common: "China" },
            flags: { png: "https://flagcdn.com/w320/cn.png" },
            population: 1439323776,
            region: "Asia",
            capital: ["Beijing"],
            languages: { zho: "Chinese" }
        },
        {
            name: { common: "India" },
            flags: { png: "https://flagcdn.com/w320/in.png" },
            population: 1380004385,
            region: "Asia",
            capital: ["New Delhi"],
            languages: { eng: "English", hin: "Hindi" }
        },
        {
            name: { common: "South Korea" },
            flags: { png: "https://flagcdn.com/w320/kr.png" },
            population: 51269185,
            region: "Asia",
            capital: ["Seoul"],
            languages: { kor: "Korean" }
        },
        {
            name: { common: "Thailand" },
            flags: { png: "https://flagcdn.com/w320/th.png" },
            population: 69799978,
            region: "Asia",
            capital: ["Bangkok"],
            languages: { tha: "Thai" }
        },
        {
            name: { common: "Singapore" },
            flags: { png: "https://flagcdn.com/w320/sg.png" },
            population: 5850342,
            region: "Asia",
            capital: ["Singapore"],
            languages: { chi: "Chinese", eng: "English", may: "Malay", tam: "Tamil" }
        },
        {
            name: { common: "Indonesia" },
            flags: { png: "https://flagcdn.com/w320/id.png" },
            population: 273523615,
            region: "Asia",
            capital: ["Jakarta"],
            languages: { ind: "Indonesian" }
        },
        {
            name: { common: "Malaysia" },
            flags: { png: "https://flagcdn.com/w320/my.png" },
            population: 32365999,
            region: "Asia",
            capital: ["Kuala Lumpur"],
            languages: { eng: "English", may: "Malay" }
        },
        
        // Americas
        {
            name: { common: "United States" },
            flags: { png: "https://flagcdn.com/w320/us.png" },
            population: 331002651,
            region: "Americas",
            capital: ["Washington, D.C."],
            languages: { eng: "English" }
        },
        {
            name: { common: "Canada" },
            flags: { png: "https://flagcdn.com/w320/ca.png" },
            population: 37742154,
            region: "Americas", 
            capital: ["Ottawa"],
            languages: { eng: "English", fra: "French" }
        },
        {
            name: { common: "Brazil" },
            flags: { png: "https://flagcdn.com/w320/br.png" },
            population: 212559417,
            region: "Americas",
            capital: ["Brasília"],
            languages: { por: "Portuguese" }
        },
        {
            name: { common: "Mexico" },
            flags: { png: "https://flagcdn.com/w320/mx.png" },
            population: 128932753,
            region: "Americas",
            capital: ["Mexico City"],
            languages: { spa: "Spanish" }
        },
        {
            name: { common: "Argentina" },
            flags: { png: "https://flagcdn.com/w320/ar.png" },
            population: 45195774,
            region: "Americas",
            capital: ["Buenos Aires"],
            languages: { spa: "Spanish" }
        },
        {
            name: { common: "Chile" },
            flags: { png: "https://flagcdn.com/w320/cl.png" },
            population: 19116201,
            region: "Americas",
            capital: ["Santiago"],
            languages: { spa: "Spanish" }
        },
        {
            name: { common: "Colombia" },
            flags: { png: "https://flagcdn.com/w320/co.png" },
            population: 50882891,
            region: "Americas",
            capital: ["Bogotá"],
            languages: { spa: "Spanish" }
        },
        {
            name: { common: "Peru" },
            flags: { png: "https://flagcdn.com/w320/pe.png" },
            population: 32971854,
            region: "Americas",
            capital: ["Lima"],
            languages: { aym: "Aymara", que: "Quechua", spa: "Spanish" }
        },
        
        // Oceania
        {
            name: { common: "Australia" },
            flags: { png: "https://flagcdn.com/w320/au.png" },
            population: 25499884,
            region: "Oceania",
            capital: ["Canberra"],
            languages: { eng: "English" }
        },
        {
            name: { common: "New Zealand" },
            flags: { png: "https://flagcdn.com/w320/nz.png" },
            population: 4822233,
            region: "Oceania",
            capital: ["Wellington"],
            languages: { eng: "English", mri: "Māori", nzs: "New Zealand Sign Language" }
        },
        {
            name: { common: "Fiji" },
            flags: { png: "https://flagcdn.com/w320/fj.png" },
            population: 896445,
            region: "Oceania",
            capital: ["Suva"],
            languages: { eng: "English", fij: "Fijian", hif: "Fiji Hindi" }
        },
        {
            name: { common: "Papua New Guinea" },
            flags: { png: "https://flagcdn.com/w320/pg.png" },
            population: 8947024,
            region: "Oceania",
            capital: ["Port Moresby"],
            languages: { eng: "English", hmo: "Hiri Motu", tpi: "Tok Pisin" }
        }
    ];
}

// Function to create country card HTML
function createCountryCard(country) {
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
    const capital = country.capital ? country.capital[0] : 'N/A';
    const population = country.population ? country.population.toLocaleString() : 'N/A';
    
    return `
        <img src="${country.flags.png}" alt="${country.name.common} Flag" onerror="this.style.display='none'">
        <h2>${country.name.common}</h2>
        <p><span>Population:</span> ${population}</p>
        <p><span>Region:</span> ${country.region || 'N/A'}</p>
        <p><span>Capital:</span> ${capital}</p>
        <p><span>Languages:</span> ${languages}</p>
    `;
}

// Function to display countries
function displayCountries(countries) {
    countriesContainer.innerHTML = '';
    
    if (countries.length === 0) {
        countriesContainer.innerHTML = '<div class="loading">No countries found.</div>';
        return;
    }

    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = createCountryCard(country);
        countriesContainer.appendChild(countryCard);
    });
}

// Function to populate countries
async function populateCountries() {
    console.log('Populating countries...');
    allCountries = await fetchCountries();
    console.log('All countries loaded:', allCountries.length);
    displayCountries(allCountries);
}

// Search functionality
function searchCountries() {
    const searchValue = searchInput.value.toLowerCase().trim();
    
    if (searchValue === '') {
        displayCountries(allCountries);
        return;
    }

    const filteredCountries = allCountries.filter(country => 
        country.name.common.toLowerCase().includes(searchValue) ||
        (country.capital && country.capital[0].toLowerCase().includes(searchValue)) ||
        country.region.toLowerCase().includes(searchValue)
    );

    displayCountries(filteredCountries);
}

// Search event listeners
searchTrigger.addEventListener('click', searchCountries);

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCountries();
    }
});

// Real-time search as user types
searchInput.addEventListener('input', function() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(searchCountries, 300);
});

// Region filtering functionality
regionsDiv.addEventListener('click', function(event) {
    if (event.target.tagName === 'P') {
        const selectedRegion = event.target.dataset.region;
        
        let filteredCountries;
        if (selectedRegion === 'all') {
            filteredCountries = allCountries;
        } else {
            filteredCountries = allCountries.filter(country => 
                country.region.toLowerCase() === selectedRegion.toLowerCase()
            );
        }
        
        displayCountries(filteredCountries);
        regionsDiv.style.display = 'none';
        
        // Update filter button text
        filterSpan.querySelector('p').textContent = event.target.textContent;
    }
});

// Initialize the app
populateCountries();