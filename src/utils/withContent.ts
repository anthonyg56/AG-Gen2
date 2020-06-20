import { BlogMetadata } from "../custom-types/blog"
import { ProjectsMetadata } from "../custom-types/projects"

type Params = { 
  params: { 
    slug: string 
  }
}[]

type Metadata = BlogMetadata | ProjectsMetadata

type GetMdxData = (metadata: Array<Metadata>, slug?: string | string[] | undefined) => Promise<Metadata | Array<Metadata> | Params | undefined>

export const getSlugs: GetMdxData = async posts => posts.map(metadata => ({ params: { slug: metadata.slug }}))

export const getMetadata: GetMdxData = async posts => posts.map(metadata => metadata)

export const getPostBySlug: GetMdxData = async (posts, slug) => posts.find(post => post.slug === slug)