export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": process.env.AWS_DIALECT,
    "aws_region": process.env.AWS_REGIONS,
    "aws_profile": process.env.AWS_PROFILES,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKETS
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": process.env.AWS_DIALECT
  },
  "jwt":{
    "secret":process.env.JWT_SECRET
  }
}


