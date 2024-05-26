function afficherApparts(rows) {
    let tableContent = ''; // Initialiser le contenu de la table

    rows.forEach(row => {
        // Construction d'une ligne pour chaque appartement
        tableContent += `
            <tr>
                <td>${row.NUMAPPART}</td>
                <td>${row.TYPAPPART}</td>
                <td>${row.PRIX_LOC}</td>
                <td>${row.PRIX_CHARG}</td>
                <td>${row.RUE}</td>
                <td>${row.ARRONDISSEMENT}</td>
                <td>${row.ETAGE}</td>
                <td>${row.ASCENSEUR}</td>
                <td>${row.PREAVIS}</td>
                <td>${row.DATE_LIBRE}</td>
                <td>${row.NUMEROPROP}</td>
                <td>${row.NUMEROLOC}</td>
            </tr>
        `;
    });

    // Construction de la table avec les en-têtes et le contenu
    const table = `
        <table>
            <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Type</th>
                    <th>Prix Location</th>
                    <th>Prix Charges</th>
                    <th>Rue</th>
                    <th>Arrondissement</th>
                    <th>Étage</th>
                    <th>Ascenseur</th>
                    <th>Préavis</th>
                    <th>Date Libre</th>
                    <th>Numéro Propriétaire</th>
                    <th>Numéro Locataire</th>
                </tr>
            </thead>
            <tbody>
                ${tableContent}
            </tbody>
        </table>
    `;
    const tableauAppartements = document.getElementById('tableauAppartements');
    // Afficher la table dans le document
    tableauAppartements.innerHTML = table;
};

module.exports = afficherApparts;
