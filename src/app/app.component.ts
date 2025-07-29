import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { MovieService } from './services/movie.service';
import { Movie, MovieSection, SearchSuggestion } from './services/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Jupiter | ERR';
  
  movieSections: MovieSection[] = [];
  searchResults: Movie[] = [];
  searchQuery = '';
  isSearchActive = false;
  isHeaderScrolled = false;
  showNoResults = false;
  
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();
  
  navLinks = [
    { name: 'Avaleht', href: '#', active: true },
    { name: 'Sarjad', href: '#', active: false },
    { name: 'Filmid', href: '#', active: false },
    { name: 'Dokid', href: '#', active: false },
    { name: 'Audio', href: '#', active: false },
    { name: 'Otse', href: '#', active: false }
  ];
  
  searchSuggestions: SearchSuggestion[] = [
    { display: 'Sarjad', searchTerm: 'sari' },
    { display: 'Eesti filmid', searchTerm: 'eesti' },
    { display: 'Dokumentaalid', searchTerm: 'dokumentaal' },
    { display: 'Krimisarjad', searchTerm: 'krimi' },
    { display: 'Meditsiin', searchTerm: 'meditsiin' },
    { display: 'Ajaloolised sarjad', searchTerm: 'ajaloosari' },
    { display: 'Komöödiad', searchTerm: 'komöödia' },
    { display: 'Draamad', searchTerm: 'draama' },
    { display: 'Sport', searchTerm: 'sport' },
    { display: 'Kultuur', searchTerm: 'kultuur' }
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovieSections();
    this.setupSearch();
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadMovieSections(): void {
    this.movieSections = this.movieService.getMovieSections();
  }

  private setupSearch(): void {
    this.searchSubject
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.performSearch(query);
      });
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.isHeaderScrolled = window.scrollY > 100;
    });
  }

  onSearchInput(value: string): void {
    this.searchQuery = value;
    this.searchSubject.next(value);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    const fallback = target.nextElementSibling as HTMLElement;
    if (target && fallback) {
      target.style.display = 'none';
      fallback.style.display = 'flex';
    }
  }

  private performSearch(query: string): void {
    if (!query.trim()) {
      this.searchResults = [];
      this.showNoResults = false;
      return;
    }

    this.searchResults = this.movieService.searchMovies(query);
    this.showNoResults = this.searchResults.length === 0;
  }

  openSearch(): void {
    this.isSearchActive = true;
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      const searchInput = document.getElementById('searchInput') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 300);
  }

  closeSearch(): void {
    this.isSearchActive = false;
    document.body.style.overflow = '';
    this.searchQuery = '';
    this.searchResults = [];
    this.showNoResults = false;
  }

  searchFor(searchTerm: string, displayText?: string): void {
    this.searchQuery = displayText || searchTerm;
    this.performSearch(searchTerm);
    
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = displayText || searchTerm;
    }
  }

  handleMovieClick(movie: Movie): void {
    if (movie.url) {
      window.open(movie.url, '_blank');
    } else {
      alert(`Playing: ${movie.title}\n\nThis would open the video player in a real Angular application.`);
    }
  }

  addToFavorites(movie: Movie, event: Event): void {
    event.stopPropagation();
    window.open('https://jupiter.err.ee/login', '_blank');
  }

  getMovieMetaInfo(movie: Movie): string {
    const metaParts = [movie.year, movie.duration, movie.genre].filter(Boolean);
    return metaParts.length > 0 ? metaParts.join(' • ') : 'Üksikasju pole saadaval';
  }

  hasValidMovieInfo(movie: Movie): boolean {
    return !!(movie.year?.trim() || movie.duration?.trim());
  }

  scrollMovies(event: Event, direction: 'left' | 'right'): void {
    const button = event.target as HTMLElement;
    const container = button.parentNode?.querySelector('.movies-container') as HTMLElement;
    
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  setActiveNavLink(index: number): void {
    this.navLinks.forEach((link, i) => {
      link.active = i === index;
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isSearchActive) {
      this.closeSearch();
    }
  }

  trackBySection(index: number, section: MovieSection): string {
    return section.id;
  }

  trackByMovie(index: number, movie: Movie): string {
    return movie.title;
  }
}