import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../utils/constans/api';
import { getCurrentYear } from '../utils/helpers/getCurrentYear/getCurrentYear';
import { IFilms, IPersons, QueryArgs } from '../utils/interfaces/query';

export const streamberryAPI = createApi({
    reducerPath: 'streamberryAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
		getFilmById: build.query<IFilms, string | string[] | undefined>({
			query: (id) => `/v1.3/movie?search=${id}&field=id&selectFields=videos.trailers.url%20id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20watchability.items.name%20logo%20description%20genres%20persons.photo%20persons.name%20persons.id%20countries.name&token=${API_KEY}`
		}),
		getNewFilms: build.query<IFilms, number>({
			query: (limit) =>																											
				`/v1.3/movie?field=rating.kp&search=6-20&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&field=videos.trailers.url&search=!null&sortField=votes.imdb&selectFields=id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres&page=1&sortType=-1&token=${API_KEY}`,
		}),
		getNewSeries: build.query<IFilms, number>({
			query: (limit) =>
				`/v1.3/movie?field=rating.kp&search=1-20&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&field=videos.trailers.url&search=!null&sortField=votes.imdb&selectFields=videos.trailers.url%20id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres&page=1&sortType=-1&token=${API_KEY}`,
		}),
		getFilms: build.query<IFilms, QueryArgs>({
			query: ({ filters, page }) =>
				`/v1.3/movie?search=${filters?.year ? filters.year : '2000-2022'}&field=year&search=${filters.rating ? filters.rating : '6-10'}&${filters?.genre ? '&genres.name='+filters.genre : ''}&field=rating.kp&search=!null&field=name&search=${filters.filmsType}&field=typeNumber&search=!null&sortType=-1&limit=25&page=${page}&selectFields=id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres&token=${API_KEY}`,
		}),

		getPersonById: build.query<IPersons, string | undefined>({
			query: (id) => `/v1/person?selectFields=age%20photo%20name%20enName%20sex%20profession.value%20movies.name%20facts.value&search=${id}&field=id&token=${API_KEY}`,
		}),
		getfamilyFilms: build.query({
			query: (limit) =>
			`/v1.3/movie?sortType=1&page=1&limit=${limit}&genres.name=семейный&selectFields=id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres&token=${API_KEY}`,
		}),
		getFilmsBySearch: build.query({
			query: (query) => 
			`/v1.2/movie/search?query=${query}&limit=20&token=${API_KEY}`,
		})
    })
})

export const {
	useGetNewFilmsQuery,
	useGetNewSeriesQuery,
	useGetFilmByIdQuery,
	useGetFilmsQuery,
	useGetPersonByIdQuery,
	useGetFilmsBySearchQuery,
	useGetfamilyFilmsQuery,
} = streamberryAPI;

export const {
	getNewFilms,
	getNewSeries,
	getFilmById,
	getFilms,
	getPersonById,
	getFilmsBySearch,
	getfamilyFilms
} = streamberryAPI.endpoints;