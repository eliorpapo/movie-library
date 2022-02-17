import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  private moviesUrl = 'http://www.omdbapi.com/?apikey=cc9af44';
  private _moviesDb: Movie[] = gDefMovies;

  private _movies$ = new BehaviorSubject<Movie[]>([]);
  public movies$ = this._movies$.asObservable();

  public query() {
    const movies = this._moviesDb;
    this._movies$.next(movies);
  }

  public changeMovies(movies: Movie[]) {
    this._moviesDb = movies;
    this._movies$.next(movies);
  }

  public getByTitle(movieTitle: string, page: number): Observable<any> {
    const url = `${this.moviesUrl}&s=${movieTitle}&page=${page}`;
    return this.http.get<Movie>(url).pipe(
      tap((_) => console.log(`fetched movies names=${movieTitle}`)),
      catchError(this.handleError<Movie>(`getMovies names=${movieTitle}`))
    );
  }

  public getById(movieId: string): Observable<Movie> {
    const url = `${this.moviesUrl}&i=${movieId}`;
    return this.http.get<Movie>(url).pipe(
      tap((_) => console.log(`fetched movie id=${movieId}`)),
      catchError(this.handleError<Movie>(`getMovie id=${movieId}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  setDefMovies() {
    const movies = gDefMovies;
    this._movies$.next(movies);
  }
}

var gDefMovies = [
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Crime, Drama',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'United States, United Kingdom',
    Awards: 'Won 2 Oscars. 159 wins & 163 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '9.0/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '94%',
      },
      {
        Source: 'Metacritic',
        Value: '84/100',
      },
    ],
    Metascore: '84',
    imdbRating: '9.0',
    imdbVotes: '2,480,928',
    imdbID: 'tt0468569',
    Type: 'movie',
    DVD: '09 Dec 2008',
    BoxOffice: '$534,858,444',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    Language: 'English, Japanese, French',
    Country: 'United Kingdom, United States',
    Awards: 'Won 4 Oscars. 157 wins & 220 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '87%',
      },
      {
        Source: 'Metacritic',
        Value: '74/100',
      },
    ],
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '2,223,702',
    imdbID: 'tt1375666',
    Type: 'movie',
    DVD: '07 Dec 2010',
    BoxOffice: '$292,576,195',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Moneyball',
    Year: '2011',
    Rated: 'PG-13',
    Released: '23 Sep 2011',
    Runtime: '133 min',
    Genre: 'Biography, Drama, Sport',
    Director: 'Bennett Miller',
    Writer: 'Steven Zaillian, Aaron Sorkin, Stan Chervin',
    Actors: 'Brad Pitt, Robin Wright, Jonah Hill',
    Plot: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    Language: 'English',
    Country: 'United States',
    Awards: 'Nominated for 6 Oscars. 29 wins & 82 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '7.6/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '94%',
      },
      {
        Source: 'Metacritic',
        Value: '87/100',
      },
    ],
    Metascore: '87',
    imdbRating: '7.6',
    imdbVotes: '402,512',
    imdbID: 'tt1210166',
    Type: 'movie',
    DVD: '10 Jan 2012',
    BoxOffice: '$75,605,492',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    Rated: 'PG-13',
    Released: '26 Apr 2019',
    Runtime: '181 min',
    Genre: 'Action, Adventure, Drama',
    Director: 'Anthony Russo, Joe Russo',
    Writer: 'Christopher Markus, Stephen McFeely, Stan Lee',
    Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
    Plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    Language: 'English, Japanese, Xhosa, German',
    Country: 'United States',
    Awards: 'Nominated for 1 Oscar. 70 wins & 132 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.4/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '94%',
      },
      {
        Source: 'Metacritic',
        Value: '78/100',
      },
    ],
    Metascore: '78',
    imdbRating: '8.4',
    imdbVotes: '999,441',
    imdbID: 'tt4154796',
    Type: 'movie',
    DVD: '30 Jul 2019',
    BoxOffice: '$858,373,000',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Saving Private Ryan',
    Year: '1998',
    Rated: 'R',
    Released: '24 Jul 1998',
    Runtime: '169 min',
    Genre: 'Drama, War',
    Director: 'Steven Spielberg',
    Writer: 'Robert Rodat',
    Actors: 'Tom Hanks, Matt Damon, Tom Sizemore',
    Plot: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    Language: 'English, French, German, Czech',
    Country: 'United States',
    Awards: 'Won 5 Oscars. 79 wins & 75 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.6/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '93%',
      },
      {
        Source: 'Metacritic',
        Value: '91/100',
      },
    ],
    Metascore: '91',
    imdbRating: '8.6',
    imdbVotes: '1,321,251',
    imdbID: 'tt0120815',
    Type: 'movie',
    DVD: '25 May 2004',
    BoxOffice: '$217,049,603',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Titanic',
    Year: '1997',
    Rated: 'PG-13',
    Released: '19 Dec 1997',
    Runtime: '194 min',
    Genre: 'Drama, Romance',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
    Plot: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    Language: 'English, Swedish, Italian, French',
    Country: 'United States, Mexico',
    Awards: 'Won 11 Oscars. 125 wins & 83 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '7.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '89%',
      },
      {
        Source: 'Metacritic',
        Value: '75/100',
      },
    ],
    Metascore: '75',
    imdbRating: '7.8',
    imdbVotes: '1,117,107',
    imdbID: 'tt0120338',
    Type: 'movie',
    DVD: '08 Jan 2002',
    BoxOffice: '$659,363,944',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Fight Club',
    Year: '1999',
    Rated: 'R',
    Released: '15 Oct 1999',
    Runtime: '139 min',
    Genre: 'Drama',
    Director: 'David Fincher',
    Writer: 'Chuck Palahniuk, Jim Uhls',
    Actors: 'Brad Pitt, Edward Norton, Meat Loaf',
    Plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    Language: 'English',
    Country: 'United States, Germany',
    Awards: 'Nominated for 1 Oscar. 11 wins & 38 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '79%',
      },
      {
        Source: 'Metacritic',
        Value: '66/100',
      },
    ],
    Metascore: '66',
    imdbRating: '8.8',
    imdbVotes: '2,002,548',
    imdbID: 'tt0137523',
    Type: 'movie',
    DVD: '14 Oct 2003',
    BoxOffice: '$37,030,102',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    Rated: 'PG-13',
    Released: '19 Dec 2001',
    Runtime: '178 min',
    Genre: 'Action, Adventure, Drama',
    Director: 'Peter Jackson',
    Writer: 'J.R.R. Tolkien, Fran Walsh, Philippa Boyens',
    Actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
    Plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    Language: 'English, Sindarin',
    Country: 'New Zealand, United States',
    Awards: 'Won 4 Oscars. 121 wins & 126 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '91%',
      },
      {
        Source: 'Metacritic',
        Value: '92/100',
      },
    ],
    Metascore: '92',
    imdbRating: '8.8',
    imdbVotes: '1,767,565',
    imdbID: 'tt0120737',
    Type: 'movie',
    DVD: '06 Aug 2002',
    BoxOffice: '$315,710,750',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    Rated: 'PG',
    Released: '25 May 1977',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'George Lucas',
    Writer: 'George Lucas',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    Language: 'English',
    Country: 'United States',
    Awards: 'Won 7 Oscars. 63 wins & 29 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.6/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '92%',
      },
      {
        Source: 'Metacritic',
        Value: '90/100',
      },
    ],
    Metascore: '90',
    imdbRating: '8.6',
    imdbVotes: '1,299,658',
    imdbID: 'tt0076759',
    Type: 'movie',
    DVD: '06 Dec 2005',
    BoxOffice: '$460,998,507',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
  {
    Title: 'Iron Man',
    Year: '2008',
    Rated: 'PG-13',
    Released: '02 May 2008',
    Runtime: '126 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Jon Favreau',
    Writer: 'Mark Fergus, Hawk Ostby, Art Marcum',
    Actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
    Plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    Language: 'English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian',
    Country: 'United States, Canada',
    Awards: 'Nominated for 2 Oscars. 21 wins & 73 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '7.9/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '94%',
      },
      {
        Source: 'Metacritic',
        Value: '79/100',
      },
    ],
    Metascore: '79',
    imdbRating: '7.9',
    imdbVotes: '1,008,081',
    imdbID: 'tt0371746',
    Type: 'movie',
    DVD: '30 Sep 2008',
    BoxOffice: '$319,034,126',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
];
