export interface Movie {
  title: string;
  year?: string;
  duration?: string;
  poster?: string;
  icon?: string;
  genre?: string;
  url?: string;
  description?: string;
  rating?: number;
  director?: string;
  cast?: string[];
  releaseDate?: Date;
  isFavorite?: boolean;
}

export interface MovieSection {
  id: string;
  title: string;
  movies: Movie[];
  viewAllUrl?: string;
  description?: string;
  displayType?: 'grid' | 'carousel' | 'list';
  isCollapsible?: boolean;
  isExpanded?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
  active: boolean;
  icon?: string;
}

export interface SearchSuggestion {
  display: string;
  searchTerm: string;
}