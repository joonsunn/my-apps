import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { z } from 'zod'
import { zodValidator } from '@tanstack/zod-adapter'

const route = getRouteApi('/posts/$postId')

const postSearchSchema = z.object({
  page: z.number().default(1),
  filter: z.string().default(''),
  sort: z.enum(['asc', 'desc']).default('asc'),
})


export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  validateSearch: zodValidator(postSearchSchema)
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const {postId: postId2} = route.useParams()
  const { page, filter, sort } = Route.useSearch()
  const { page: page2, filter: filter2, sort: sort2 } = route.useSearch()
  return (
  <>
  <div>Hello postId:{postId} {page} {filter} {sort}!</div>
  <div>Hello postId2:{postId2} {page2} {filter2} {sort2}!</div>

  </>
)
}
