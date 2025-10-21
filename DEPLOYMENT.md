# Déploiement et Configuration

## Instructions de déploiement

### 1. Build de production
```bash
npm run build
```

### 2. Fichiers générés
Le dossier `dist/` contient tous les fichiers optimisés pour la production.

### 3. Configuration serveur web

Pour Apache, créez un fichier `.htaccess` :
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache des assets
<filesMatch ".(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
    ExpiresActive on
    ExpiresDefault "access plus 1 month"
</filesMatch>
```

Pour Nginx :
```nginx
server {
    listen 80;
    server_name itsrealfortune.fr;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }
}
```

### 4. Variables d'environnement
Aucune variable d'environnement n'est requise pour la production basique.

### 5. SSL/HTTPS
Assurez-vous que le certificat SSL est configuré pour sécuriser le site.

## Optimisations incluses

- Minification CSS et JavaScript
- Tree-shaking pour réduire la taille des bundles
- Optimisation des images (formats modernes)
- Lazy loading des composants
- Cache des assets statiques