/**
 * journees.js
 * Base de données complète extraite du calendrier annuel.
 * Format de clé : "JJ-MM" pour une détection automatique par la date système.
 */
const journeesMondiales = {
    // JANVIER
    "01-01": ["Jour de l'An (Férié)"],
    "02-01": ["Journée de motivation et d’inspiration"],
    "03-01": ["Fête du sommeil"],
    "06-01": ["Journée des câlins"],
    "16-01": ["Journée pour ne rien faire du tout"],
    "19-01": ["Blue Monday (Date mobile)"],
    "20-01": ["Journée pour les amoureux du fromage"],
    "21-01": ["Journée internationale des pantalons de survêtement"],
    "26-01": ["Fête des conjoints"],

    // FÉVRIER
    "02-02": ["Semaine des enseignants (Début)"],
    "05-02": ["Journée mondiale du Nutella"],
    "13-02": ["Journée mondiale de la radio"],
    "14-02": ["Saint-Valentin"],
    "18-02": ["Journée pour boire du vin"],
    "22-02": ["Journée mondiale du yoga"],

    // MARS
    "04-03": ["Journée de débranchement"],
    "08-03": ["Journée internationale des droits des femmes"],
    "20-03": ["Journée internationale de la Francophonie", "Journée mondiale du bonheur"],
    "21-03": ["Journée mondiale de la poésie"],

    // AOÛT (Dates extraites de l'Excel)
    "07-08": ["Journée mondiale de l’amitié", "Journée nationale des sœurs"],
    "15-08": ["Journée nationale de la relaxation"],
    "19-08": ["Journée mondiale de la photographie"],
    "20-08": ["Journée nationale de la radio"],
    "26-08": ["Journée nationale du chien"],

    // SEPTEMBRE
    "05-09": ["Journée pour être en retard à quelque chose"],
    "07-09": ["Fête du Travail (Férié)"],
    "20-09": ["Semaine internationale du bonheur au travail"],
    "28-09": ["Journée du bon voisinage"],
    "30-09": ["Journée de la vérité et de la réconciliation", "Journée internationale du podcast"],

    // OCTOBRE
    "01-10": ["Journée internationale du café"],
    "05-10": ["Journée mondiale des profs"],
    "11-10": ["Journée internationale de la fille"],
    "12-10": ["Action de grâce (Férié - Date mobile)"],
    "25-10": ["Journée mondiale des pâtes"],
    "31-10": ["Halloween"],

    // NOVEMBRE
    "03-11": ["Journée de sensibilisation au stress"],
    "11-11": ["Jour du Souvenir"],
    "19-11": ["Journée internationale de l'homme"],
    "20-11": ["Journée mondiale de l'enfance"],

    // DÉCEMBRE
    "01-12": ["Journée mondiale de lutte contre le Sida"],
    "08-12": ["Journée mondiale du climat"],
    "21-12": ["Solstice d'hiver (Jour le plus court)"],
    "24-12": ["Veille de Noël"],
    "25-12": ["Noël (Férié)"],
    "31-12": ["Veille du jour de l'An"]
};
