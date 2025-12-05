# Configuration SEO - Complexe Scolaire Privé Les Dauphins Bleus

## ⚠️ IMPORTANT : Mise à jour du domaine

Tous les fichiers SEO utilisent actuellement le domaine placeholder : `https://www.ecolelesdauphinsbleu.com`

**Vous devez remplacer ce domaine par votre vrai domaine** dans les fichiers suivants :

### Fichiers à mettre à jour :

1. **index.html** - Lignes avec :
   - `og:url`
   - `og:image`
   - `twitter:image`
   - `canonical`
   - Schema.org JSON-LD (`url`, `logo`, `image`)

2. **apropos.html** - Lignes avec :
   - `og:url`
   - `og:image`
   - `canonical`

3. **galerie.html** - Lignes avec :
   - `og:url`
   - `canonical`

4. **contact.html** - Lignes avec :
   - `og:url`
   - `canonical`

5. **politique.html** - Ligne avec :
   - `canonical`

6. **cgu.html** - Ligne avec :
   - `canonical`

7. **sitemap.xml** - Toutes les URLs `<loc>`

8. **robots.txt** - Ligne `Sitemap:`

## Comment trouver votre vrai domaine

1. Cliquez sur votre lien bit.ly : https://bit.ly/ecolelesdauphinsbleu
2. Regardez l'URL dans la barre d'adresse du navigateur
3. C'est votre vrai domaine (ex: `https://username.github.io/ecole-les-dauphins-bleu` ou autre)

## Exemple de remplacement

Si votre vrai domaine est `https://monnom.github.io/ecole-les-dauphins-bleu`, remplacez :

**Avant :**
```html
<meta property="og:url" content="https://www.ecolelesdauphinsbleu.com/" />
```

**Après :**
```html
<meta property="og:url" content="https://monnom.github.io/ecole-les-dauphins-bleu/" />
```

## Vérification

Après avoir mis à jour tous les fichiers :

1. ✅ Vérifiez que toutes les URLs fonctionnent
2. ✅ Testez le sitemap : `votre-domaine.com/sitemap.xml`
3. ✅ Testez robots.txt : `votre-domaine.com/robots.txt`
4. ✅ Soumettez le sitemap à Google Search Console

## Prochaines étapes SEO

1. **Google Search Console** : Ajoutez votre propriété et soumettez le sitemap
2. **Google My Business** : Créez un profil pour l'école
3. **Backlinks** : Obtenez des liens depuis d'autres sites locaux
4. **Contenu régulier** : Publiez des actualités et événements

