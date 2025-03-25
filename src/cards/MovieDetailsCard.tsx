import Category from '../types/categories'

type Props = {
  categories: Category
}

const MovieDetailsCard: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex flex-col m-auto bg-amber-400 rounded-1xl">
      <div></div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col m-auto">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${categories.poster_path}`}
          alt="Movie Poster"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {categories.original_title}
          </div>
          <p className="text-gray-700 text-base">{categories.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsCard
