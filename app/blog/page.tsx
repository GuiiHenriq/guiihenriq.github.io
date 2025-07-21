"use client"

import { BlogPageIntroduction } from '../components/pages/blog/page-introduction'
import { BlogPostsList } from '../components/pages/blog/posts-list'
import { Suspense, useState } from 'react'
import useSWR from 'swr'
import { Post } from '../types/posts'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error searching posts')
  return res.json()
}

function Spinner() {
  return (
    <div className="flex justify-center py-8">
      <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

function BlogFilters({
  orderBy,
  setOrderBy,
  search,
  setSearch,
}: {
  orderBy: string
  setOrderBy: (v: string) => void
  search: string
  setSearch: (v: string) => void
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <div className="relative w-full md:w-auto mt-2 min-w-[200px]">
        <select
          className="w-full h-14 bg-gray-800 rounded-lg text-gray-50 px-4 focus:outline-none focus:ring-2 ring-cyan-600 border-none appearance-none pr-10"
          value={orderBy}
          onChange={e => setOrderBy(e.target.value)}
        >
          <option value="createdAt_DESC">Latest</option>
          <option value="createdAt_ASC">Older</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
        </span>
      </div>
      <input
        type="text"
        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 px-4 focus:outline-none focus:ring-2 ring-cyan-600 border-none mt-2"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

function BlogPostsBrowser() {
  const [orderBy, setOrderBy] = useState('createdAt_DESC')
  const [search, setSearch] = useState('')

  const params = new URLSearchParams()
  params.set('orderBy', orderBy)
  if (search) params.set('search', search)

  const { data, isLoading, error } = useSWR<{ posts: Post[] }>(`/api/blog-posts?${params.toString()}`, fetcher)

  return (
    <div className="max-w-3xl mx-auto px-4">
      <BlogFilters orderBy={orderBy} setOrderBy={setOrderBy} search={search} setSearch={setSearch} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div className="text-center text-red-400 py-8">Error searching posts.</div>
      ) : data && data.posts.length === 0 ? (
        <div className="text-center text-gray-400 py-8">No posts found.</div>
      ) : (
        <BlogPostsList posts={data?.posts || []} />
      )}
    </div>
  )
}

export default function BlogPage() {
  return (
    <>
      <BlogPageIntroduction />
      <BlogPostsBrowser />
    </>
  )
}
