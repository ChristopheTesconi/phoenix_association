import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Phoenix Accueil - Lieu de Vie et d\'Accueil',
    short_name: 'Phoenix Accueil',
    description: 'Lieu de Vie et d\'Accueil pour enfants, adolescents et jeunes majeurs en protection de l\'enfance à Rodilhan et Nîmes (Gard)',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdf6e3',
    theme_color: '#b58900',
    icons: [
      {
        src: '/phoenix_fav.JPG',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
