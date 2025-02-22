// storage-adapter-import-placeholder
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import {Project} from "@/collections/Project";
import {Skill} from "@/collections/Skill";
import {postgresAdapter} from "@payloadcms/db-postgres";
import {Header} from "@/app/globals/header/config";
import {aboutMe} from "@/app/globals/about-me/config";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
      Users,
      Media,
      Project,
      Skill
  ],
  globals: [
      Header,
      aboutMe
  ],
  /*editor: lexicalEditor(),*/
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI
    }
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        'media': {
          prefix: 'media'
        },
      },
      bucket: process.env.S3_BUCKET_NAME,
      config:
          {
            credentials: {
              accessKeyId: process.env.S3_ACCESS_KEY,
              secretAccessKey: process.env.S3_SECRET_KEY
            },
            region: process.env.S3_REGION,
            endpoint: process.env.S3_ENDPOINT,
          },
    })
  ],
})
