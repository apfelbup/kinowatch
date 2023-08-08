import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../utils/constans/api';
import { getCurrentYear } from '../utils/helpers/getCurrentYear/getCurrentYear';

export const streamberryAPI = createApi({
    reducerPath: 'streamberryAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
		getFilmById: build.query({
			query: (id) => `/v1.3/movie?search=${id}&field=id&token=${API_KEY}`
		}),
		getNewFilms: build.query({
			query: (limit) =>																											
				`/v1.3/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&selectFields=id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres%20persons.photo%20persons.name%20countries.name&page=1&sortType=-1&token=${API_KEY}`,
		}),
		getNewSeries: build.query({
			query: (limit) =>
				`/v1.3/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&selectFields=id%20year%20name%20enName%20type%20rating%20movieLength%20backdrop%20logo%20description%20genres%20persons.photo%20persons.name%20countries.name&page=1&sortType=-1&token=${API_KEY}`,
		}),
		getFilmByName: build.query({
			query: ({ filters, page, id }) =>
				`/movie?${filters.genre}&search=${id}&field=name&search=${filters.rating}&field=rating.kp&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`,
		}),
		getFilms: build.query({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`,
		}),
		getSeries: build.query({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`,
		}),
		getCartoons: build.query({
			query: ({ limit }) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=3&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
		getPersonById: build.query({
			query: (id) => `/person?search=${id}&field=id&token=${API_KEY}`,
		}),
		getFavourites: build.query({
			query: ({ query, filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`,
		}),
		getFilmsBySearch: build.query({
			query: ({ query, type, limit }) =>
				`/movie?search=${query}&field=name&limit=${limit}&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=true&token=${API_KEY}`,
		}),
		getReviewsById: build.query({
			query: ({ id, limit }) =>
				`/review?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`,
		}),
		getMovieImages: build.query({
			query: ({ id, limit }) =>
				`/image?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`,
		}),
    })
})

export const {
	useGetNewFilmsQuery,
	useGetNewSeriesQuery,
	useGetFilmByIdQuery,
	useGetFilmByNameQuery,
	useGetFilmsQuery,
	useGetSeriesQuery,
	useGetCartoonsQuery,
	useGetPersonByIdQuery,
	useGetFavouritesQuery,
	useGetFilmsBySearchQuery,
	useGetReviewsByIdQuery,
	useGetMovieImagesQuery
} = streamberryAPI;

export const {
	getNewCartoons,
	getNewFilms,
	getNewSeries,
	getFilmById,
	getFilmByName,
	getFilms,
	getSeries,
	getCartoons,
	getPersonById
} = streamberryAPI.endpoints;