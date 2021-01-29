import * as React from 'react'
import useSWR from 'swr'
import {loadPlaylist} from 'lib/playlists'
import {FunctionComponent} from 'react'
import {GetServerSideProps} from 'next'
import {filter} from 'lodash'
import fetcher from 'utils/fetcher'
import CollectionPageLayout from 'components/layouts/collection-page-layout'
import SpecialCollectionLayout from 'components/layouts/special-collection-page-layout'

type PlaylistProps = {
  playlist: any
}

const Playlist: FunctionComponent<PlaylistProps> = ({
  playlist: initialPlaylist,
}) => {
  const {data} = useSWR(initialPlaylist.url, fetcher)

  const course = {...data, ...initialPlaylist}

  console.debug(`course loaded`, course)

  const {slug, items, id} = course

  const lessons = filter(items, (item) => {
    return ['lesson', 'talk'].includes(item.type)
  })

  let Layout: React.FC<any>

  switch (id) {
    case 414202:
      Layout = SpecialCollectionLayout
      break
    default:
      Layout = CollectionPageLayout
  }

  return (
    <Layout
      lessons={lessons}
      course={course}
      ogImageUrl={`https://og-image-react-egghead.now.sh/playlists/${slug}?v=20201103`}
    />
  )
}

export default Playlist

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  params,
}) => {
  const slug = params && (params.slug as string)
  const playlist = slug && (await loadPlaylist(slug))

  // await getCmsData(id)

  if (playlist?.slug !== slug) {
    res.setHeader('Location', playlist.path)
    res.statusCode = 302
    res.end()
    return {props: {}}
  } else {
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    return {
      props: {
        playlist,
      },
    }
  }
}
