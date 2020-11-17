import matter from 'gray-matter'
import fs from 'fs'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import getPostsMetadata from '../../utils/getPostsMetadata'
import { ListOfPosts } from '../../styles/pages/BlogHome'

type Props = {
  metadata: string[]
}

export type MatterData = {
  slug: string
  title: string
  description: string
  date: string
  [key: string]: string
}

export default function Blog({ metadata }: Props): JSX.Element {
  const listItems: MatterData[] = metadata.map((post: string) => {
    console.log(matter(post))
    return matter(post).data as MatterData
  })
  return (
    <Layout>
      <ListOfPosts>
        {listItems.map((blog, i) => (
          <li key={i}>
            <div>
              <Link href={`blog/${blog.slug}`}>{blog.title}</Link>
              <p>{blog.date}</p>
            </div>
            <p>{blog.description}</p>
          </li>
        ))}
      </ListOfPosts>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const metadata = getPostsMetadata()

  return {
    props: {
      metadata
    }
  }
}
