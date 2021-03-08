export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME2,
    "password": process.env.POSTGRESS_PASSWORD2,
    "database": process.env.POSTGRESS_DATABASE2,
    "host": process.env.POSTGRESS_HOST2,
    "dialect": process.env.AWS_DIALECT2,
    "aws_region": process.env.AWS_REGIONS2,
    "aws_profile": process.env.AWS_PROFILES2,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKETS2
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

