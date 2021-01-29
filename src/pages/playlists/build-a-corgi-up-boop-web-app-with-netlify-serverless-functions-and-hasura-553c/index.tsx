import * as React from 'react'
import {FunctionComponent} from 'react'
import Card, {CardResource} from 'components/pages/home/card'
import EggheadPlayer from 'components/EggheadPlayer'
import Link from 'next/link'
import Image from 'next/image'
import Markdown from 'react-markdown'
import Eggo from '../../../components/images/eggo.svg'
import removeMarkdown from 'remove-markdown'
import {NextSeo} from 'next-seo'
import {track} from 'utils/analytics'
import {first, get} from 'lodash'
import {useViewer} from '../../../context/viewer-context'
import serverlessNetlifyData from './course-resource'

type CourseProps = {
  course: any
  dependencies: any
}

const Course: FunctionComponent<CourseProps> = () => {
  const {
    title,
    slug,
    image,
    summary,
    topics,
    prerequisisites,
    podcast,
    instructor,
    tags,
    resources,
    featureVideo,
  } = serverlessNetlifyData

  return (
    <>
      <NextSeo
        description={removeMarkdown(summary)}
        title={title}
        titleTemplate={'%s | egghead.io'}
        twitter={{
          handle: instructor.twitter,
          site: `@eggheadio`,
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title: title,
          // url: http_url,
          description: removeMarkdown(summary),
          site_name: 'egghead',
          images: [
            {
              url: image,
            },
          ],
        }}
      />
      <div>
        <article className="">
          <header className="relative -mx-5 px-5">
            <div className="absolute left-0 top-0 sm:-mt-5 -mt-3 h-3 w-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500" />
            <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-6 items-center md:pb-16 pb-8 md:pt-8 pt-4 max-w-screen-lg mx-auto">
              <div className="flex-shrink-0 mt-8">
                <Image
                  src={image}
                  alt={title}
                  width={288}
                  height={288}
                  quality={100}
                />
              </div>
              <div className="space-y-3">
                <div className="uppercase font-medium tracking-wide text-xs md:text-left text-center text-pink-600">
                  Portfolio Project
                </div>
                <h1 className="md:text-3xl text-3xl md:text-left text-center font-bold tracking-tight leading-snug pb-6 max-w-screen-sm">
                  {title}
                </h1>
                <Tags tags={tags} />
              </div>
            </div>
          </header>
          <main>
            <Markdown
              className="prose prose-lg md:prose-xl dark:prose-dark dark:prose-lg-dark dark:md:prose-xl-dark max-w-screen-md mx-auto"
              source={summary}
            />

            <div className="py-20 bg-gray-50 dark:bg-gray-800">
              <FeaturedVideoCard video={featureVideo} />
            </div>
            <div className="mt-20 dark:bg-gray-800 -mx-5 pt-24 xl:px-0 px-5">
              <div className="max-w-screen-lg mx-auto">
                <div className="mb-4 uppercase font-medium tracking-wide text-sm md:text-left text-center text-blue-600">
                  What You’ll Build for Your Portfolio
                </div>
                <h2 className="sm:text-2xl text-3xl sm:text-left font-semibold text-center leading-tighter pb-12">
                  How to integrate Serverless functions into your website
                </h2>
                {resources.map((part, idx) => {
                  const isLast = idx === resources.length - 1
                  return (
                    <Part
                      key={part.title}
                      part={part}
                      idx={idx}
                      isLast={isLast}
                    />
                  )
                })}
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 -mx-5 md:pt-24 pt-10 pb-40 xl:px-0 px-5 text-white ">
              <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 md:text-left text-center">
                <div>
                  {/* <div className="mb-2 uppercase font-medium tracking-wide text-sm md:text-left text-center text-purple-300">
                    What You’ll Build for Your Portfolio
                  </div> */}
                  <p className="text-xl mt-4 max-w-md md:mx-0 mx-auto">
                    By the end of this project, you’ll have your own dynamic
                    eCommerce store with a working checkout flow.
                  </p>
                  <ul className="text-blueGray-200 mt-6 leading-10 list-none list-inside text-lg font-light">
                    {topics.map((i) => (
                      <li className="space-x-4" key={i}>
                        <span className="text-purple-300">✓</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:row-start-auto row-start-1">
                  <Image
                    className="rounded-md shadow-lg"
                    src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1611951991/next.egghead.io/pages/projects/build-a-corgi-up-boop-web-app-with-netlify-serverless-functions-and-hasura-553c/Screen_Shot_2020-11-16_at_3.56.02_PM_1.png"
                    width={1128 / 2}
                    height={698 / 2}
                    alt="a screenshot of Booop these dogs interface"
                  />
                </div>
              </div>
              <div className="mt-16 font-light text-purple-300 grid md:grid-cols-5 grid-cols-2 lg:grid-rows-2 text-center max-w-screen-lg mx-auto md:gap-x-12 gap-x-3 md:gap-y-6 gap-y-5 tracking-wide">
                {[
                  'Serverless functions',
                  'Data Fetching',
                  'React useState',
                  'Netlify',
                  'CORS',
                  'Manage Private keys',
                  'Lambda Functions',
                  'Hasura',
                  'Postgres',
                  'Netlify deploys',
                ].map((i) => (
                  <div className="" key={i}>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </article>
        <div className="w-full mx-auto max-w-screen-lg items-center grid md:grid-cols-2 lg:gap-40 md:gap-24 gap-5">
          <Instructor instructor={instructor} />
          {podcast.id && (
            <div>
              <h3 className="text-lg font-semibold mb-2 md:text-left text-center">
                Listen to Jason tell you about this Portfolio Project
              </h3>
              <iframe
                title="project podcast"
                height="52px"
                width="100%"
                frameBorder="no"
                scrolling="no"
                seamless
                src={`https://player.simplecast.com/${podcast.id}?dark=false`}
              />
            </div>
          )}
        </div>
        <Join />
      </div>
    </>
  )
}

// ——— COMPONENTS

const Join: FunctionComponent = () => {
  const {viewer} = useViewer()
  return (
    <div className="md:mt-24 mt-16 md:py-48 py-24 text-center bg-black text-white -mx-5 xl:px-0 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-6">
        <div>
          <Eggo className="w-16" />
        </div>
        <h2 className="lg:text-2xl  text-xl font-semibold leading-tighter max-w-2xl">
          Add this project to your portfolio with your egghead Pro Membership
        </h2>
        {viewer?.is_pro ? (
          <>
            <Link href="/playlists/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c">
              <a
                onClick={() =>
                  track('clicked project', {
                    project:
                      'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
                  })
                }
                className="px-6 py-4 rounded-lg font-semibold bg-blue-600 text-white transition-all ease-in-out duration-300 hover:scale-105 transform hover:bg-blue-500 hover:shadow-xl"
              >
                Power up your website with Serverless Functions
              </a>
            </Link>
          </>
        ) : (
          <>
            <div>
              from just <strong>$20/month</strong>
            </div>
            <Link href="/pricing">
              <a
                onClick={() =>
                  track('clicked join CTA', {
                    project:
                      'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
                  })
                }
                className="px-6 py-4 rounded-lg font-semibold bg-blue-600 text-white transition-all ease-in-out duration-300 hover:scale-105 transform hover:bg-blue-500 hover:shadow-xl"
              >
                Power up your website with Serverless Functions
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

const Instructor: FunctionComponent<{
  instructor: {
    name: string
    bio: string
    path: string
    image: string
    slug: string
  }
}> = ({instructor: {name, bio, path, image, slug}}) => {
  return (
    <div className="flex flex-col space-y-2 md:items-start md:text-left text-center items-center -mt-20">
      <div className="rounded-full bg-white p-1 overflow-hidden">
        <Image
          className="rounded-full"
          src={image}
          width={160}
          height={160}
          alt="Jason Lengstorf"
        />
      </div>
      <div className="text-xs uppercase text-gray-600 dark:text-gray-400">
        Meet Your Instructor
      </div>
      <Link href={path}>
        <a
          onClick={() => {
            track(`clicked instructor profile link`, {
              project:
                'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
              instructor: slug,
            })
          }}
          className="text-lg font-semibold"
        >
          {name}
        </a>
      </Link>
      <Markdown className="prose dark:prose-dark max-w-xl" source={bio} />
    </div>
  )
}

function FeaturedVideoCard(props: {video: any}) {
  return (
    <Card className="lg:col-span-6">
      <div className="flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col justify-between items-start sm:pr-16 sm:pb-0 pb-10">
          <div>
            <h2 className="uppercase font-semibold text-xs text-gray-700 dark:text-gray-200">
              {props.video.name}
            </h2>
            <Link href={props.video.path}>
              <a
                onClick={() =>
                  track('clicked home page video link', {
                    resource: props.video.path,
                    linkType: 'text',
                  })
                }
                className="hover:text-blue-600 dark:hover:text-blue-300"
              >
                <h3 className="text-2xl font-bold tracking-tight leading-tighter mt-2">
                  {props.video.title}
                </h3>
              </a>
            </Link>
            <div className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors duration-150 ease-in-out mt-1">
              <Link href={props.video.instructor_path || ''}>
                <a
                  onClick={() =>
                    track('clicked home page video instructor', {
                      instructor: props.video.instructor,
                      linkType: 'image',
                    })
                  }
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {props.video.instructor}
                </a>
              </Link>
            </div>
            <Markdown className="prose dark:prose-dark dark:prose-sm-dark prose-sm mt-4">
              {props.video.description}
            </Markdown>
          </div>
        </div>
        <div className="sm:w-full -m-5 flex items-center flex-grow bg-gray-900">
          <EggheadPlayer
            preload={false}
            autoplay={false}
            poster={props.video.poster}
            hls_url={props.video.hls_url}
            dash_url={props.video.dash_url}
            subtitlesUrl={props.video.subtitlesUrl}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </Card>
  )
}

const Tags: FunctionComponent<{
  tags: {title: string; image: React.ReactElement}[]
}> = ({tags}) => {
  return (
    <div className="flex space-x-6 items-center md:justify-start justify-center">
      {tags.map((tag) => (
        <div key={tag.title} className="flex space-x-1 items-center">
          {tag.image}
          <span>{tag.title}</span>
        </div>
      ))}
    </div>
  )
}

const Part: FunctionComponent<{
  part: {
    title: string
    body?: string
    image: string
    lessons?: {title: string; path: string; slug: string}[]
  }
  idx: number
  isLast: boolean
}> = ({part: {title, body, image, lessons}, idx, isLast = false}) => {
  const index = idx + 1
  const gap = isLast ? 'md:pb-24 pb-10' : 'pb-10'

  const Thumbnail = () => {
    return image ? (
      <div className="overflow-hidden flex">
        <Image
          className="block"
          src={image}
          alt={title}
          width={202}
          height={171}
        />
      </div>
    ) : null
  }

  return (
    <div className="flex md:flex-row flex-col md:space-x-6 mt-4">
      <div
        className={`space-y-2 flex flex-col md:items-end items-center py-1 ${gap}`}
      >
        {/* <div className="uppercase font-semibold text-sm text-blue-500">Part {index}</div> */}
        {lessons ? (
          <Link href={get(first(lessons), 'path', '#')}>
            <a
              onClick={() => {
                track(`clicked first lesson thumbnail`, {
                  lesson: get(first(lessons), 'slug'),
                  project:
                    'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
                })
              }}
            >
              <Thumbnail />
            </a>
          </Link>
        ) : (
          <Thumbnail />
        )}
      </div>
      <div className="md:flex hidden flex-col items-center relative">
        <div className="flex items-center justify-center text-center text-xs text-gray-400 font-semibold w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0">
          <small>{index}</small>
        </div>
        <div className="border-r-2 border-gray-200 h-full" />
        {/* {isLast && (
          <div className="flex items-center justify-center text-center text-xs bg-blue-100 text-blue-500 font-semibold w-10 h-10 transform translate-y-10 absolute bottom-0 rounded-full border-none border-gray-200 flex-shrink-0">
            <FlagIcon />
          </div>
        )} */}
      </div>
      <div className={`md:w-full ${gap}`}>
        <h3 className="text-lg font-bold relative transform -translate-y-1 pb-1">
          {title}
        </h3>
        {body && <Markdown className="prose" source={body} />}
        {lessons && (
          <ul>
            {lessons.map((l) => (
              <li>
                {l.path ? (
                  <Link href={l.path}>
                    <a
                      onClick={() => {
                        track(`clicked lesson in list`, {
                          lesson: l.slug,
                          project:
                            'create-an-ecommerce-store-with-next-js-and-stripe-checkout',
                        })
                      }}
                      className="py-1 flex space-x-2 items-center dark:text-gray-100 text-gray-700 hover:text-blue-600 group"
                    >
                      {/* prettier-ignore */}
                      <div className="flex-shrink-0"><svg className="text-gray-400 dark:text-gray-400 group-hover:text-blue-600" width={18} height={18} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" ><path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" fill="currentColor"/></g></svg></div>
                      <div className="font-semibold">{l.title}</div>
                    </a>
                  </Link>
                ) : (
                  <div className="font-semibold py-1">{l.title}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Course
