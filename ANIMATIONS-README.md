# 🎬 Système d'Animations de Transition de Pages

## 📋 Vue d'ensemble

Ce système d'animations de transition de pages offre une expérience utilisateur fluide et engageante lors de la navigation entre les différentes pages de l'application. Il inclut des animations de chargement personnalisées, des effets visuels et un blocage temporaire de l'interface pendant les transitions.

## ✨ Fonctionnalités

### 🔄 Animations de Transition
- **Transition fluide** entre les pages avec des effets de fondu et de glissement
- **Durée personnalisable** des animations selon le type de page
- **Animations d'entrée et de sortie** coordonnées

### 🎯 Indicateur de Chargement Intelligent
- **Spinner animé** avec couleurs adaptées au type de page
- **Messages contextuels** selon la destination
- **Barre de progression** avec gradient coloré
- **Particules flottantes** pour un effet visuel immersif

### 🎨 Personnalisation par Type de Page
- **Accueil** : Jaune (`#FBBF24`) - "Retour à l'accueil..."
- **Omra & Hajj** : Vert (`#10B981`) - "Préparation de votre voyage spirituel..."
- **Voyages d'Affaires** : Bleu (`#3B82F6`) - "Chargement des solutions d'affaires..."
- **Hôtels de Luxe** : Violet (`#8B5CF6`) - "Accès aux hôtels de luxe..."
- **Voyages Sur Mesure** : Vert (`#10B981`) - "Création de votre voyage sur mesure..."

## 🛠️ Architecture Technique

### Composants Principaux

#### 1. `PageTransition.tsx`
- Composant principal gérant les transitions
- Intègre le hook personnalisé `usePageTransition`
- Affiche l'overlay de chargement avec animations

#### 2. `usePageTransition.ts`
- Hook personnalisé pour la logique de transition
- Gestion des événements de routage Next.js
- Configuration adaptative selon le type de page
- Temps de chargement minimum configurable

#### 3. `LoadingSpinner.tsx`
- Spinner animé avec double rotation
- Tailles configurables (sm, md, lg)
- Couleurs adaptées au contexte
- Point central pulsant

#### 4. `FloatingParticles.tsx`
- Particules animées en arrière-plan
- Mouvement vertical avec opacité variable
- Couleurs synchronisées avec le thème de la page

#### 5. `TransitionDemo.tsx`
- Composant de test pour les transitions
- Boutons de navigation rapide
- Indicateur de page active

### Configuration

```typescript
interface TransitionConfig {
  duration: number;           // Durée de l'animation (ms)
  showProgress: boolean;      // Afficher la barre de progression
  minLoadingTime: number;     // Temps minimum de chargement (ms)
  customMessage?: string;     // Message personnalisé
}
```

## 🚀 Utilisation

### Installation Automatique
Le système est automatiquement intégré dans `_app.tsx` :

```tsx
import PageTransition from '../components/PageTransition';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}
```

### Personnalisation

Pour personnaliser les animations :

```tsx
const { isLoading, loadingMessage, spinnerColor } = usePageTransition({
  minLoadingTime: 1200,  // Chargement minimum de 1.2s
  showProgress: true,    // Afficher la barre de progression
  customMessage: "Chargement personnalisé..."
});
```

## 🎨 Styles CSS

Les animations utilisent :
- **Framer Motion** pour les animations React
- **Tailwind CSS** pour le styling
- **CSS personnalisé** pour les effets spéciaux

### Classes CSS Personnalisées
```css
.loading-shimmer     /* Effet de brillance */
.loading-backdrop    /* Flou d'arrière-plan */
.page-enter         /* Animation d'entrée */
.page-exit          /* Animation de sortie */
```

## 🔧 Dépendances

- `framer-motion` : Animations React avancées
- `next/router` : Gestion du routage Next.js
- `react` : Hooks et composants

## 📱 Responsive Design

Le système s'adapte automatiquement :
- **Mobile** : Animations simplifiées
- **Tablet** : Effets intermédiaires
- **Desktop** : Animations complètes

## ⚡ Performance

### Optimisations
- **Lazy loading** des composants d'animation
- **Memoization** des particules
- **Cleanup** automatique des event listeners
- **Temps de chargement minimum** pour éviter les flashs

### Métriques
- Temps de transition : 400-1000ms
- Particules : 15 maximum
- Taille bundle : +~15KB (gzipped)

## 🧪 Test des Animations

Utilisez le composant `TransitionDemo` visible en bas à droite de la page d'accueil pour tester rapidement toutes les transitions.

## 🔮 Améliorations Futures

- [ ] Animations de transition spécifiques par route
- [ ] Préchargement intelligent des pages
- [ ] Animations de skeleton loading
- [ ] Support des gestes tactiles
- [ ] Mode sombre pour les animations
- [ ] Analytics des temps de chargement

## 🐛 Dépannage

### Problèmes Courants

1. **Animations saccadées** : Vérifier les performances du navigateur
2. **Chargement trop long** : Ajuster `minLoadingTime`
3. **Couleurs incorrectes** : Vérifier la détection du type de page

### Debug

Activez les logs de développement :
```typescript
const { isLoading, pageType } = usePageTransition();
console.log('Page type:', pageType, 'Loading:', isLoading);
```

---

*Développé avec ❤️ pour une expérience utilisateur exceptionnelle*