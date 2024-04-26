// const allSchemes = [
//     { name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)', link: 'https://pmkisan.gov.in/' },
//     { name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', link: 'https://pmfby.gov.in/' },
//     { name: 'National Mission for Sustainable Agriculture (NMSA)', link: 'https://nmsa.dac.gov.in/' },
//     { name: 'Paramparagat Krishi Vikas Yojana (PKVY)', link: 'https://www.pmkvyofficial.org/' },
//     { name: 'Soil Health Card Scheme', link: 'https://soilhealth.dac.gov.in/' },
//     { name: 'Rashtriya Krishi Vikas Yojana (RKVY)', link: 'https://rkvy.nic.in/' },
//     { name: 'National Livestock Mission (NLM)', link: 'https://nlm.udyamimitra.in/' },
//     { name: 'National Beekeeping and Honey Mission (NBHM)', link: 'https://nbb.gov.in/default.html' },
//     { name: 'Animal Husbandry Infrastructure Development Fund (AHIDF)', link: 'https://ahidf.udyamimitra.in/' },
//     { name: 'Kisan Credit Card (KCC)', link: 'https://upagripardarshi.gov.in/staticpages/KisanCreditCard.aspx' },
// ];

const allNgos = [
    { name: 'Aahwahan', link: 'https://www.aahwahan.com/' },
    { name: 'End Poverty', link: 'https://www.endpoverty.org.in/' },
    { name: 'Swades Foundation', link: 'https://swadesfoundation.org/' },
    { name: 'Universal Versatile Society', link: 'https://uvsociety.org/home' },
    { name: 'Dilasa', link: 'https://dilasa.org/' },
    { name: 'Watershed Organization Trust ', link: 'https://wotr.org/' },
    { name: 'Vrutti', link: 'https://vruttiimpactcatalysts.org/vrutti/' },
    { name: 'BAIF Development Research Foundation', link: 'https://www.baif.org.in/' },
    { name: 'Nav Bharat Jagriti Kendra (NBJK)', link: 'https://www.nbjk.org/' },
    // Add more NGOs as needed
];

const allSchemes = [
    { name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)', link: 'https://www.youtube.com/watch?v=beOsC0dhncc' },
    { name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', link: 'https://www.youtube.com/watch?v=kAlNM6G6cC4' },
    { name: 'National Mission for Sustainable Agriculture (NMSA)', link: 'https://www.youtube.com/watch?v=SFKz_aEFfZw' },
    { name: 'Paramparagat Krishi Vikas Yojana (PKVY)', link: 'https://www.youtube.com/watch?v=_JTaN927MKc' },
    { name: 'Soil Health Card Scheme', link: 'https://www.youtube.com/watch?v=ViYTVlOA1FY' },
    { name: 'Rashtriya Krishi Vikas Yojana (RKVY)', link: 'https://www.youtube.com/watch?v=beOsC0dhncc' },
    { name: 'National Livestock Mission (NLM)', link: 'https://youtu.be/jGMnxpLjQ4s?si=uSqIPJ_xkuu0ezfp' },
    { name: 'National Beekeeping and Honey Mission (NBHM)', link: 'https://www.youtube.com/watch?v=beOsC0dhncc' },
    { name: 'Animal Husbandry Infrastructure Development Fund (AHIDF)', link: 'https://www.youtube.com/watch?v=beOsC0dhncc' },
    { name: 'Kisan Credit Card (KCC)', link: 'https://www.youtube.com/watch?v=beOsC0dhncc' },
];


window.onload = function() {
    const schemesElement = document.querySelector('.schemes');
    const ngosElement = document.querySelector('.ngos');

    const schemesHtml = allSchemes.map(scheme => `<p><a href="${scheme.link}" target="_blank">${scheme.name}</a></p>`).join('');
    const ngosHtml = allNgos.map(ngo => `<p><a href="${ngo.link}" target="_blank">${ngo.name}</a></p>`).join('');

    schemesElement.innerHTML = schemesHtml;
    ngosElement.innerHTML = ngosHtml;
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}