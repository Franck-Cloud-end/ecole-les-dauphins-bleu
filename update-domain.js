/**
 * Script pour mettre à jour le domaine dans tous les fichiers SEO
 * 
 * UTILISATION:
 * 1. Remplacez 'VOTRE_DOMAINE' par votre vrai domaine (ex: 'https://monnom.github.io/ecole-les-dauphins-bleu')
 * 2. Exécutez: node update-domain.js
 * 
 * OU utilisez un éditeur de texte pour faire "Rechercher/Remplacer" :
 * - Rechercher: https://www.ecolelesdauphinsbleu.com
 * - Remplacer par: VOTRE_DOMAINE
 */

const fs = require('fs');
const path = require('path');

// ⚠️ REMPLACEZ CE DOMAINE PAR LE VÔTRE
const NOUVEAU_DOMAINE = 'https://www.ecolelesdauphinsbleu.com'; // Changez cette ligne !
const ANCIEN_DOMAINE = 'https://www.ecolelesdauphinsbleu.com';

const fichiers = [
  'index.html',
  'apropos.html',
  'galerie.html',
  'contact.html',
  'politique.html',
  'cgu.html',
  'sitemap.xml',
  'robots.txt'
];

function remplacerDomaine(fichier) {
  const chemin = path.join(__dirname, fichier);
  
  if (!fs.existsSync(chemin)) {
    console.log(`⚠️  Fichier non trouvé: ${fichier}`);
    return;
  }
  
  let contenu = fs.readFileSync(chemin, 'utf8');
  const occurrences = (contenu.match(new RegExp(ANCIEN_DOMAINE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  
  if (occurrences > 0) {
    contenu = contenu.replace(new RegExp(ANCIEN_DOMAINE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), NOUVEAU_DOMAINE);
    fs.writeFileSync(chemin, contenu, 'utf8');
    console.log(`✅ ${fichier}: ${occurrences} occurrence(s) remplacée(s)`);
  } else {
    console.log(`ℹ️  ${fichier}: Aucune occurrence trouvée`);
  }
}

console.log('🔄 Mise à jour des domaines...\n');
console.log(`Ancien domaine: ${ANCIEN_DOMAINE}`);
console.log(`Nouveau domaine: ${NOUVEAU_DOMAINE}\n`);

fichiers.forEach(remplacerDomaine);

console.log('\n✅ Mise à jour terminée !');
console.log('\n📋 Prochaines étapes:');
console.log('1. Vérifiez que toutes les URLs fonctionnent');
console.log('2. Testez: votre-domaine.com/sitemap.xml');
console.log('3. Testez: votre-domaine.com/robots.txt');
console.log('4. Soumettez le sitemap à Google Search Console');

