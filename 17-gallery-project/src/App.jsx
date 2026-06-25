import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const PAGE_SIZES = [12, 18, 24]

const App = () => {
  const [userData, setUserData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [pageSize, setPageSize] = useState(12)
  const [index, setIndex] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [updatedAt, setUpdatedAt] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      setError('')

      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${pageSize}`)
        setUserData(response.data)
        setUpdatedAt(new Date())
      } catch {
        setUserData([])
        setError('Unable to load images. Please check your internet connection and try again.')
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [index, pageSize, refreshKey])

  const filteredData = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    if (!normalizedSearch) return userData
    return userData.filter((item) => item.author.toLowerCase().includes(normalizedSearch))
  }, [searchTerm, userData])

  const handlePrev = () => {
    if (!isLoading && index > 1) {
      setIndex((current) => current - 1)
    }
  }

  const handleNext = () => {
    if (!isLoading) {
      setIndex((current) => current + 1)
    }
  }

  const handleRefresh = () => {
    if (!isLoading) {
      setRefreshKey((current) => current + 1)
    }
  }

  const handlePageSizeChange = (event) => {
    const value = Number(event.target.value)
    setPageSize(value)
    setIndex(1)
  }

  const renderGridContent = () => {
    if (isLoading) {
      return Array.from({ length: pageSize }).map((_, idx) => (
        <div key={idx} className='animate-pulse rounded-[28px] border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-black/10'>
          <div className='mb-4 h-64 w-full rounded-3xl bg-slate-800' />
          <div className='h-4 w-3/4 rounded-full bg-slate-800' />
          <div className='mt-3 h-3 w-1/2 rounded-full bg-slate-800' />
        </div>
      ))
    }

    if (filteredData.length === 0) {
      return (
        <div className='col-span-full flex min-h-[40vh] flex-col items-center justify-center rounded-4xl border border-dashed border-white/10 bg-slate-900/60 px-6 py-12 text-center'>
          <p className='mb-3 text-sm uppercase tracking-[0.3em] text-amber-300'>No results</p>
          <h2 className='max-w-xl text-2xl font-semibold text-white sm:text-3xl'>Nothing matched your search.</h2>
          <p className='mt-4 max-w-xl text-sm leading-6 text-slate-400'>Try another author name, change the page size, or navigate to the next page to see more photos.</p>
        </div>
      )
    }

    return filteredData.map((elem) => (
      <Card key={elem.id} elem={elem} onSelect={setSelectedImage} />
    ))
  }

  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <section className='mb-6 rounded-[36px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl space-y-4'>
              <p className='text-sm uppercase tracking-[0.32em] text-amber-300'>Gallery app</p>
              <h1 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>Explore photos responsively with search, pagination, and preview.</h1>
              <p className='max-w-2xl text-sm leading-6 text-slate-400 sm:text-base'>Browse Picsum images stored on a responsive grid, filter by author, change page size, and open a fullscreen preview with metadata.</p>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <button
                type='button'
                disabled={isLoading}
                onClick={handleRefresh}
                className={`rounded-full border border-amber-400 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200 transition ${isLoading ? 'cursor-not-allowed opacity-60' : 'hover:bg-amber-400/20'}`}
              >
                Refresh
              </button>
              <span className='rounded-full bg-slate-950/90 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-black/10'>
                {updatedAt ? `Updated ${updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Waiting for data...'}
              </span>
            </div>
          </div>

          <div className='mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]'>
            <input
              type='search'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder='Search by author name…'
              className='w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-white outline-none transition duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10'
            />

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl border border-white/10 bg-slate-950/80 p-4'>
                <label className='mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400'>Page size</label>
                <select
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  disabled={isLoading}
                  className='w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10'
                >
                  {PAGE_SIZES.map((size) => (
                    <option key={size} value={size}>{`${size} photos`}</option>
                  ))}
                </select>
              </div>

              <div className='rounded-3xl border border-white/10 bg-slate-950/80 p-4'>
                <label className='mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400'>Navigation</label>
                <div className='flex flex-wrap items-center gap-2'>
                  <button
                    type='button'
                    disabled={isLoading || index === 1}
                    onClick={handlePrev}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isLoading || index === 1 ? 'cursor-not-allowed bg-slate-800 text-slate-400 opacity-70' : 'bg-amber-400 text-slate-950 hover:bg-amber-500'}`}
                  >
                    Prev
                  </button>
                  <span className='text-sm font-semibold text-white'>Page {index}</span>
                  <button
                    type='button'
                    disabled={isLoading}
                    onClick={handleNext}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isLoading ? 'cursor-not-allowed bg-slate-800 text-slate-400 opacity-70' : 'bg-amber-400 text-slate-950 hover:bg-amber-500'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300'>
            <span>{isLoading ? 'Loading photos…' : error ? error : `Showing ${filteredData.length} images on this page`}</span>
            {!isLoading && !error && <span className='rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300'>{pageSize} per page</span>}
          </div>
        </section>

        <main className='grid gap-4'>
          <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {renderGridContent()}
          </div>
        </main>
      </div>

      {selectedImage && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur-sm'>
          <div className='relative w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50'>
            <button
              type='button'
              onClick={() => setSelectedImage(null)}
              className='absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'
            >
              Close
            </button>
            <div className='grid gap-6 lg:grid-cols-[1.4fr_0.8fr]'>
              <div className='relative overflow-hidden bg-slate-900'>
                <img
                  src={selectedImage.download_url}
                  alt={`Photo by ${selectedImage.author}`}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='space-y-5 p-6 sm:p-8'>
                <div>
                  <p className='text-sm uppercase tracking-[0.28em] text-amber-300'>Photo details</p>
                  <h2 className='mt-3 text-3xl font-semibold text-white'>{selectedImage.author}</h2>
                </div>
                <div className='space-y-3 text-sm text-slate-300'>
                  <p><span className='font-semibold text-white'>Dimensions:</span> {selectedImage.width} × {selectedImage.height}</p>
                  <p><span className='font-semibold text-white'>Photo ID:</span> {selectedImage.id}</p>
                  <p><span className='font-semibold text-white'>Source:</span> Picsum Photos</p>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <a
                    href={selectedImage.download_url}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-500'
                  >
                    Download full image
                  </a>
                  <a
                    href={selectedImage.url}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-200'
                  >
                    View author page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App