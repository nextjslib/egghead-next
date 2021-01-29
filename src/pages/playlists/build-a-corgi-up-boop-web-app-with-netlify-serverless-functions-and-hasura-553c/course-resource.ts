const serverlessNetlifyData: any = {
  title:
    'Build a Corgi Up-boop Web App with Netlify Serverless Functions and Hasura',
  slug:
    'build-a-corgi-up-boop-web-app-with-netlify-serverless-functions-and-hasura-553c',
  image:
    'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/414/202/full/EGH_NetlifyServerlessFunction_Final.png',
  summary: `Starting from a prebuilt frontend, Jason Lengstorf guides you through the creation of a "Corgi Up-boop App" that uses Netlify Functions and Hasura. You can view [the deployed final product on Netlify](https://egghead-serverless-functions.netlify.app/).

  You'll set up the Netlify CLI, and configure a local development environment before writing and deploying functions with a few different use cases.

  The first example function bypasses CORS restrictions to retrieve corgi data from an example third-party API.

  Next, you'll configure environmental variables to securely communicate with the Unsplash API without exposing private keys to the client.

  Serverless functions don't persist data by themselves, so we will use Hasura to create a GraphQL API for tracking the number of "boops" each corgi receives.

  This course is an excellent illustration of the speed of Serverless functions, and how fast you can implement functionality in your web applications.`,
  topics: [
    'Installing & configuring the Netlify CLI for local development',
    'Managing private keys in development and production',
    'Writing Serverless functions for interacting with APIs',
    'Configuring a PostgreSQL-backed GraphQL API with Hasura',
    'Writing custom React Hooks for triggering Serverless functions',
    'Deploying a complete app with Netlify',
  ],
  prerequisites: [
    {
      type: 'text',
      label: 'Command line familiarity',
    },
    {
      type: 'text',
      label: 'Accounts for Netlify, Hasura, and Heroku',
    },
  ],
  podcast: {
    id: '13be84e1-cb89-4d53-99e8-741206063298',
  },
  instructor: {
    name: 'Jason Lengstorf',
    slug: 'jason-lengstorf',
    path: '/q/resources-by-jason-lengstorf',
    bio: `Jason Lengstorf is a principal developer experience engineer at [Netlify](https://www.netlify.com/?utm_source=lengstorf-bio&utm_medium=bio-jl&utm_campaign=devex) and the host of [Learn With Jason](https://learnwithjason.dev/), a live-streamed video show where he pairs with people in the community to learn something new in 90 minutes. He’s passionate about building healthy, efficient teams and systems, and he’s done his best to positively influence the community, leadership, and technical health of open source and companies including Gatsby and IBM. He lives in Portland, Oregon.`,
    twitter: 'jlengstorf',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/204/medium/jason-lengstorf_%281%29.jpg',
  },
  tags: [
    {
      title: 'Netlify',
      image:
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
    },
    {
      title: 'Serverless',
      image:
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/296/thumb/serverless.png',
    },
  ],
  resources: [
    {
      title: 'lessons',
      image: '',
      lessons: [
        {
          slug: 'netlify-what-are-serverless-functions',
          title: 'What Are Serverless Functions?',
          path: '/lessons/netlify-what-are-serverless-functions',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-00-what-are-serverless-functions-rsmrC7OPM/egghead-00-what-are-serverless-functions-rsmrC7OPM.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'javascript-set-up-a-preact-project-in-a-local-development-environment',
          title: 'Set up a Preact Project in a Local Development Environment',
          path:
            '/lessons/javascript-set-up-a-preact-project-in-a-local-development-environment',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-01-project-setup-pmgjc0b-y/egghead-01-project-setup-pmgjc0b-y.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/thumb/javascriptlang.png',
        },
        {
          slug:
            'netlify-set-up-a-local-development-environment-for-serverless-functions-using-netlify',
          title:
            'Set up a Local Development Environment for Serverless Functions Using Netlify',
          path:
            '/lessons/netlify-set-up-a-local-development-environment-for-serverless-functions-using-netlify',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-02-set-up-a-local-development-environment-for-serverless-functions-using-netlify-HoynOpqR-/egghead-02-set-up-a-local-development-environment-for-serverless-functions-using-netlify-HoynOpqR-.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-deploy-serverless-functions-to-production-on-netlify-using-the-netlify-cli',
          title:
            'Deploy Serverless Functions to Production on Netlify using the Netlify CLI',
          path:
            '/lessons/netlify-deploy-serverless-functions-to-production-on-netlify-using-the-netlify-cli',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-03-deploy-serverless-functions-to-production-on-netlify-hwVEBMzK7/egghead-03-deploy-serverless-functions-to-production-on-netlify-hwVEBMzK7.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug: 'netlify-manually-trigger-netlify-serverless-functions-locally',
          title: 'Manually Trigger Netlify Serverless Functions Locally',
          path:
            '/lessons/netlify-manually-trigger-netlify-serverless-functions-locally',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-04-test-serverless-functions-Zo42w6Z-_/egghead-04-test-serverless-functions-Zo42w6Z-_.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-circumvent-cors-when-accessing-a-third-party-api-using-netlify-functions',
          title:
            'Circumvent CORS when Accessing a Third-Party API using Netlify Functions',
          path:
            '/lessons/netlify-circumvent-cors-when-accessing-a-third-party-api-using-netlify-functions',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-05-get-data-from-an-api-that-doesn-t-support-cors-using-serverless-functions-eKEv8Np20/egghead-05-get-data-from-an-api-that-doesn-t-support-cors-using-serverless-functions-eKEv8Np20.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-import-and-set-environment-variables-from-a-env-file-using-netlify-cli',
          title:
            'Import and Set Environment Variables from a .env file using Netlify CLI',
          path:
            '/lessons/netlify-import-and-set-environment-variables-from-a-env-file-using-netlify-cli',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-06-use-environment-variables-in-serverless-functions-with-netlify-BHXbHE7NQ/egghead-06-use-environment-variables-in-serverless-functions-with-netlify-BHXbHE7NQ.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-load-data-using-secure-api-keys-from-a-third-party-api-with-netlify-serverless-functions',
          title:
            'Load Data Using Secure API Keys from a Third-Party API with Netlify Serverless Functions',
          path:
            '/lessons/netlify-load-data-using-secure-api-keys-from-a-third-party-api-with-netlify-serverless-functions',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-07-load-data-using-secure-api-keys-from-a-third-party-api-using-serverless-functions-kObylf_y6/egghead-07-load-data-using-secure-api-keys-from-a-third-party-api-using-serverless-functions-kObylf_y6.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'postgresql-create-a-database-using-hasura-cloud-and-a-postgres-instance-to-store-data',
          title:
            'Create a Database using Hasura Cloud and a Postgres Instance to Store Data',
          path:
            '/lessons/postgresql-create-a-database-using-hasura-cloud-and-a-postgres-instance-to-store-data',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-08-create-a-database-to-store-client-interactions-with-hasura-1LXBl8F9U/egghead-08-create-a-database-to-store-client-interactions-with-hasura-1LXBl8F9U.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/053/thumb/postgres.png',
        },
        {
          slug:
            'netlify-send-graphql-requests-to-hasura-from-netlify-serverless-functions-using-node-fetch',
          title:
            'Send GraphQL Requests to Hasura from Netlify Serverless Functions using node-fetch',
          path:
            '/lessons/netlify-send-graphql-requests-to-hasura-from-netlify-serverless-functions-using-node-fetch',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-09-send-graphql-requests-from-serverless-functions-using-node-fetch-fPMxletIq/egghead-09-send-graphql-requests-from-serverless-functions-using-node-fetch-fPMxletIq.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-load-existing-data-from-a-hasura-database-using-netlify-serverless-functions',
          title:
            'Load Existing Data from a Hasura Database using Netlify Serverless Functions',
          path:
            '/lessons/netlify-load-existing-data-from-a-hasura-database-using-netlify-serverless-functions',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-10-load-existing-data-from-a-database-using-serverless-functions-3yFHbpvF6/egghead-10-load-existing-data-from-a-database-using-serverless-functions-3yFHbpvF6.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug:
            'netlify-update-data-in-database-triggered-by-client-interactions-with-netlify-serverless-functions',
          title:
            'Update Data in Database Triggered by Client Interactions with Netlify Serverless Functions',
          path:
            '/lessons/netlify-update-data-in-database-triggered-by-client-interactions-with-netlify-serverless-functions',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-11-increment-the-boop-count-when-a-user-clicks-the-button-using-serverless-functions-p-cMYiQyg/egghead-11-increment-the-boop-count-when-a-user-clicks-the-button-using-serverless-functions-p-cMYiQyg.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
        {
          slug: 'netlify-deploy-a-static-application-to-production-on-netlify',
          title: 'Deploy a Static Application to Production on Netlify',
          path:
            '/lessons/netlify-deploy-a-static-application-to-production-on-netlify',
          image:
            'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-finalize-finished-app-deployment-to-netlify-osSSAtRs6/egghead-finalize-finished-app-deployment-to-netlify-osSSAtRs6.jpg',
          tag_image:
            'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/239/thumb/netlify.png',
        },
      ],
    },
  ],
  featureVideo: {
    name: 'WTF is Serverless',
    title: 'What Are Serverless Functions?',
    path: '/lessons/netlify-what-are-serverless-functions',
    poster:
      'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-00-what-are-serverless-functions-rsmrC7OPM/egghead-00-what-are-serverless-functions-rsmrC7OPM.jpg',
    hls_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-00-what-are-serverless-functions-rsmrC7OPM/hls/egghead-00-what-are-serverless-functions-rsmrC7OPM.m3u8',
    dash_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-00-what-are-serverless-functions-rsmrC7OPM/dash/egghead-00-what-are-serverless-functions-rsmrC7OPM.mpd',
    description:
      'A serverless function is something that is going to allow us to do server-like things without having to manage servers, but an important distinction here is that serverless does not mean that there are no servers.\n\nThe environment is actually running on top of an operating system and uses physical servers, but the responsibility for provisioning and managing the infrastructure belongs entirely to the service provider.\n\nSome of the benefits of using serverless functions:\n\nEnhanced scalability. No need for developers to implement code to scale. It scales automatically.\nReduced time to market. Serverless is an optimized set of tools for building quickly.\nNo boiler code. A serverless function is just a tiny piece of logic. Reducing the complexity of software.\nMore time for user experience. Serverless functions allow teams to focus resources on the user experience and not on managing servers.\nSecurity. We can call third-party APIs securely without exposing important data on the client-side.',
    instructor_path: '/q/resources-by-jason-lengstorf',
    instructor: 'Jason Lengstorf',
  },
}

export default serverlessNetlifyData
