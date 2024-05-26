const afficherApparts = require('C:/Users/kevin/electron/controleur/affichageAppartements');
function getFilteredAppartements(minPrice,maxPrice,typAppart,arrondissement,etage,ascenseur) {

    const mysql = require('mysql');
    
    let sql = 'SELECT * FROM appartements WHERE 1';

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gestion_location'
    });
    
    connection.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données :', err);
            return;
        }
        console.log('Connexion à la base de données réussie.');
    });

    if (minPrice && minPrice !== 0 && maxPrice && maxPrice !== 2000) {
        sql += ' AND PRIX_LOC BETWEEN ? AND ?';
        sql = sql.replace('?', minPrice);
        sql = sql.replace('?', maxPrice);
    }

    if (typAppart && typAppart !== '--') {
        sql += ' AND TYPAPPART = ?';
        sql = sql.replace('?', "'" + typAppart + "'");;
    }

    if (arrondissement && arrondissement !== '--') {
        sql += ' AND ARRONDISSEMENT = ?';
        sql = sql.replace('?', arrondissement);
    }

    if (etage && etage !== '--') {
        sql += ' AND ETAGE = ?';
        sql = sql.replace('?', etage);
    }

    if (ascenseur && ascenseur==='Oui') {
        sql += ' AND ASCENSEUR = 1';
    }
    else if (ascenseur && ascenseur==='Non') {
        sql += ' AND ASCENSEUR = 0';
    }
    else{
        
    }

    console.log(sql);
    connection.query(sql, [true], (error, results) => {
        if (error) return console.error(error.message);
        console.log(results);
        afficherApparts(results);
      })
    
    };
 
module.exports = getFilteredAppartements;
