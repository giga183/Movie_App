import { privateAxios } from '../config/axios'
import Category from '../types/categories'
import { apiKey } from './getMovies'

export const getMoviesDetails = async (movieId: string) => {
  return privateAxios.get<{ movieDetailsData: Category }>(
    `/movie/${movieId}?api_key=${apiKey}`
  )
}
